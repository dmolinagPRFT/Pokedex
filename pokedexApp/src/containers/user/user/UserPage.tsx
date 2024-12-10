import { useUserContext } from '../../../utils';
import { FavoriteList } from './listFavorites/FavoriteList';
import { UserForm } from './UserForm/UserForm';
import styles from './UserPage.module.scss';

export const UserPage = () => {
	const { user } = useUserContext();

	return (
		<div className={styles.userPage}>
			<h2>User</h2>

			<UserForm user={user} />

			<FavoriteList user={user} />
		</div>
	);
};
