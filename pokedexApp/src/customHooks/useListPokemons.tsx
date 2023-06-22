import { useEffect, useState } from 'react';
import { PokemonObj } from '../types/Pokemon';
import { fetchPokemonList } from '../api/fetchPokemonList';

function useListPokemons(page: number) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [pokemonList, setPokemonList] = useState<PokemonObj[]>([]);

	useEffect(() => {
		(async () => {
			const pokemonList = await fetchPokemonList(page);
			setPokemonList(pokemonList);
			setIsLoading(false);
		})();
	}, []);

	return { pokemonList, isLoading };
}

export default useListPokemons;
