import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

export default function User() {
  const { user, isLoading, error } = useSelector((state: any) => state.user);

  //Теперь нам нужно "дёрнуть" наш асинхронный запрос с помощью нашего хука useActions
  const { getUserById } = useActions();
  return (
    <div>
      {isLoading && <div>Обжидайте зангрузмку...</div>}
      {error && <div>Алярм! Алярм! Абишбка! {error}</div>}
      {user.name ? <h1>User: {user.name}</h1> : <h1>user not found</h1>}
      <button
        onClick={() => {
          getUserById(1);
        }}
      >
        Получить пользователя в пользование
      </button>
    </div>
  );
}
