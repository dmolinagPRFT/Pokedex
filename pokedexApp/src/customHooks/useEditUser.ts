import { useToastContext } from '../utils';
import { User } from '../containers/user/createUser/CreateUser';
import { useNavigate } from 'react-router-dom';
import { putUser } from '../api';

export function useEditUser() {
	const { showToast } = useToastContext();
	const navigate = useNavigate();

	const editUser = async (user: User) => {
		let userResponse = await putUser(user);

		if (!userResponse.error) {
			showToast({
				isDisplay: true,
				message: 'User edited',
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

	return { editUser };
}
