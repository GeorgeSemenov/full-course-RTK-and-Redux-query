//Для увеличения колличества endpoint'ов или для их логического разбивания
//Эти endpint'ы разделют на несколько файлов
//По АНАЛогии можно создать и другие эндпоинты.

import { api } from "./api";

//Внимание - нет уверенности что инжекция происходит корректно,
//Потому что эндпоинт createRecipe так и не удалось использовать
export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      //builder.mutation - отправить запрос на сервер для изменений на нём данных
      createRecipe: builder.mutation({
        //Делаем как в query только теперь функция вносит изменения
        query: (recipe) => ({
          //()=>({}) эта запись равноценна записи ()=>{return {}}
          body: recipe,
          url: "/",
          method: "POST",
        }),
        invalidatesTags: () => [{ type: "Recipe" }], //Указываем, что при запуске данной мутации
        //изменялся кэш с тэгом Recipe, теперь, если есть запросы(query) с данным тэгом
        //Они автоматически запустятся, чтобы подтянуть изменения, которые были сделаны
        //Данной мутацией на сервере
      }),
    };
  },
});

//useCreateRecipeMutation - хук для мутаций, он строится на
//endpoint'е который мы описали, просто к его началу добавлен
//use а в конце написанно Mutation
export const { useCreateRecipeMutation } = recipeApi;
