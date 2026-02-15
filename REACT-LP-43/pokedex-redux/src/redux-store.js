import { configureStore } from "@reduxjs/toolkit";
import { pokeapi } from "./poke-api";

const store = configureStore({
  reducer: {
    [pokeapi.reducerPath]: pokeapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeapi.middleware),
});

export default store;
