import { fetchPokemon } from './fetchPokemon';

export const fetchPokemonById = async (pokemonIds: number[]) => {
	try {
		const promises = pokemonIds.map(
			async (id) => (await fetchPokemon(id)).data
		);

		const pokemonList = Promise.all(promises);

		return pokemonList.then((pokemons) => {
			return { pokemonList: pokemons, error: false };
		});
	} catch {
		return {
			pokemonList: [],
			error: false,
		};
	}
};
