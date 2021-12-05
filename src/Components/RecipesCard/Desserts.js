import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Recipe from "../Recipe";

export default function RecipeList() {
  const APP_ID = "991ea51c";
  const APP_KEY = "2cf67dbfc5904245a50d829acb709d00";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("desserts");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  return (
    <div>
    
      <Link className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            totalWeight={(recipe.recipe.totalWeight).toFixed(2)}
            image={recipe.recipe.image}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </Link>
    </div>
  );
}
