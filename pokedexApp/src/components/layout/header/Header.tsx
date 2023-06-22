import { ReactComponent as PokemonLogo } from '../../../assets/logo-pokemon.svg';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<PokemonLogo />
		</header>
	);
};
