import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites";
import { iRecipe } from "../components/recipe-item/RecipeItem";
import { userSlice } from "./user/user.slice";

//Если редукторов несколько, то их нужно объеденять с помощью
//функции combineReducers

//Важно! - называть поля в combineReducers темиже именами, что и слайсы(у них есть поле name)
const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
});
//Интересно, почему combineReducers принимает не только редукторы, но и слайсы?

export const store = configureStore({
  reducer: reducers,
});

export interface iStore {
  favorites: iRecipe[];
}

// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
