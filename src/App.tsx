import React from "react";
import "./App.css";
import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem id={1} name="Лазанья" />
      <RecipeItem id={2} name="Каша Малафьяша" />
      <RecipeItem id={3} name="Копи Паста" />
    </div>
  );
}

export default App;
