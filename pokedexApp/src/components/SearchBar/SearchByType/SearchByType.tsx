import React from 'react';
import { Button, PokemonBadgeType } from '../../';
import styles from '../searchBar.module.scss';
import { useListPokemon, useListPokemonByType } from '../../../customHooks';
import { POKEMONS_PER_PAGE, pokemonTypes } from '../../../utils';

interface SearchBarProp {
	setPage: (page: number) => void;
}

export const SearchByType = ({ setPage }: SearchBarProp) => {
	const [selectedType, setSelectedType] = React.useState<string>('');
	const { queryPokemonsByType } = useListPokemonByType();
	const { queryPokemons } = useListPokemon();

	const onSearchByType = async (typeName: any) => {
		setSelectedType(typeName);
		if (typeName && typeName !== selectedType) {
			setPage(1);
			queryPokemonsByType(typeName, POKEMONS_PER_PAGE);
		} else if (!typeName) {
			queryPokemons(0, true);
		}
	};

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
