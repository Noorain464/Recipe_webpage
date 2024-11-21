import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
const RecipeCard = ({searchQuery,filters}) => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const getRecipes = async () => {
        setLoading(true);
        console.log("Filters selcted : ",filters);
        // console.log(process.env.REACT_APP_RECIPE_API_KEY);
        const recipeUrl = "https://api.spoonacular.com/recipes/complexSearch";
        try {
            const response = await axios.get(recipeUrl,{
                params: { 
                apiKey : process.env.REACT_APP_RECIPE_API_KEY,
                    addRecipeInformation:true,
                    offset: (page - 1) * 10,
                } 
            });
            console.log("Recipes:",response.data.results);
            setRecipes(prevRecipes => [...prevRecipes, ...response.data.results]);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setLoading(false);
        }
    };
    

    useEffect(() => {
        getRecipes();
    }, [page,filters]);

    const searchedRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // const 
    
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
            <div className='recipe-filter'>
                {Object.keys(filters).map(key => (
                    <p key={key}>
                        {key}: 
                        {typeof filters[key] === 'object' ? 
                            `${filters[key].min} - ${filters[key].max} minutes` : 
                            filters[key]
                        }
                    </p>
                ))}
            </div>

            <div className='recipe-grid'>
                {searchedRecipes.map((recipe,index) => (
                    <Link to={`/recipe/${recipe.id}`} key={index} className='recipe-card'>
                        <img src={recipe.image} alt="" className='recipe-image' />
                        <h3 className='recipe-title'>{recipe.title}</h3>
                    </Link>
                ))}
            </div>
            <div>
                <h1>
                    
                </h1>
            </div>
            
        </div>
    );
};

export default RecipeCard;

