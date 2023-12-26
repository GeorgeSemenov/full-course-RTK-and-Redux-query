import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"], //Это нужно чтобы когда мы добавим новый рецепт - у нас бы обновились все рецепты
  //Для этого нужно дёрнуть тег, поэтому мы его тут и создаём.
  baseQuery: fetchBaseQuery({
    //сюда пишут рутовый путь ресурса на который будут отсылаться запросы
    baseUrl: "http://localhost:4200/recipes",
  }),
  endpoints: (builder) => {
    return {};
  }, //Специально описываю тут пустые endpoint'ы
  //Ниже приведён код с нормальными эндопинтами, но я их закекментировал, т.к.
  //в больших проектах эндпоинты разделяются по логике в разные файлы
  //enpoint'ы для рецептов я вынес в отдельный файл recipe.api.ts
  //Ниже комментарии оставляю для наглядности.
  /*
  endpoints: (builder) => {
    return {
      //builder.query - получить данные с сервера
      getRecipes: builder.query({
        query: () => "/", //Укахываю / т.к. baseUrl - полностью совпадает с адресом запроса
      }),
      //builder.mutation - отправить запрос на сервер для изменений на нём данных
      createRecipe: builder.mutation({
        //Делаем как в query только теперь функция вносит изменения
        query: (recipe) => ({
          //()=>({}) эта запись равноценна записи ()=>{return {}}
          body: recipe,
          url: "/",
          method: "POST",
        }),
      }),
    };
  },*/
});
