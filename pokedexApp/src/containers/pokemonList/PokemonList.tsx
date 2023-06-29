import { Button, Card, CardContent } from '../../components';
import { PokemonObj } from '../../types/Pokemon';
import { getPokemonColor } from '../../utils/pokemonFunctions';
import { usePokemonsListContext } from '../../utils';
import { useListPokemon, useListPokemonByType } from '../../customHooks';
import { POKEMONS_PER_PAGE } from '../../utils/constants';

interface PokemonListProp {
	page: number;
	setPage: (page: number) => void;
}

export const PokemonList = ({ page, setPage }: PokemonListProp) => {
	const { pokemonList, filtered, pokemonType } = usePokemonsListContext();
	const { queryPokemons } = useListPokemon();
	const { queryPokemonsByType } = useListPokemonByType();

	const handleLoadMore = async () => {
		const nextPage = page + 1;
		if (!filtered) {
			queryPokemons(page);
		} else {
			queryPokemonsByType(pokemonType, POKEMONS_PER_PAGE * nextPage);
		}
		setPage(nextPage);
	};

	return (
		<div className='pokemonList'>
			{pokemonList.map((pokemon: PokemonObj) => {
				return (
					<Card
						size='md'
						backgroundColor={getPokemonColor(pokemon).color}
						key={pokemon.id}
					>
						<CardContent type='vertical' pokemon={pokemon} />
					</Card>
				);
			})}

			<Button buttonStyle='primary' onClick={handleLoadMore}>
				Load more
			</Button>
		</div>
	);
};
