import { User } from '../containers/user/createUser/CreateUser';
import { INITIAL_POKEMON } from '../customHooks/useGetPokemon';
import { URL, USERS_PATH } from '../utils';

export const signIn = async (user: User) => {
	const endpoint = `${URL}${USERS_PATH}/register`;

	let data;
	let error;

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		data = await response.json();
		error = false;

		if (response.status !== 201) {
			data = INITIAL_POKEMON;
			error = data;
		}
	} catch (err) {
		data = INITIAL_POKEMON;
		error = true;
	}

	return { data, error };
};
