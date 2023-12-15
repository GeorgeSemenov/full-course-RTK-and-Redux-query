import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites";
import { iRecipe } from "../components/recipe-item/RecipeItem";

//Если редукторов несколько, то их нужно объеденять с помощью
//функции combineReducers

const reducers = combineReducers({ favorites: favoritesReducer });

export const store = configureStore({
  reducer: reducers,
});

export interface iStore {
  favorites: iRecipe[];
}

// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
