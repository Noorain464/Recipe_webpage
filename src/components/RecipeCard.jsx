import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
const RecipeCard = ({searchQuery}) => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const getRecipes = async () => {
        setLoading(true);
        // console.log(process.env.REACT_APP_RECIPE_API_KEY);
        const recipeUrl = "https://api.spoonacular.com/recipes/complexSearch";
        try {
            const response = await axios.get(recipeUrl,{
                params: { 
                apiKey : process.env.REACT_APP_RECIPE_API_KEY,
                offset: (page - 1) * 10
                } 
            });
            console.log();
            setRecipes(prevRecipes => [...prevRecipes, ...response.data.results]);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getRecipes();
    }, [page]);

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div className='recipe-cards'>
            <h1>Recipes</h1>
            <div className='recipe-grid'>
                {filteredRecipes.map((recipe,index) => (
                    <Link to={`/recipe/${recipe.id}`} key={index} className='recipe-card'>
                        <img src={recipe.image} alt="" className='recipe-image' />
                        <h3 className='recipe-title'>{recipe.title}</h3>
                    </Link>
                ))}
            </div>
            
        </div>
    );
};

export default RecipeCard;
