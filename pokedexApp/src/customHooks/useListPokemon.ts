import { fetchPokemonList } from '../api/fetchPokemonList';
import { usePokemonsListContext, useToastContext } from '../utils';
import { useSpinnerContext } from '../utils/loadingContext';

export function useListPokemon() {
	const { pokemonList, definePokemonList } = usePokemonsListContext();
	const { showToast } = useToastContext();
	const { showSpinner } = useSpinnerContext();

	const queryPokemons = async (page: number, isFirstPageOnly = false) => {
		showSpinner(true);

		const response = await fetchPokemonList(page);
		if (!response.error) {
			let newPokemonList = !isFirstPageOnly
				? [...pokemonList.concat(response.pokemonList)]
				: response.pokemonList;
			definePokemonList(newPokemonList, '');
			showSpinner(false);
		} else {
			definePokemonList([], '');
			showSpinner(false);
			showToast({
				isDisplay: true,
				message: "Error retrieving Pokemon's list1",
				type: 'error',
			});
		}
	};

	return { queryPokemons };
}
