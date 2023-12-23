import { createAsyncThunk } from "@reduxjs/toolkit";

//Создаём(за не имением настоящей - мы просто придумываем её) асинхронную функцию
function fetchUserById(userId: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chance = Math.random();
      if (chance > 0.3) {
        resolve({ id: 1, name: "Pukpukich" });
      } else {
        reject(new Error("you are gay cause chance = " + chance));
      }
    }, 1000);
  });
}

//т.к. redux toolkit не может создавать асинхронные экшоны генераторы
//значит нам придётся создать их самостоятельно.
//Для этого будем использовать createAsyncThunk
//Эта функция автоматически генерирует экшоны для начала запроса
//для его успешного завершения и для завершения с ошибкой
export const getUserById = createAsyncThunk(
  "users/by-id", //Первый аргумент - описание или название данного thunk
  async (userId: number, thunkApi) => {
    //Вторым аргументом идёт асинхронная функция, вторым аргументом принимает thunkApi
    //Это объект содержащий все функции, которые содержатся в
    //thunc функциях с некоторым расширением
    //подробнее тут https://redux-toolkit.js.org/api/createAsyncThunk
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (err: any) {
      console.error(`Абьщибкэ, thunc насяльникэ!`, err);
      //thunkApi.rejectWithValue({ error: err }); //возвращает экшон генератором отвергнутый ответ, не знаю, для чего оно после закоментирования - ничего не изменилось
      throw err; //Необходимо пробросить ошибку, чтобы сработал .addCase(getUserById.rejected
      //т.е. rejected response(асинхронной функции запрос)
      //тогда у action будет поле error в котором будет содержаться эта ошибка
    }
  }
);
