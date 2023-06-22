import styles from './footer.module.scss';

export const Footer = () => {
	const renderYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<span>Derechos de imagen para Nintendo & The Pokemon Company</span>
			<span>Datos obtenidos de API - pokeapi.co</span>
			<span>Pokemon Company &copy; {renderYear}</span>
		</footer>
	);
};
