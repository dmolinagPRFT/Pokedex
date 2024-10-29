import { useToastContext } from '../utils';
import { User } from '../containers/user/createUser/CreateUser';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api';

export function useCreateUser() {
	const { showToast } = useToastContext();
	const navigate = useNavigate();

	const createUser = async (user: User) => {
		let userResponse = await signIn(user);

		if (!userResponse.error) {
			showToast({
				isDisplay: true,
				message: 'User created',
				type: 'success',
			});
			navigate('/user');
		} else {
			showToast({
				isDisplay: true,
				message: userResponse.error,
				type: 'error',
			});
		}
	};

	return { createUser };
}
