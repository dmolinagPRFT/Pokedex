import styles from './Footer.module.scss';

export const Footer = () => {
	const renderYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<span>Derechos de imagem para Nintendo & The Pokémon Company</span>
			<span>Datos obtenidos de API - pokeapi.co</span>
			<span>&copy; {renderYear}</span>
		</footer>
	);
};
