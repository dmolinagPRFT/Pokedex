import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './layout.module.scss'

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<main className={styles.layout}>{children}</main>
			<Footer />
		</>
	);
};
