import { useToastContext } from '../utils';
import { User } from '../containers/user/createUser/CreateUser';
import { signIn } from '../api/user';

export function useCreateUser() {
	const { showToast } = useToastContext();

	const createUser = async (user: User) => {
		let userResponse = await signIn(user);

		if (!userResponse.error) {
			showToast({
				isDisplay: true,
				message: 'User created',
				type: 'success',
			});
		} else {
			showToast({
				isDisplay: true,
				message: 'Unable to create user',
				type: 'error',
			});
		}
	};

	return { createUser };
}
