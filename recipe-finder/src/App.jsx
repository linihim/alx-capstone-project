import React, { useState }  from 'react'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/Recipecard'
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
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;