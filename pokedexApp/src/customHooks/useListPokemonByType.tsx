import { useState } from 'react';
import { usePokemonsListContext, useToastContext } from '../utils';
import { fetchPokemonByType } from '../api/fetchPokemonByType';

export function useListPokemonByType() {
	const { definePokemonList } = usePokemonsListContext();
	const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);

	const queryPokemonsByType = async (type: string, pokemonAmount: number) => {
		setIsLoading(true);

		const response = await fetchPokemonByType(type, pokemonAmount);

		if (!response.error) {
			definePokemonList(response.pokemonList, type, true);
			setIsLoading(false);
		} else {
			definePokemonList([], type);
			setIsLoading(false);
			showToast({
				isDisplay: true,
				message: "Error retrieving Pokemon's list by type",
				type: 'error',
			});
		}
	};

	return { isLoading, queryPokemonsByType };
}
