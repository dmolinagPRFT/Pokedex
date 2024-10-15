import { POKEMONS_PER_PAGE } from '../utils';
import { fetchPokemon } from './fetchPokemon';

export const fetchPokemonList = async (page: number) => {
	try {
		const url = new URL(`http://localhost:3000/pokemons?page=${page}&limit=${POKEMONS_PER_PAGE}`);

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
