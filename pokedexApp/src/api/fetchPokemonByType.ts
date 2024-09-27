export const fetchPokemonByType = async (type: string, pokemonAmount = 9) => {
	// const URL = `https://pokeapi.co/api/v2/type/${type}`;
	const URL = `http://localhost:3000/pokemons/${type}`;

	try {
		const response = await fetch(URL);
		const data = await response.json();

		return { pokemonList: data.pokemonList, error: false };
	} catch {
		return {
			pokemonList: [],
			error: false,
		};
	}
};
