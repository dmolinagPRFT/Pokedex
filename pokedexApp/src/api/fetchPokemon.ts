import { INITIAL_POKEMON } from '../customHooks/useGetPokemon';
import { PokemonObj } from '../types/Pokemon';

export const fetchPokemon = async (pokemon: string | number) => {
	const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

	let data: PokemonObj;
	let error;

	try {
		const response = await fetch(URL);
		data = await response.json();
		error = false;
	} catch {
		data = INITIAL_POKEMON;
		error = true;
	}

	return { data, error };
};
