import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/Recipecard'
import { searchRecipes } from '../services/api'

const Home = () => {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;