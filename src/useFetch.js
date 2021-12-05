import { useEffect, useState } from "react";

const useFetch = () => {
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

  return { recipes, setRecipes, search, setSearch, query, setQuery, getSearch };
};

export default useFetch;
