//Для увеличения колличества endpoint'ов или для их логического разбивания
//Эти endpint'ы разделют на несколько файлов
//По АНАЛогии можно создать и другие эндпоинты.

import { api } from "./api";

export const recipeApi = api.injectEndpoints({
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
  },
});
