import React, { useEffect, useState } from "react";
import Axios from "axios";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";

const Recipes = () => {
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    setRecipes(response.data.hits);
    // console.log(response.data.hits);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
   
  };

  return (
    <div>
      <Search
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center  mb-3">
          <h1 className="text-slanted">Recipe List</h1>
        </div>
      </div>
      {recipes.map((recipe) => (
        <RecipeList
          key={recipe.recipe.id}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          source={recipe.recipe.source}
          url={recipe.recipe.url}
          ingredients={recipe.recipe.ingredients}
          mealType={recipe.recipe.mealType}
          
          totalTime ={recipe.recipe.totalTime}
        />
      ))}
    </div>
  );
};

export default Recipes;