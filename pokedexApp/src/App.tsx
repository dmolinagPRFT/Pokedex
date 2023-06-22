import './App.scss';
import { Layout } from './components/layout/layout/Layout';
import { Home } from './components/home/Home';
import useGetPokemon from './customHooks/useGetPokemon';
import LoadingSpinner from './components/Loading/LoadingSpinner';
import React, { useEffect } from 'react';
import useListPokemons from './customHooks/useListPokemons';
import { PokemonObj } from './types/Pokemon';
import { Pokemon } from './components/pokemonList/Pokemon';
import { SearchBar } from './components/SearchBar/SearchBar';

const MAX_POKEMONS = 150;

function App() {
	const [page] = React.useState<number>(1);

	const randomNumber: number = Math.floor(Math.random() * MAX_POKEMONS);
	const { randomPokemon, isLoading } = useGetPokemon(randomNumber);
	const { pokemonList, isLoading: loadingList } = useListPokemons(page);

	const [pokemons, setPokemons] = React.useState<PokemonObj[]>([]);

	let arrayLength = pokemonList.length;

	useEffect(() => {
		setPokemons(pokemonList);
	}, [arrayLength]);

	const handleSearchPokemon = (filteredPokemons: PokemonObj[]) => {
		setPokemons(filteredPokemons);
	};

	return (
		<div className='App'>
			<LoadingSpinner isLoading={isLoading || loadingList}>
				<Layout>
					<div className='App__main'>
						<Home pokemon={randomPokemon} />
						<SearchBar onSetPokemons={handleSearchPokemon} />
						<div className='pokemonList'>
							{pokemons.map((pokemon: PokemonObj) => {
								return <Pokemon pokemon={pokemon} />;
							})}
						</div>
					</div>
				</Layout>
			</LoadingSpinner>
		</div>
	);
}

export default App;
