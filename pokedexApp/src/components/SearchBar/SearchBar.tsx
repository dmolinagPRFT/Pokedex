import React, { useEffect } from 'react';
import { pokemonTypes } from '../../pokemonTypes';
import { Button, InputComp } from '../';
import { PokemonBadgeType } from '../pokemonBadgeType/PokemonBadgeType';
import styles from './searchBar.module.scss';
import {
	useGetPokemon,
	useListPokemon,
	useListPokemonByType,
} from '../../customHooks';
import { POKEMONS_PER_PAGE } from '../../utils/constants';

interface SearchBarProp {
	setPage: (page: number) => void;
}

export const SearchBar = ({ setPage }: SearchBarProp) => {
	const [selectedType, setSelectedType] = React.useState<string>('');
	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const { queryPokemonsByType } = useListPokemonByType();
	const { queryPokemons } = useListPokemon();
	const { queryPokemon } = useGetPokemon(searchTerm, false);
	const [queryLoading, setQueryLoading] = React.useState<boolean>(false);

	useEffect(() => {
		let delayDebounceFn: NodeJS.Timeout;
		if (searchTerm.length > 3) {
			delayDebounceFn = setTimeout(() => {
				queryPokemon(searchTerm);
				setQueryLoading(false);
				clearTimeout(delayDebounceFn);
			}, 1500);
		} else if (searchTerm.length === 0) {
			queryPokemons(0, true);
			setQueryLoading(false);
		} else {
			setQueryLoading(false);
		}

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const onSearchByType = async (typeName: any) => {
		setSelectedType(typeName);
		if (typeName && typeName !== selectedType) {
			setPage(1);
			queryPokemonsByType(typeName, POKEMONS_PER_PAGE);
		} else if (!typeName) {
			queryPokemons(0, true);
		}
	};

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		setQueryLoading(true);
	};

	return (
		<div className={styles.searchBar}>
			<div className={styles.searchBar__searchByType}>
				<h2 className={styles.searchBar__searchByType__title}>
					Search by type
				</h2>

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

			<div className={styles.searchBar__searchByName}>
				<h2 className={styles.searchBar__searchByName__title}>
					Search by name
				</h2>
				<InputComp onChange={handleSearch} loading={queryLoading} />
			</div>
		</div>
	);
};
