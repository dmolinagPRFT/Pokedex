import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/fetchPokemonList';
import { usePokemonsListContext, useToastContext } from '../utils';

export function useListPokemon() {
	const { pokemonList, definePokemonList } = usePokemonsListContext();
	const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);

	const queryPokemons = async (page: number) => {
		setIsLoading(true);
		const response = await fetchPokemonList(page + 1);

		if (!response.error) {
			let newPokemonList = [...pokemonList.concat(response.pokemonList)];
			if (page === 1) {
				newPokemonList = response.pokemonList;
			}
			definePokemonList(newPokemonList, '');
			setIsLoading(false);
		} else {
			definePokemonList([], '');
			setIsLoading(false);
			showToast({
				isDisplay: true,
				message: "Error retrieving Pokemon's list1",
				type: 'error',
			});
		}
	};

	useEffect(() => {
		(async () => {
			const response = await fetchPokemonList(1);

			if (!response.error) {
				definePokemonList(response.pokemonList, '');
				setIsLoading(false);
			} else {
				definePokemonList([], '');
				setIsLoading(false);
				showToast({
					isDisplay: true,
					message: "Error retrieving Pokemon's list",
					type: 'error',
				});
			}
		})();
	}, []);

	return { isLoading, queryPokemons };
}
