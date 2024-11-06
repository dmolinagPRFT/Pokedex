import { useEffect, useState } from 'react';
import { PokemonObj } from '../types/Pokemon';
import { useToastContext } from '../utils';
import { fetchPokemonsById, getFavoritePokemon } from '../api';

export function useGetFavoritePokemons(userId: string, token: string) {
	const { showToast } = useToastContext();
	const [favoritePokemons, setFavoritePokemons] = useState<PokemonObj[]>([]);

	useEffect(() => {
		queryFavoritePokemons();
	}, []);

	const queryFavoritePokemons = async () => {
		let favoritesResponse = await getFavoritePokemon(userId, token);

		if (!favoritesResponse.error && favoritesResponse.data.length > 0) {
			const pokemonIds = favoritesResponse.data.map(
				(item: { pokemonId: number }) => item.pokemonId
			);
			const response = await fetchPokemonsById(pokemonIds);

			setFavoritePokemons(response.pokemonList);
		} else {
			showToast({
				isDisplay: true,
				message: favoritesResponse.error,
				type: 'error',
			});
		}
	};

	return {
		favoritePokemons,
	};
}
