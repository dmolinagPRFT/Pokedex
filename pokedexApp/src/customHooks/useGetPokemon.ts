import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { PokemonObj } from '../types/Pokemon';
import { usePokemonsListContext, useToastContext } from '../utils';
import { useSpinnerContext } from '../utils/loadingContext';

export const INITIAL_POKEMON: PokemonObj = {
	id: 0,
	name: 'Pokemon',
	types: [{ type: { name: 'bug' } }],
	weight: 1,
	height: 1,
	stats: [{ base_stat: 1, stat: { name: 'test' } }],
};

export function useGetPokemon(pokemon: number | string, initialRender = true) {
	const { showToast } = useToastContext();
	const { showSpinner } = useSpinnerContext();

	const { definePokemonList } = usePokemonsListContext();

	const [randomPokemon, setRandomPokemon] =
		useState<PokemonObj>(INITIAL_POKEMON);

	const queryPokemon = async (pokemon: string) => {
		let retrievedPokemon = await fetchPokemon(pokemon.toLowerCase());

		if (!retrievedPokemon.error) {
			let newPokemonList = [retrievedPokemon.data];
			definePokemonList(newPokemonList, '');
			showSpinner(false);
		} else {
			showSpinner(false);
			showToast({
				isDisplay: true,
				message: 'Pokemon not found',
				type: 'error',
			});
		}
	};

	useEffect(() => {
		if (initialRender) {
			(async () => {
				let retrievedPokemon;
				retrievedPokemon = await fetchPokemon(pokemon);

				if (!retrievedPokemon.error) {
					setRandomPokemon(retrievedPokemon.data);
					showSpinner(false);
				} else {
					retrievedPokemon = INITIAL_POKEMON;
					setRandomPokemon(retrievedPokemon);
					showSpinner(false);
					showToast({
						isDisplay: true,
						message: 'Error retrieving Pokemon',
						type: 'error',
					});
				}
			})();
		}
	}, []);

	return { randomPokemon, queryPokemon };
}
