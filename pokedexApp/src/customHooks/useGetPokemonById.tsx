import { useState } from 'react';
import { useToastContext } from '../utils';
import { fetchPokemonById } from '../api/fetchPokemonListById';
import { PokemonObj } from '../types/Pokemon';

export function useGetPokemonById() {
	const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [pokemonsArray, setPokemonsArray] = useState<PokemonObj[]>([]);

	const queryPokemonsById = async (pokemonIds: number[]) => {
		setIsLoading(true);

		const response = await fetchPokemonById(pokemonIds);

		if (!response.error) {
			setPokemonsArray(response.pokemonList);
			setIsLoading(false);
		} else {
			setPokemonsArray([]);
			setIsLoading(false);
			showToast({
				isDisplay: true,
				message: "Error retrieving Pokemon's list by id",
				type: 'error',
			});
		}
	};

	return { isLoading, queryPokemonsById, pokemonsArray };
}
