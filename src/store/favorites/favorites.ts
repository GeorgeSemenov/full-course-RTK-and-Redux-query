import { createSlice } from "@reduxjs/toolkit";
import { iRecipe } from "../../components/recipe-item/RecipeItem";

const initialState: iRecipe[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState, //инициированно, см выше.
  reducers: {
    toggleFavorites: (state: iRecipe[], { payload: recipe }) => {
      //удаляет, если рецепт уже есть и добавляет, если рецепта нет в сторе
      const index = state.findIndex((rec: iRecipe) => rec.id === recipe.id);
      //проверка на то, есть ли уже данный рецепт в сторе
      if (~index) {
        //Если есть, то удаляем
        //Должен сказать, что ты не можешь просто так взять и
        //отфильтровать массив, ты должен использовать методы изменяющие массив
        //а не те, что возвращают новый массив
        //Проще говоря если ты захочешь удалить все элементы массива то
        //строка state = [] = не сработает потому что, хоть и используется immer
        //Видимо есть какие-то ещё ограничения. придётся писать satae.splie(0,state.length)
        state.splice(index, 1);
      } else {
        //Если нет - добавляем
        state.push(recipe);
      }
    },
  },
});

export const { reducer, actions } = favoritesSlice;
export const { toggleFavorites } = favoritesSlice.actions;
