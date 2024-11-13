import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeCard.css';
const RecipeCard = () => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const getRecipes = async () => {
        // console.log(process.env.REACT_APP_RECIPE_API_KEY);
        const recipeUrl = "https://api.spoonacular.com/recipes/complexSearch";
        try {
            const response = await axios.get(recipeUrl,{
                params: { 
                apiKey : process.env.REACT_APP_RECIPE_API_KEY,
                number: 10,
                offset: (page - 1) * 10
                } 
            });
            console.log();
            setRecipes(prevRecipes => [...prevRecipes, ...response.data.results]);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        getRecipes();
    }, [page]);
    
    return (
        <div>
            <div className='recipe-grid'>
                {recipes.map((recipe,index) => (
                    <div key={index} className='recipe-card'>
                        <img src={recipe.image} alt="" className='recipe-image' />
                        <h3 className='recipe-title'>{recipe.title}</h3>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default RecipeCard;
