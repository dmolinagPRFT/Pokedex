import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button.tsx';
import InputComp from './components/input/InputComp.tsx';
// import Button from './components/button';

function App() {
	return (
		<div className='App'>
			<Button buttonStyle='secondary'>test</Button>
			<InputComp label='test' isRequired/>
		</div>
	);
}

export default App;
