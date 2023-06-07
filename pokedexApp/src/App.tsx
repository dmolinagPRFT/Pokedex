import './App.css';
import { Layout } from './components/layout/layout/Layout';
import { Home } from './components/home/Home';
import useGetPokemon from './customHooks/useGetPokemon';

function App() {
	const randomNumber: number = Math.floor(Math.random() * 1000);
	const { randomPokemon, isLoading } = useGetPokemon(randomNumber);

	return (
		<div className='App'>
			<Layout>{!isLoading && <Home pokemon={randomPokemon} />}</Layout>
		</div>
	);
}

export default App;
