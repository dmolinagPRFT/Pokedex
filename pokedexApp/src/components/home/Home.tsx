import React, { useEffect } from 'react';
import { PokemonType, pokemonTypes } from '../../pokemonTypes';
import { Pokemon } from '../../types/Pokemon';
import { Card } from '../generalComponents/card/Card';
import styles from './home.module.scss';
import { PokemonTypeBadge } from '../pokemonBadgeType/PokemonType';

type HomeProps = {
	pokemon: Pokemon | null;
};

const formatPokemonId = (id: number) => {
	if (id < 10) return `#00${id}`;
	else if (id >= 10 && id < 99) return `#0${id}`;
	else return `#${id}`;
};

export const Home = ({ pokemon }: HomeProps) => {
	const [color, setColor] = React.useState<string>('');
	const renderPokemon = () => {
		let pokemonVar;

		console.log(pokemon);

		if (pokemon !== null) {
			const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

			pokemonVar = (
				<div className={styles.home__card}>
					<div className={styles.card__pokemon}>
						<div>{formatPokemonId(pokemon.id)}</div>
						<div className={styles.pokemon_name}>{pokemon.name}</div>

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
								<div>{pokemon.height} m</div>
								<div>Altura</div>
							</div>
							<div className={styles.characteristic}>
								<div>{pokemon.weight} Kg</div>
								<div>Peso</div>
							</div>
						</div>
					</div>
					<img src={imgUrl} alt={pokemon.name} className={styles.card__image} />
				</div>
			);
		}
		return pokemonVar;
	};

	const pokemonId = pokemon?.id;
	useEffect(() => {
		const colorValue: PokemonType = pokemonTypes.filter(
			(type) => pokemon && pokemon.types[0].type.name.indexOf(type.name) !== -1
		)[0];
		setColor(colorValue.color);
	}, [pokemonId]);

	console.log(color);

	return (
		<div className={styles.home}>
			<Card size='lg' backgroundColor={color}>
				{renderPokemon()}
			</Card>
		</div>
	);
};
