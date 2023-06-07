import { SyntheticEvent } from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import styles from './pokemonTypeBadge.module.scss';
import bug from '../../assets/pokemonTypes/bug.svg';
import dark from '../../assets/pokemonTypes/dark.svg';
import dragon from '../../assets/pokemonTypes/dragon.svg';
import electric from '../../assets/pokemonTypes/electric.svg';
import fairy from '../../assets/pokemonTypes/fairy.svg';
import flying from '../../assets/pokemonTypes/flying.svg';
import ghost from '../../assets/pokemonTypes/ghost.svg';
import grass from '../../assets/pokemonTypes/grass.svg';
import ground from '../../assets/pokemonTypes/ground.svg';
import ice from '../../assets/pokemonTypes/ice.svg';
import normal from '../../assets/pokemonTypes/normal.svg';
import poison from '../../assets/pokemonTypes/poison.svg';
import psychic from '../../assets/pokemonTypes/psychic.svg';
import rock from '../../assets/pokemonTypes/rock.svg';
import steel from '../../assets/pokemonTypes/steel.svg';
import water from '../../assets/pokemonTypes/water.svg';

type PokemonTypeProps = {
	type: string;
	tabIndex: boolean;
	handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonTypeBadge = (props: PokemonTypeProps) => {
	const [{ name, color }] = pokemonTypes.filter(
		(item) => item.name === props.type
	);

	return (
		<div
			onClick={props.handleClick}
			tabIndex={props.tabIndex ? 0 : -1}
			style={{ background: color }}
			className={styles.badge}
		>
			<img src={getBadgeImage(name)} alt={name} />
			{name}
		</div>
	);
};

const getBadgeImage = (pokemonType: string) => {
	switch (pokemonType) {
		case 'bug':
			return bug;
		case 'dark':
			return dark;
		case 'dragon':
			return dragon;
		case 'electric':
			return electric;
		case 'fairy':
			return fairy;
		case 'flying':
			return flying;
		case 'ghost':
			return ghost;
		case 'grass':
			return grass;
		case 'ground':
			return ground;
		case 'ice':
			return ice;
		case 'normal':
			return normal;
		case 'poison':
			return poison;
		case 'psychic':
			return psychic;
		case 'rock':
			return rock;
		case 'steel':
			return steel;
		case 'water':
			return water;
		default:
			return bug;
	}
};
