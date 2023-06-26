import React from 'react';
import { fetchPokemonByType } from '../../api/fetchPokemonByType';
import { pokemonTypes } from '../../pokemonTypes';
import { PokemonObj } from '../../types/Pokemon';
import { InputComp, Button } from '../';
import { PokemonBadgeType } from '../pokemonBadgeType/PokemonBadgeType';
import styles from './searchBar.module.scss';
import { usePokemonsListContext } from '../../utils/pokemonsListContext';

export const SearchBar = () => {
	const [selectedType, setSelectedType] = React.useState<string>('');

	const { definePokemonList } = usePokemonsListContext();

	const onSearchByType = async (typeName: any) => {
		setSelectedType(typeName);
		if (typeName && typeName !== selectedType) {
			const { pokemonList, error } = await fetchPokemonByType(typeName);
			definePokemonList(pokemonList);
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
							<PokemonBadgeType
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

			{/* <div>
				<InputComp />
			</div> */}
		</div>
	);
};
