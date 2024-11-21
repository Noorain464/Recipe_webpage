import React, { useState } from "react";

const Filter = ({setFilters}) => {
  const [cuisine, setCuisine] = useState([]); 
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [cookingTime, setCookingTime] = useState({ min: 0, max: 120 }); 
  const [excludedIngredients, setExcludedIngredients] = useState([]);

  const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "American"];
  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Keto"];

  const resetFilters = () => {
    setCuisine([]);
    setDietaryRestrictions([]);
    setCookingTime({ min: 0, max: 120 });
    setExcludedIngredients([]);
    setFilters({})
  };

  const applyFilters = () => {
    const filters = {
      cuisine,
      dietaryRestrictions,
      cookingTime,
      excludedIngredients,
    };
    setFilters(filters);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Filter Recipes</h2>
      <div>
        <h3>Cuisine Types</h3>
        {cuisines.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={cuisine.includes(type)}
              onChange={(e) => {
                if (e.target.checked) {
                  setCuisine([...cuisine, e.target.value]);
                } else {
                  setCuisine(cuisine.filter((item) => item !== e.target.value));
                }
              }}
            />
            {type}
          </label>
        ))}
      </div>
      <div>
        <h3>Dietary Restrictions</h3>
        {dietaryOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={dietaryRestrictions.includes(option)}
              onChange={(e) => {
                if (e.target.checked) {
                  setDietaryRestrictions([
                    ...dietaryRestrictions,
                    e.target.value,
                  ]);
                } else {
                  setDietaryRestrictions(
                    dietaryRestrictions.filter(
                      (item) => item !== e.target.value
                    )
                  );
                }
              }}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <h3>Cooking Time Range (Minutes)</h3>
        <label>
          Min:
          <input
            type="number"
            value={cookingTime.min}
            onChange={(e) =>
              setCookingTime({ ...cookingTime, min: +e.target.value })
            }
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            value={cookingTime.max}
            onChange={(e) =>
              setCookingTime({ ...cookingTime, max: +e.target.value })
            }
          />
        </label>
      </div>

      <div>
        <h3>Exclude Ingredients</h3>
        <input
          type="text"
          placeholder="Enter ingredients (comma separated)"
          value={excludedIngredients.join(", ")}
          onChange={(e) =>
            setExcludedIngredients(e.target.value.split(",").map((x) => x.trim()))
          }
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={resetFilters} style={{ marginLeft: "10px" }}>
          Reset Filters
        </button>
      </div>
    </div>
    
  );
};

export default Filter;

