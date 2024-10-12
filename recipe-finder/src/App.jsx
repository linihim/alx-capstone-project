import React, { useState }  from 'react'
import SearchBar from './components/SearchBar'
import { searchRecipes } from './services/api'

function App() {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (query) => {
      try {
        const results = await searchRecipes(query);
        setRecipes(results || []);
      } catch (error) {
        console.error('Error searching recipes:', error);
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center"> Yum 
        Recipe Finder</h1>
      <SearchBar />
    </div>
  );
}

export default App;