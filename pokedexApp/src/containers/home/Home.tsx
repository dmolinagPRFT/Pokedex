import { PokemonObj } from '../../types/Pokemon';
import { Card, CardContent } from '../../components';
import styles from './home.module.scss';
import { getPokemonColor } from '../../utils/pokemonFunctions';

type HomeProps = {
	pokemon: PokemonObj;
};

export const Home = ({ pokemon }: HomeProps) => {
	return (
		<div className={styles.home}>
			<Card size='lg' backgroundColor={getPokemonColor(pokemon).color}>
				<>
					<h2 className={styles.card__title}>
						Your today's random Pokemon is...
					</h2>
					<CardContent type='horizontal' pokemon={pokemon} />
				</>
			</Card>
		</div>
	);
};
