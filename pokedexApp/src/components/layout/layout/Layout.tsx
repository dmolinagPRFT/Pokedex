import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
