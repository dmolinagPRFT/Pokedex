import { PokemonObj } from '../../types/Pokemon';
import { getPokemonColor } from '../../utils/pokemonFunctions';
import { usePokemonsListContext } from '../../utils';
import {
	INITIAL_POKEMON,
	useListPokemon,
	useListPokemonByType,
} from '../../customHooks';
import { POKEMONS_PER_PAGE } from '../../utils/constants';
import styles from './pokemonList.module.scss';
import { useState } from 'react';
import { Button, Card, CardContent, PokemonModal } from '../../components';

interface PokemonListProp {
	page: number;
	setPage: (page: number) => void;
}

export const PokemonList = ({ page, setPage }: PokemonListProp) => {
	const { pokemonList, filtered, pokemonType } = usePokemonsListContext();
	const { queryPokemons } = useListPokemon();
	const { queryPokemonsByType } = useListPokemonByType();

	const [isOpen, setOpen] = useState(false);
	const [selectedPokemon, setSelectedPokemon] =
		useState<PokemonObj>(INITIAL_POKEMON);

	const handleLoadMore = async () => {
		const nextPage = page + 1;

		if (!filtered) {
			queryPokemons(page);
		} else {
			queryPokemonsByType(pokemonType, POKEMONS_PER_PAGE * nextPage);
		}
		setPage(nextPage);
	};

	const handleOpenModal = (pokemon: PokemonObj) => {
		setOpen(true);
		setSelectedPokemon(pokemon);
	};

	return (
		<section className={styles.pokemonList}>
			<div className={styles.pokemonList__list}>
				{pokemonList.map((pokemon: PokemonObj) => {
					return (
						<Card
							size='md'
							backgroundColor={getPokemonColor(pokemon).color}
							key={pokemon.id}
							openModal={() => handleOpenModal(pokemon)}
						>
							<CardContent type='vertical' pokemon={pokemon} />
						</Card>
					);
				})}
			</div>

			<PokemonModal
				pokemon={selectedPokemon}
				isOpen={isOpen}
				setOpen={() => setOpen(false)}
			/>

			<div className={styles.pokemonList__button}>
				<Button buttonStyle='primary' onClick={handleLoadMore}>
					Load more
				</Button>
			</div>
		</section>
	);
};
