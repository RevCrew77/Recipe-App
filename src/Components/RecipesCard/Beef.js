import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import Recipe from "../Recipe";

export default function RecipeList() {
  const { recipes, search, query } = useFetch();

  return (
    <div>
      <form onSubmit={search} className="search-form">
        <input className="search-bar" type="text" onChange={query} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

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
