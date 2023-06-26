import { Card, CardContent } from '../../components';
import { PokemonObj } from '../../types/Pokemon';
import { getPokemonColor } from '../../utils/pokemonFunctions';
import { usePokemonsListContext } from '../../utils';

export const PokemonList = () => {
	const { pokemonList } = usePokemonsListContext();
	return (
		<div className='pokemonList'>
			{pokemonList.map((pokemon: PokemonObj) => {
				return (
					<Card size='md' backgroundColor={getPokemonColor(pokemon).color} key={pokemon.id}>
						<CardContent type='vertical' pokemon={pokemon} />
					</Card>
				);
			})}
		</div>
	);
};
