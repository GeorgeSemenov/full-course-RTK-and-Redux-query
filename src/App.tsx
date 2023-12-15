import React from "react";
import "./App.css";
import RecipeItem from "./components/recipe-item/RecipeItem";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <RecipeItem id={1} name="Лазанья" />
        <RecipeItem id={2} name="Каша Малафьяша" />
        <RecipeItem id={3} name="Копи Паста" />
      </div>
    </>
  );
}

export default App;
