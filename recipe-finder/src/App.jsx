import React from 'react';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center"> Yum 
        Recipe Finder</h1>
      <SearchBar />
    </div>
  );
}

export default App;