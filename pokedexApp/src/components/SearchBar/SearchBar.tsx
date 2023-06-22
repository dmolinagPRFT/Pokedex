import React from 'react';
import { fetchPokemonByType } from '../../api/fetchPokemonByType';
import { pokemonTypes } from '../../pokemonTypes';
import { PokemonObj } from '../../types/Pokemon';
import InputComp from '../generalComponents/input/InputComp';
import { PokemonTypeBadge } from '../pokemonBadgeType/PokemonType';
import styles from './searchBar.module.scss';
import Button from '../generalComponents/button/Button';

type SearchBarProps = {
	onSetPokemons: (pokemons: PokemonObj[]) => void;
};

export const SearchBar = ({ onSetPokemons }: SearchBarProps) => {
	const [selectedType, setSelectedType] = React.useState<string>('');

	const onSearchByType = async (event: any) => {
		const typeName = event.target.name;
		setSelectedType(typeName);
		if (typeName !== selectedType) {
			const pokemonList: PokemonObj[] = await fetchPokemonByType(typeName);
			onSetPokemons(pokemonList);
		}
	};

	return (
		<div className={styles.searchBar}>
			<div className={styles.searchBar__searchByType}>
				<div className={styles.searchBar__searchByType__title}>
					Buscar por tipo
				</div>

				<div className={styles.searchBar__searchByType__pokemonTypes}>
					{pokemonTypes.map((type) => {
						return (
							<PokemonTypeBadge
								key={type.name}
								type={type.name}
								tabIndex={false}
								button={true}
								handleClick={onSearchByType}
							/>
						);
					})}
					<Button
						buttonStyle='badge'
						bgColor={'white'}
						onClick={onSearchByType}
            textColor='black'
            name=''
					>
						Clear
					</Button>
				</div>
			</div>

			<div>
				<InputComp />
			</div>
		</div>
	);
};
