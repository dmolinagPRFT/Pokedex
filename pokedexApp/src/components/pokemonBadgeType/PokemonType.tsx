import { SyntheticEvent } from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import styles from './pokemonTypeBadge.module.scss';

type PokemonTypeProps = {
	type: string;
	tabIndex: boolean;
	handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonTypeBadge = (props: PokemonTypeProps) => {
	console.log(props.type);
	const [{ name, color }] = pokemonTypes.filter(
		(item) => item.name === props.type
	);

	// const imgUrl = new URL(
	// 	`src/assets/pokemonTypes/bug.svg`,
	// 	import.meta.url
	// ).href;

	// C:\Daniel\Training\pokedex\src\assets\pokemonTypes
	// console.log(imgUrl)

	return (
		<div
			onClick={props.handleClick}
			tabIndex={props.tabIndex ? 0 : -1}
			style={{ background: color }}
			className={styles.badge}
		>
			<img
				src={'../../assets/pokemonTypes/bug.svg'}
				width={16}
				height={16}
				alt={name}
			/>
			{name}
		</div>
	);
};
