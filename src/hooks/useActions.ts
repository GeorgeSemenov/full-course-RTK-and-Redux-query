//пример с описанием https://redux.js.org/api/bindactioncreators
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as favoriteActions } from "../store/favorites/favorites";

/******************************************/
//Пример использования см в RecipeItem.tsx
/******************************************/
//это самодельный хук, который возрвщает диспатчу с уже конкретным экшонгенератором
//Таким образом, когда тебе понадобиться исопльзовать диспатч тебе не
//нужно будет вызывать диспатч а потом в него передавать экшон генератор
//у тебя сразу уже будет настроенный нужным образом диспатч.

export const useActions = () => {
  const dispatch = useDispatch();

  //Тут будут храниться все экшоны нашего проекта
  const rootActions = {
    ...favoriteActions,
  };

  //bindActionCreators - возвращает диспатч с уже указанным
  //экшонкриэйтором
  //useMemo нужно, чтобы закешировать ведь экшоны не будут меняться, только диспатч
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
