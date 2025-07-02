import { useState, useEffect } from "react";



export function useMovies(query) {
   const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

 
    useEffect(() => {
        // callback?.();
        const controller = new AbortController();
    
        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError('');
    
            const res = await fetch(
              `http://localhost:4000/api/movies?title=${query}`,
              { signal: controller.signal }
            );
    
            if (!res.ok)
              throw new Error('Something went wrong with fetching movies');
    
            const data = await res.json();
            console.log(data);
    
            if (data.Response === 'False') {
              throw new Error('Movie not found!');
            }
            setMovies(data.Search);
            setError('');
          } catch (err) {
            console.log(err.message);
    
            if (err.name !== 'AbortError') {
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
    
        if (query.length < 3) {
          setMovies([]);
          return;
        }
        // handleCloseMovie();
        fetchMovies();
    
        return function () {
          controller.abort();
        };
      }, [query]);
    
    return {movies,isLoading,error}
}


