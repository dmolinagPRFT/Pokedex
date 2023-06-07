import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { Pokemon } from '../types/Pokemon';

function useGetPokemon(id: number) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

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
