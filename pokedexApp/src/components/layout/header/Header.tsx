import { ReactComponent as PokemonLogo } from '../../../assets/logo-pokemon.svg';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<PokemonLogo />
		</header>
	);
};
