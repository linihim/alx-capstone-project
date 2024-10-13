import React from 'react';

const RecipeDetails = ({ recipe }) => {
  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith('strIngredient') && recipe[key])
    .map((key, index) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${index + 1}`],
    }));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <p className="whitespace-pre-line">{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;