import './App.scss';
import { Home, PokemonList } from './containers';
import { useState } from 'react';
import { useListPokemon, useGetPokemon } from './customHooks';
import { SearchBar, LoadingSpinner, Layout, Toast } from './components';
import 'react-toastify/dist/ReactToastify.css';

const MAX_POKEMON = 150;

function App() {
	const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
	const { randomPokemon, isLoading } = useGetPokemon(randomNumber);
	const { isLoading: loadingList } = useListPokemon();

	const [page, setPage] = useState<number>(1);

	return (
		<div className='App'>
			<LoadingSpinner isLoading={isLoading || loadingList}>
				<Toast />
				<Layout>
					<main className='App__main'>
						<Home pokemon={randomPokemon} />
						<SearchBar setPage={setPage} />
						<PokemonList page={page} setPage={setPage} />
					</main>
				</Layout>
			</LoadingSpinner>
		</div>
	);
}

export default App;
