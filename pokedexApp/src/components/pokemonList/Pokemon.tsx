import styles from './pokemon.module.scss';
import { Card } from '../generalComponents/card/Card';
import { PokemonObj } from '../../types/Pokemon';
import { formatPokemonId, getPokemonColor } from '../../utils/pokemonFunctions';
import { PokemonTypeBadge } from '../pokemonBadgeType/PokemonType';

type PokemonProps = {
	pokemon: PokemonObj;
};

export const Pokemon = ({ pokemon }: PokemonProps) => {
	const renderPokemon = () => {
		let pokemonVar;

		if (pokemon !== null) {
			const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

			pokemonVar = (
				<div
					className={styles.pokemon__card}
					// style={{
					// 	background: `radial-gradient(${
					// 		getPokemonColor(pokemon).color
					// 	}, green)`,
					// }}
				>
					<img
						src={imgUrl}
						alt={pokemon.name}
						className={styles.card__image}
						width={'100%'}
						height={'100%'}
					/>

					<div className={styles.pokemon__card__pokemon}>
						<div className={styles.pokemon__number}>
							{formatPokemonId(pokemon.id)}
						</div>
						<div className={styles.pokemon__name}>{pokemon.name}</div>

						<div className={styles.card__badge}>
							{pokemon.types.map(({ type }) => (
								<PokemonTypeBadge
									key={type.name}
									type={type.name}
									tabIndex={false}
								/>
							))}
						</div>
						<div className={styles.pokemon__characteristics}>
							<div className={styles.characteristic}>
								<div className={styles.value}>{pokemon.height} m</div>
								<div>Altura</div>
							</div>
							<div className={styles.characteristic}>
								<div className={styles.value}>{pokemon.weight} Kg</div>
								<div>Peso</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return pokemonVar;
	};

	return (
		<Card size='md' backgroundColor={getPokemonColor(pokemon).color}>
			{renderPokemon()}
		</Card>
	);
};
