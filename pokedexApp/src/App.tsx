import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout/layout/Layout';
import { Home } from './components/home/Home';
import { Pokemon } from './types/Pokemon';
import { fetchPokemonList } from './api/fetchPokemonList';
import { fetchPokemon } from './api/fetchPokemon';

function App() {
	const [loading, setLoading] = useState(true);
	const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const randomNumber: number = Math.floor(Math.random() * 1000);
			const pokemon = await fetchPokemon(randomNumber);
			setRandomPokemon(pokemon.data);
			setLoading(false);
		})();
	}, []);

	return (
		<div className='App'>
			<Layout>{!loading && <Home pokemon={randomPokemon} />}</Layout>
		</div>
	);
}

export default App;
