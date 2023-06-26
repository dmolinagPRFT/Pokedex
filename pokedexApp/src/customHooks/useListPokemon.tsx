import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/fetchPokemonList';
import { usePokemonsListContext, useToastContext } from '../utils';

export function useListPokemon(page: number) {
	const { definePokemonList } = usePokemonsListContext();
	const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const pokemonList = await fetchPokemonList(page);

			if (!pokemonList.error) {
				definePokemonList(pokemonList.pokemonList);
				setIsLoading(false);
			} else {
				definePokemonList([]);
				setIsLoading(false);
				showToast({
					isDisplay: true,
					message: "Error retrieving Pokemon's list",
					type: 'error',
				});
			}
		})();
	}, []);

	return { isLoading };
}
