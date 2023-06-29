import React from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import { Button } from '../';
import { PokemonBadgeType } from '../pokemonBadgeType/PokemonBadgeType';
import styles from './searchBar.module.scss';
import { useListPokemon, useListPokemonByType } from '../../customHooks';
import { POKEMONS_PER_PAGE } from '../../utils/constants';

interface SearchBarProp {
	setPage: (page: number) => void;
}

export const SearchBar = ({ setPage }: SearchBarProp) => {
	const [selectedType, setSelectedType] = React.useState<string>('');
	const { queryPokemonsByType } = useListPokemonByType();
	const { queryPokemons } = useListPokemon();

	const onSearchByType = async (typeName: any) => {
		setSelectedType(typeName);
		if (typeName && typeName !== selectedType) {
			setPage(1);
			queryPokemonsByType(typeName, POKEMONS_PER_PAGE);
		} else if (!typeName) {
			queryPokemons(1);
		}
	};

	return (
		<div className={styles.searchBar}>
			<div className={styles.searchBar__searchByType}>
				<div className={styles.searchBar__searchByType__title}>
					Search by type
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
						onClick={() => onSearchByType(undefined)}
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
