import { useToastContext, useUserContext } from '../utils';
import { User } from '../containers/user/createUser/CreateUser';
import { putUser } from '../api';

export function useEditUser() {
	const { showToast } = useToastContext();
	const { setUserInfo } = useUserContext();

	const editUser = async (user: User) => {
		let { data, error } = await putUser(user);

		if (!error) {
			setUserInfo(data, data.password);
			showToast({
				isDisplay: true,
				message: 'User edited',
				type: 'success',
			});
		} else {
			showToast({
				isDisplay: true,
				message: error,
				type: 'error',
			});
		}
	};

	return { editUser };
}
