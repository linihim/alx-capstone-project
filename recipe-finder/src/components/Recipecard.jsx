import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.strMeal}</h2>
        <p className="text-gray-600">Category: {recipe.strCategory}</p>
        <p className="text-gray-600">Cuisine: {recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;