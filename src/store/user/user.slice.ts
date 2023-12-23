import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

const defaultUser = {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: undefined,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    //Полное описание того что происходит см.ниже .
    //У самих thunk'ов есть три состояния - pending fullfilled, rejected
    builder
      .addCase(getUserById.pending, (state) => {
        //Когда запрос ушёл на сервер
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getUserById.fulfilled, (state, action: { payload: any }) => {
        //Запрос успешно исполнен и доставлен
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action: { error: any }) => {
        //Запрос завершился ошибкой.
        state.isLoading = false;
        state.error = action.error.message;
        state.user = defaultUser;
      });
  },
});

//extra redicer - это описание того, что нужно делать при
//загрузке, ошибке и успешном запросе.
//extraReducer'ы создаются с помощью т.н. билдера путём
//добавления кейсов (addCase()) в них нужно прописывать
//название thunk'ов (которые возрващают экшон генераторы
//от асинхронных запросов)
