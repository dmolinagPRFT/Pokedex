import { ReactComponent as PokemonLogo } from '../../../assets/logo-pokemon.svg';
import { Button } from '../../button/Button';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<PokemonLogo />
			<Link to={`user`}>
				<Button
					buttonStyle='primary'
					onClick={() => {
						return;
					}}
				>
					Sign in
				</Button>
			</Link>
		</header>
	);
};
