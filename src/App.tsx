import React from "react";
import "./App.css";
import RecipeItem, { iRecipe } from "./components/recipe-item/RecipeItem";
import Header from "./components/header";
import User from "./components/user";
import { useGetRecipesQuery } from "./store/api/api";
import CreateRecipe from "./components/create-recipe";

function App() {
  const { isLoading, data } = useGetRecipesQuery("");
  console.log(data);
  return (
    <>
      <Header />
      <CreateRecipe />
      <div>
        {isLoading ? (
          <div>Загружаю товары</div>
        ) : data ? (
          data.map((recipe: iRecipe) => (
            <RecipeItem key={recipe.id} {...recipe} />
          ))
        ) : (
          <div>Recipes not found (check if your json server is running)</div>
        )}
        {}
      </div>
      <User />
      <div>
        <RecipeItem id={1} name="Лазанья" />
        <RecipeItem id={2} name="Каша Малафьяша" />
        <RecipeItem id={3} name="Копи Паста" />
      </div>
    </>
  );
}

export default App;
