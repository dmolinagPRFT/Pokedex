import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { PokemonObj } from '../types/Pokemon';
import { usePokemonsListContext, useToastContext } from '../utils';

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
	const { definePokemonList } = usePokemonsListContext();

	const [randomPokemon, setRandomPokemon] =
		useState<PokemonObj>(INITIAL_POKEMON);

	useEffect(() => {
		if (initialRender) {
			(async () => {
				let retrievedPokemon;
				retrievedPokemon = await fetchPokemon(pokemon);

				if (!retrievedPokemon.error) {
					setRandomPokemon(retrievedPokemon.data);
				} else {
					retrievedPokemon = INITIAL_POKEMON;
					setRandomPokemon(retrievedPokemon);
					showToast({
						isDisplay: true,
						message: 'Error retrieving Pokemon',
						type: 'error',
					});
				}
			})();
		}
	}, []);

	const queryPokemon = async (pokemon: string) => {
		let retrievedPokemon = await fetchPokemon(pokemon.toLowerCase());

		if (!retrievedPokemon.error) {
			let newPokemonList = [retrievedPokemon.data];
			definePokemonList(newPokemonList, '');
		} else {
			showToast({
				isDisplay: true,
				message: 'Pokemon not found',
				type: 'error',
			});
		}
	};

	return { randomPokemon, queryPokemon };
}
