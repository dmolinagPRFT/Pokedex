import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './layout.module.scss'

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<div className={styles.layout}>{children}</div>
			<Footer />
		</>
	);
};
