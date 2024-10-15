import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/Recipecard'
import PopularRecipes from '../components/PopularRecipes'
import { searchRecipes } from '../services/api'

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] =  useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const results = await searchRecipes(query);
      setRecipes(results || []);
    } catch (error) {
        setError('An error occurred while fetching recipes. Please try again.');
        setRecipes([]);
    } finally {
        setLoading(false);
    }    

  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700 text-[45px]">Yum Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p className="text-center">No reciepes found!</p>}
      {!loading && recipes.length === 0 && !error && (
        <PopularRecipes />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;