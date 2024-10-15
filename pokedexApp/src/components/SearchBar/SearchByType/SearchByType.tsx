import React, { useCallback } from 'react';
import { Button, PokemonBadgeType } from '../../';
import styles from '../searchBar.module.scss';
import { useListPokemon, useListPokemonByType } from '../../../customHooks';
import { pokemonTypes } from '../../../utils';

interface SearchBarProp {
	setPage: (page: number) => void;
}

export const SearchByType = ({ setPage }: SearchBarProp) => {
	const [selectedType, setSelectedType] = React.useState<string>('');
	const { queryPokemonsByType } = useListPokemonByType();
	const { queryPokemons } = useListPokemon();

	const onSearchByType = useCallback(
		async (typeName: any) => {
			setSelectedType(typeName);
			if (typeName && typeName !== selectedType) {
				setPage(1);
				queryPokemonsByType(typeName, 1);
			} else if (!typeName) {
				queryPokemons(0, true);
			}
		},
		[queryPokemons, queryPokemonsByType, selectedType, setPage]
	);

	return (
		<div className={styles.searchBar__searchByType}>
			<h2 className={styles.searchBar__searchByType__title}>Search by type</h2>

			<ul
				className={styles.searchBar__searchByType__pokemonTypes}
				data-testid='pokemon-types-list'
			>
				{pokemonTypes.map((type) => {
					return (
						<li key={type.name}>
							<PokemonBadgeType
								type={type.name}
								tabIndex={false}
								button={true}
								handleClick={onSearchByType}
								addClassname={styles.searchBar__searchByType__pokemonTypesBadge}
							/>
						</li>
					);
				})}
				<li>
					<Button
						buttonStyle='badge'
						bgColor={'white'}
						onClick={() => onSearchByType(undefined)}
						textColor='black'
						name=''
					>
						Clear
					</Button>
				</li>
			</ul>
		</div>
	);
};
