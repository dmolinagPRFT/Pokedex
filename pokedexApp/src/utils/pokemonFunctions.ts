import { PokemonType, pokemonTypes } from '../pokemonTypes';
import { PokemonObj } from '../types/Pokemon';

export const getPokemonColor = (pokemon: PokemonObj | null): PokemonType => {
	return pokemonTypes.filter(
		(type) => pokemon && pokemon.types[0].type.name.indexOf(type.name) !== -1
	)[0];
};


export const formatPokemonId = (id: number) => {
	if (id < 10) return `#00${id}`;
	else if (id >= 10 && id < 99) return `#0${id}`;
	else return `#${id}`;
};