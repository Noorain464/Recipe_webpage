import axios from 'axios';
import React, { useEffect, useState } from 'react'
const NutritionalValue = ({id}) => {
    const [nutritionalValue, setNutritionalValue] = useState([]);
    const getNutrionalValue = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`, {
                params: {
                    apiKey: process.env.REACT_APP_RECIPE_API_KEY,
                }
            });
            console.log(response.data);
            setNutritionalValue(response.data);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
        }
    }
    useEffect(() => {
        getNutrionalValue();
    })
  return (
    <div>
        <div className='nutritionalvalue'>
            <ul>
                <li>Calories: {nutritionalValue.calories}</li>
                <li>Carbohydrates: {nutritionalValue.carbs}</li>
                <li>Protein: {nutritionalValue.protein}</li>
                <li>Fat: {nutritionalValue.fat}</li>
            </ul>
        </div>
    </div>
  )
}

export default NutritionalValue