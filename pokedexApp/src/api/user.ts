import { User } from '../containers/user/createUser/CreateUser';
import { URL, USERS_PATH } from '../utils';

export const signIn = async (user: User) => {
	const endpoint = `${URL}${USERS_PATH}/register`;

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		const data = await response.json();

		if (!response.ok) {
			return { data: null, error: data.error };
		}

		return { data, error: null };
	} catch (err) {
		return {
			data: {},
			error: err,
		};
	}
};
