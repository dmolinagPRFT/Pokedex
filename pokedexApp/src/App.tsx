import './App.scss';
import { LoadingSpinner, Layout, Toast } from './components';
import 'react-toastify/dist/ReactToastify.css';
import { MainPage,  } from './containers';
import { Routes, Route } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { useSpinnerContext } from './utils/loadingContext';
import { CreateUser } from './containers/user/createUser/CreateUser';
import { UserPage } from './containers/user/user/UserPage';

function App() {
	const { isLoading } = useSpinnerContext();

	return (
		<div className='App'>
			<Toast />
			<LoadingSpinner isLoading={isLoading}>
				<Layout>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/signin' element={<CreateUser />} />
						<Route path='/signup' element={<CreateUser />} />
						<Route path='/user' element={<UserPage />} />
					</Routes>
				</Layout>
			</LoadingSpinner>
		</div>
	);
}

export default App;
