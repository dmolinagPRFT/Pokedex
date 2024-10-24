import { useToastContext } from '../utils';
import { User } from '../containers/user/createUser/CreateUser';
import { signIn } from '../api/user';
import { useNavigate } from 'react-router-dom';

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
