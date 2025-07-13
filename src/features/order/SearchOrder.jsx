import { useState } from 'react';
import { useNavigate } from 'react-router';


function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(e) {
    e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`)
        setQuery("");
}

  return (
    <form onSubmit = {handleSubmit}>
      <input className = "px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full focus:outline-none sm:focus:w-72 sm:w-64 placeholder:text-stone-400 w-30 focus:ring focus:ring-opacity-50 focus:ring-yellow-500"
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
