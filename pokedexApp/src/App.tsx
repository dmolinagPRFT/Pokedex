import './App.scss';
import { useListPokemon, useGetPokemon } from './customHooks';
import { LoadingSpinner, Layout, Toast } from './components';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage, UserPage } from './containers';
import { Routes, Route } from 'react-router-dom';

const MAX_POKEMON = 150;

function App() {
	const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
	const { isLoading } = useGetPokemon(randomNumber);
	const { isLoading: loadingList } = useListPokemon();

	return (
		<div className='App'>
			<Toast />
			<LoadingSpinner isLoading={isLoading || loadingList}>
				<Layout>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/user' element={<UserPage />} />
					</Routes>
				</Layout>
			</LoadingSpinner>
		</div>
	);
}

export default App;
