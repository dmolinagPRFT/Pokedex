import React from 'react';
import { PokemonObj } from '../types/Pokemon';

export interface PokemonListContext {
	pokemonList: PokemonObj[];
	definePokemonList: (pokemonsList: PokemonObj[]) => void;
}

const pokemonListContext = React.createContext<PokemonListContext>({
	pokemonList: [],
	definePokemonList: (pokemonsList) => {},
});

export const PokemonListProvider = ({ children }: any) => {
	const [pokemonList, setPokemonList] = React.useState<PokemonObj[]>([]);

	function definePokemonList(pokemonList: PokemonObj[]) {
		setPokemonList(pokemonList);
	}

	return (
		<pokemonListContext.Provider
			value={{
				pokemonList: pokemonList,
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
