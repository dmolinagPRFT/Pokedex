import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { PokemonObj } from '../types/Pokemon';

const INITIAL_POKEMON: PokemonObj = {
	id: 0,
	name: 'Pokemon',
	types: [{ type: { name: 'bug' } }],
	weight: 1,
	height: 1,
	stats: [{ base_stat: 1, stat: { name: 'test' } }],
};

function useGetPokemon(id: number) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [randomPokemon, setRandomPokemon] = useState<PokemonObj | null>(
		INITIAL_POKEMON
	);

	useEffect(() => {
		(async () => {
			const pokemon = await fetchPokemon(id);
			setRandomPokemon(pokemon.data);
			setIsLoading(false);
		})();
	}, []);

	return { randomPokemon, isLoading };
}

export default useGetPokemon;
