import React from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import useFavorites from "../../hooks/useFavorites";

export default function RecipeItem(recipe: iRecipe) {
  const { name, id, image } = recipe;
  //Благодаря кастомному хуку useFavorites - можно отказаться от длинной записи
  // const favorites = useSelector((state: iStore) => state.favorites);
  //и просто использовать хук не импортируя iStore и useSelector
  const favorites = useFavorites();
  //Благодаря хуку самодельному useActions мы можем не импортировать
  //dispatch, а затем ещё и экшон гейнератор, а сразу связанный диспатч
  //с нужным экшон голубогенератором
  const { toggleFavorites } = useActions();
  const isExist = favorites.some((rec: iRecipe) => rec.id === id);
  return (
    <div className={styles.item}>
      <img src={image} alt={name} width={50}></img>
      <h2>{name}</h2>
      <button
        onClick={() => {
          //Благодаря хуку самодельному useActions мы можем отказаться от записи
          // dispatch(toggleFavorites(recipe));
          //И использовать более простую запись
          toggleFavorites(recipe);
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
  image?: string;
}
