import './App.scss';
import { useListPokemon, useGetPokemon } from './customHooks';
import { LoadingSpinner, Layout, Toast } from './components';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from './containers';
import {
	createBrowserRouter,
	RouterProvider,
	Routes,
	Route,
} from 'react-router-dom';
import { UserPage } from './containers/user/UserPage';

const MAX_POKEMON = 150;

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/user',
		element: <UserPage />,
	},
]);

function App() {
	const randomNumber: number = Math.floor(Math.random() * MAX_POKEMON);
	const { isLoading } = useGetPokemon(randomNumber);
	const { isLoading: loadingList } = useListPokemon();

	return (
		<div className='App'>
			<Toast />
			<LoadingSpinner isLoading={isLoading || loadingList}>
				<Layout>
					<main className='App__main'>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/user' element={<UserPage />} />
						</Routes>
						{/* <RouterProvider router={router} /> */}
						{/* <MainPage /> */}
					</main>
				</Layout>
			</LoadingSpinner>
		</div>
	);
}

export default App;
