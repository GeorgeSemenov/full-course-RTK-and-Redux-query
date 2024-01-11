import React from "react";
import "./App.css";
import RecipeItem from "./components/recipe-item/RecipeItem";
import Header from "./components/header";
import User from "./components/user";
import { useGetRecipesQuery } from "./store/api/api";

function App() {
  const { isLoading, data } = useGetRecipesQuery("");
  console.log(data);
  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <div>Загружаю товары</div>
        ) : (
          data.map((recipe) => <RecipeItem recipe={recipe} />)
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
