import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultRecipe = { name: "", image: "" };
export default function CreateRecipe() {
  const [recipe, setRecipe] = useState(defaultRecipe);
  //https://redux-toolkit.js.org/rtk-query/usage/mutations
  const [postRecipe, result] = useCreateRecipeMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postRecipe(recipe).then(() => {
      setRecipe(defaultRecipe);
    });
    //postRecipe - добавляет данные на сервер, но не
    //на нашу страничку, чтобы новые данные тоже подтянулись
    //нужно обновить страничку.
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="name"
          value={recipe.name}
          onChange={(e) => {
            setRecipe({ ...recipe, name: e.target.value });
          }}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="image"
          value={recipe.image}
          onChange={(e) => {
            setRecipe({ ...recipe, image: e.target.value });
          }}
        />
      </label>
      <button type="submit">криатинин</button>
    </form>
  );
}
