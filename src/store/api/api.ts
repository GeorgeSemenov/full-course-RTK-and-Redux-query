import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"], //Это нужно чтобы когда мы добавим новый рецепт - у нас бы обновились все рецепты
  //Для этого нужно дёрнуть тег, поэтому мы его тут и создаём.
  baseQuery: fetchBaseQuery({
    //сюда пишут рутовый путь ресурса на который будут отсылаться запросы
    baseUrl: "http://localhost:4200/recipes",
  }),
  endpoints:builder=>{
    //builder.query - получить данные с сервера
    //builder.mutation - отправить запрос на сервер для изменений на нём данных
    return {
      getRecipes: builder.query({
        query:()=>'/',//Укахываю / т.к. baseUrl - полностью совпадает с адресом запроса
      }),
      createRecipe: builder.mutation({
        mutation:
      })
    }
  }
});
