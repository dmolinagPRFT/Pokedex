import React from 'react';
import { PokemonObj } from '../types/Pokemon';

export interface PokemonListContext {
	pokemonList: PokemonObj[];
	filtered: boolean;
	pokemonType: string;

	definePokemonList: (
		pokemonsList: PokemonObj[],
		pokemonType: string,
		filtered?: boolean
	) => void;
}

const pokemonListContext = React.createContext<PokemonListContext>({
	pokemonList: [],
	filtered: false,
	pokemonType: '',
	definePokemonList: (pokemonsList) => {},
});

export const PokemonListProvider = ({ children }: any) => {
	const [pokemonList, setPokemonList] = React.useState<PokemonObj[]>([]);
	const [filtered, setFiltered] = React.useState<boolean>(false);
	const [pokemonType, setPokemonType] = React.useState<string>('');

	function definePokemonList(
		pokemonList: PokemonObj[],
		pokemonType: string,
		filtered = false
	) {
		setPokemonList(pokemonList);
		setFiltered(filtered);
		setPokemonType(pokemonType);
	}

	return (
		<pokemonListContext.Provider
			value={{
				pokemonList: pokemonList,
				filtered: filtered,
				pokemonType: pokemonType,
				definePokemonList: definePokemonList,
			}}
		>
			<>{children}</>
		</pokemonListContext.Provider>
	);
};

const usePokemonsListContext = (): PokemonListContext =>
	React.useContext(pokemonListContext);

export { pokemonListContext, usePokemonsListContext };
