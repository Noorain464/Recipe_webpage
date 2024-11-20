import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';
import NutritionalValue from './NutritionalValue';

const RecipeDetails = () => {
    const { id } = useParams();
    const [RecipeDetail, setRecipeDetail] = useState(null);

    const getRecipeDetails = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
                params: {
                    apiKey: process.env.REACT_APP_RECIPE_API_KEY,
                }
            });
            // console.log("RecipeDerails",response.data);
            setRecipeDetail(response.data);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
        }
    };

    useEffect(() => {
        getRecipeDetails();
    }, [id]);

    if (!RecipeDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className='recipedetails'>
            <div className='left'>
                <h2 className='title'>{RecipeDetail.title}</h2>
                <h1>Ingredients</h1>
                <ul>
                    {RecipeDetail.extendedIngredients.map(ingredient => <li>{ingredient.original}</li>)}
                </ul>
                <h1>Instructions</h1>
                <ul>
                    {RecipeDetail.analyzedInstructions[0].steps.map(step => <li>{step.step}</li>)}
                </ul>
                <h1>Nutritional Value</h1>
                <NutritionalValue id={id}/>
                <h3>Ready in {RecipeDetail.readyInMinutes} minutes</h3>
                <h3>Servings: {RecipeDetail.servings}</h3>
                
            </div>
            <div className='recipe_image'>
                <img src={RecipeDetail.image} alt={RecipeDetail.title} />
            </div>
        </div>
    );
};

export default RecipeDetails;

