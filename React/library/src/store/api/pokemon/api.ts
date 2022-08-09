import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPokemon } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string | undefined>({
      query: (name?: string) => {
        return {
          url: `pokemon/${name?.toLowerCase()}`,
          method: 'GET',
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
