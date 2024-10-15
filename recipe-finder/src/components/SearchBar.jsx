import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-900  border-orange-500"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-orange-900 text-white rounded-lg hover:bg-orange-300 focus:outline-none focus:ring-1 focus:ring-orange-900"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;