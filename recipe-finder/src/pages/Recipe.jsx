import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import RecipeDetails from '../components/Recipedetails'
import { getRecipeById } from '../services/api'

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        setError('An error occurred while fetching the recipe. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center mt-8">Recipe not found.</div>;
  }

  return (
    <div>
        <Link to="/" className="inline-block mb-4 text-orange-700 hover:underline font-bold">&larr; Back to search</Link>
        {recipe && <RecipeDetails recipe={recipe} />}
    </div>
  );
};

export default Recipe;