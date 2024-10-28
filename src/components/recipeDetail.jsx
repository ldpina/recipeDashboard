import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import '../components/css/pageDetails.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [nutritionData, setNutritionData] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipeDetails(data);

        const nutritionResponse = await fetch(
          `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`
        );
        const nutritionInfo = await nutritionResponse.json();
        setNutritionData(nutritionInfo);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipeDetails || !nutritionData) return <p>Loading...</p>;

  const nutrientData = [
    {
      name: 'Protein',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Protein')?.amount || 0,
    },
    {
      name: 'Fat',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Fat')?.amount || 0,
    },
    {
      name: 'Carbohydrates',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Carbohydrates')?.amount || 0,
    },
    {
      name: 'Sugar',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Sugar')?.amount || 0,
    },
    {
      name: 'Sodium',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Sodium')?.amount || 0,
    },
    {
      name: 'Saturated Fat',
      amount: nutritionData.nutrients.find(nutrient => nutrient.name === 'Saturated Fat')?.amount || 0,
    },
  ];

  return (
    <div className='mainArea'>
      <h1>{recipeDetails.title}</h1>
      <h2>Ready in: {recipeDetails.readyInMinutes} Mins</h2>
      <h2>Serves: {recipeDetails.servings}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
      
      {/* Display Nutrition Bar Chart */}
      <div className='chartContainer'>
        <h3>Nutritional Information Bar Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={nutrientData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <Bar dataKey="amount" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RecipeDetails;
