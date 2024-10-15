import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRecipe } from '../services/api';

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const recipes = await Promise.all([
          getRandomRecipe(),
          getRandomRecipe(),
          getRandomRecipe()
        ]);
        setPopularRecipes(recipes);
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-900">Popular Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularRecipes.map((recipe) => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;