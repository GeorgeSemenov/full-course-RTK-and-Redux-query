import { createAsyncThunk } from "@reduxjs/toolkit";

//Создаём асинхронную функцию
function fetchUserById(userId: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chance = Math.random();
      if (chance > 0.3) {
        resolve({ id: 1, name: "Pukpukich" });
      } else {
        reject(new Error("you are gay"));
      }
    }, 500);
  });
}

//т.к. redux toolkit не может создавать асинхронные экшоны генераторы
//значит нам придётся создать их самостоятельно.
//Для этого будем использовать createAsyncThunk

export const getUserById = createAsyncThunk(
  "users/by-id", //Первый аргумент - описание или название данного thunk
  async (userId: number, thunkApi) => {
    //Вторым аргументом идёт асинхронная функция, вторым аргументом принимает thunkApi
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (err) {
      thunkApi.console.error(`Абьщибкэ, насяльникэ!`, err);
    }
  }
);
