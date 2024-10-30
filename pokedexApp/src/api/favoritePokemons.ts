import { PokemonObj } from '../types/Pokemon';
import { FAVORITES_PATH, URL } from '../utils';

export const getFavoritePokemon = async (userId: string, token: string) => {
	const endpoint = `${URL}${FAVORITES_PATH}/favorites/${userId}`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			credentials: 'include',
		});
		const data = await response.json();

		if (response.status !== 200) {
			return { data: [], error: data.error };
		}

		return { data, error: null };
	} catch (error) {
		return {
			data: [],
			error,
		};
	}
};

export const setFavoritePokemon = async (
	userId: string,
	pokemon: PokemonObj,
	token: string
) => {
	const endpoint = `${URL}${FAVORITES_PATH}/add`;

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify({
				userId,
				pokemonId: pokemon.id,
				pokemonName: pokemon.name,
			}),
		});
		const data = await response.json();

		if (!response.ok) {
			return { data: null, error: data.error };
		}

		return { data, error: null };
	} catch (error) {
		return {
			data: null,
			error,
		};
	}
};

export const removeFavoritePokemon = async (
	userId: string,
	pokemonId: number,
	token: string
) => {
	const endpoint = `${URL}${FAVORITES_PATH}/remove`;

	try {
		const response = await fetch(endpoint, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
			body: JSON.stringify({
				userId,
				pokemonId,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			return { data: null, error: data.error };
		}

		return { data, error: null };
	} catch (error) {
		return {
			data: null,
			error,
		};
	}
};
