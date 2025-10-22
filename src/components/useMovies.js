import { useState, useEffect } from "react";


export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    let timer;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `https://react-practicing.onrender.com/api/movies?title=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');

        const data = await res.json();
        console.log(data);

        if (!data || data.length === 0) {
          setError('Movie not found!');
          setMovies([]);
        } else {
          setMovies(data);
          setError('');
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    // Alleen fetchen als query minimaal 3 karakters heeft
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    // Debounce: wacht 500ms nadat de gebruiker stopt met typen
    timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    // Cleanup: annuleren van timer en fetch bij nieuwe query of unmount
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}