import './App.scss';
import { LoadingSpinner, Layout, Toast } from './components';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage, UserPage } from './containers';
import { Routes, Route } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { useSpinnerContext } from './utils/loadingContext';

function App() {
	const { isLoading } = useSpinnerContext();

	return (
		<div className='App'>
			<Toast />
			<LoadingSpinner isLoading={isLoading}>
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
