import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecipeDetails from '../components/Recipedetails'
import { getRecipeById } from '../services/api'

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return <RecipeDetails recipe={recipe} />;
};

export default Recipe;