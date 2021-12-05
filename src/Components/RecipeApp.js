import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import useFetch from "../useFetch";

const RecipeApp = ({ slides }) => {
  // const { recipes, setRecipes, search, setSearch, query, setQuery, getSearch } = useFetch();
  const APP_ID = "991ea51c";
  const APP_KEY = "2cf67dbfc5904245a50d829acb709d00";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
 

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" onChange={setQuery} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <Link className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            totalWeight={recipe.recipe.totalWeight.toFixed(2)}
            image={recipe.recipe.image}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </Link>

      <section className="sct">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        {SliderData.map((slide, index) => {
          setTimeout(() => {
            {
              nextSlide();
            }
          }, 3000);
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="image" className="image" />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </section>
    </div>
  );
};

export default RecipeApp;
