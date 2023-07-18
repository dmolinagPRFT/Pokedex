const FAVORITE_POKEMONS = 'favorites';

export const setFavoritePokemons = (pokemonIds: number[]): void => {
	localStorage.setItem(FAVORITE_POKEMONS, JSON.stringify(pokemonIds));
};

export const getFavoritePokemons = (): number[] => {
	const favorites = localStorage.getItem(FAVORITE_POKEMONS);

	if (favorites !== null) {
		const savedArray = JSON.parse(favorites);

		if (savedArray.length > 0) {
			return savedArray;
		}
	}

	return [];
};
