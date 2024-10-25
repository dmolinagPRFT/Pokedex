import { INITIAL_POKEMON } from '../customHooks/useGetPokemon';
import { PokemonObj } from '../types/Pokemon';
import { POKEMONS_PATH, POKEMONS_PER_PAGE, URL } from '../utils';

export const fetchPokemon = async (pokemon: string | number) => {
	const endpoint = `${URL}${POKEMONS_PATH}/pokemon/${pokemon}`;

	let data: PokemonObj;
	let error;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
		});
		data = await response.json();
		error = false;

		if (response.status !== 200) {
			data = INITIAL_POKEMON;
			error = true;
		}
	} catch (err) {
		data = INITIAL_POKEMON;
		error = true;
	}

	return { data, error };
};

export const fetchPokemonsList = async (page: number) => {
	try {
		const endpoint = `${URL}${POKEMONS_PATH}?page=${page}&limit=${POKEMONS_PER_PAGE}`;
		const response = await fetch(endpoint, {
			method: 'GET',
		});
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

export const fetchPokemonByType = async (type: string, page: number = 9) => {
	const endpoint = `${URL}${POKEMONS_PATH}/type/${type}?page=${page}&limit=${POKEMONS_PER_PAGE}`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
		});
		const data = await response.json();

		return { pokemonList: data.pokemonList, error: false };
	} catch {
		return {
			pokemonList: [],
			error: false,
		};
	}
};

export const fetchPokemonsById = async (pokemonIds: number[]) => {
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
