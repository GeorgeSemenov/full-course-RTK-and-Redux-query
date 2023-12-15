import { useSelector } from "react-redux";
import { iStore } from "../store/store";

//Кастомный хук, который просто возвращает избранное, тебе не
//нужно будет постоянно импортироввать useSelector и iStore
export default function useFavorites() {
  return useSelector((state: iStore) => state.favorites);
}
