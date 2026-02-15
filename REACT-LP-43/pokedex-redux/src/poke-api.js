import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeapi = createApi({
  reducerPath: "pokeapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getLocationNames: builder.query({
      query: () => `/location-area`,
    }),
    getLocationListByLimit: builder.query({
      query: (limit) => `/location-area?offset=0&limit=${limit}`,
    }),
  }),
});

export const { useGetLocationNamesQuery, useGetLocationListByLimitQuery } =
  pokeapi;
