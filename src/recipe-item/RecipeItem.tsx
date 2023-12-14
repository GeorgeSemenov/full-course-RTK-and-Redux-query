import React from "react";
import styles from "./RecipeItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { iStore } from "../store/store";
import { toggleFavorites } from "../store/favorites/favorites";

export default function RecipeItem(recipe: iRecipe) {
  const { name, id } = recipe;
  const favorites = useSelector((state: iStore) => state.favorites);
  const dispatch = useDispatch();
  const isExist = favorites.some((rec: iRecipe) => rec.id === id);
  return (
    <div className={styles.item}>
      <h2>{name}</h2>
      <button
        onClick={() => {
          dispatch(toggleFavorites(recipe));
        }}
      >
        {isExist ? "Remove from " : "Add to "}favorites
      </button>
    </div>
  );
}

export interface iRecipe {
  name: string;
  id: number;
}
