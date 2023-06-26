import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { PokemonObj } from '../types/Pokemon';
import { useToastContext } from '../utils';

export const INITIAL_POKEMON: PokemonObj = {
	id: 0,
	name: 'Pokemon',
	types: [{ type: { name: 'bug' } }],
	weight: 1,
	height: 1,
	stats: [{ base_stat: 1, stat: { name: 'test' } }],
};

export function useGetPokemon(id: number) {
	const { showToast } = useToastContext();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [randomPokemon, setRandomPokemon] =
		useState<PokemonObj>(INITIAL_POKEMON);

	useEffect(() => {
		(async () => {
			let pokemon;
			pokemon = await fetchPokemon(id);

			if (!pokemon.error) {
				setRandomPokemon(pokemon.data);
				setIsLoading(false);
			} else {
				pokemon = INITIAL_POKEMON;
				setRandomPokemon(pokemon);
				setIsLoading(false);
				showToast({
					isDisplay: true,
					message: 'Error retrieving Pokemon',
					type: 'error',
				});
			}
		})();
	}, []);

	return { randomPokemon, isLoading };
}
