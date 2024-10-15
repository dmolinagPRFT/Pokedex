import { useState } from 'react';
import { SearchBar } from '../../components';
import { Home } from './home/Home';
import { PokemonList } from './pokemonList/PokemonList';
import { useGetPokemon } from '../../customHooks';
import { MAX_POKEMON } from '../../utils';

export const MainPage = () => {
	const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
	const { randomPokemon } = useGetPokemon(randomNumber);
	const [page, setPage] = useState<number>(1);

	return (
		<>
			<Home pokemon={randomPokemon} />
			<SearchBar setPage={setPage} />
			<PokemonList page={page} setPage={setPage} />
		</>
	);
};
