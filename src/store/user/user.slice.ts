import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    error: "user Error you are gay",
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    //Полное описание того что происходит см.ниже .
    //У самих thunk'ов есть три состояния - pending fullfilled, rejected
    builder.addCase(getUserById.pending, (state) => {});
  },
});

//extra redicer - это описание того, что нужно делать при
//загрузке, ошибке и успешном запросе.
//extraReducer'ы создаются с помощью т.н. билдера путём
//добавления кейсов (addCase()) в них нужно прописывать
//название thunk'ов (которые возрващают экшон генераторы
//от асинхронных запросов)
