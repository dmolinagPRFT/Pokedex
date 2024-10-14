import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async (page: number) => {
  try {
    const offset = 9 * (page - 1);
    const url = new URL(
      `http://localhost:3000/pokemons?offset=${offset}&limit=9`
    );

    const response = await fetch(url.toString());
    const data = await response.json();

    const promises = data.results.map(
      async (pokemon: { name: string }) =>
        (await fetchPokemon(pokemon.name)).data
    );

    const pokemonList = Promise.all(promises);

    return pokemonList.then((pokemons) => {
      return { pokemonList: pokemons, error: false };
    });
  } catch {
    return { pokemonList: [], error: true };
  }
};
