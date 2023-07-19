import { User } from '../containers/user/UserPage';

const FAVORITE_POKEMONS = 'favorites';
const USER_INFO = 'user';

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

export const setUserInfo = (user: User): void => {
	localStorage.setItem(USER_INFO, JSON.stringify(user));
};

export const getUserInfo = (): User | null => {
	const userInfo = localStorage.getItem(USER_INFO);

	if (userInfo !== null) {
		const savedUserInfo: User = JSON.parse(userInfo);

		if (savedUserInfo) {
			return savedUserInfo;
		}
	}

	return null;
};
