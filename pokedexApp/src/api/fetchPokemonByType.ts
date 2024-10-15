import { POKEMONS_PER_PAGE } from '../utils';

export const fetchPokemonByType = async (type: string, page: number = 9) => {
	const URL = `http://localhost:3000/pokemons/type/${type}?page=${page}&limit=${POKEMONS_PER_PAGE}`;

	try {
		const response = await fetch(URL);
		const data = await response.json();

		return { pokemonList: data.pokemonList, error: false };
	} catch {
		return {
			pokemonList: [],
			error: false,
		};
	}
};
