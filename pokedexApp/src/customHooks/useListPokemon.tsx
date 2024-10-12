import { useEffect } from 'react';
import { fetchPokemonList } from '../api/fetchPokemonList';
import { usePokemonsListContext, useToastContext } from '../utils';

export function useListPokemon() {
	const { pokemonList, definePokemonList } = usePokemonsListContext();
	const { showToast } = useToastContext();

	useEffect(() => {
		(async () => {
			const response = await fetchPokemonList(1);

			if (!response.error) {
				definePokemonList(response.pokemonList, '');
			} else {
				definePokemonList([], '');
				showToast({
					isDisplay: true,
					message: "Error retrieving Pokemon's list",
					type: 'error',
				});
			}
		})();
	}, []);

	const queryPokemons = async (page: number, isFirstPageOnly = false) => {
		const response = await fetchPokemonList(page + 1);
		if (!response.error) {
			let newPokemonList = !isFirstPageOnly
				? [...pokemonList.concat(response.pokemonList)]
				: response.pokemonList;
			definePokemonList(newPokemonList, '');
		} else {
			definePokemonList([], '');
			showToast({
				isDisplay: true,
				message: "Error retrieving Pokemon's list1",
				type: 'error',
			});
		}
	};

	return { queryPokemons };
}
