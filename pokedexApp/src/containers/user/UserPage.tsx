import styles from './userPage.module.scss';
import { CreateUser } from './createUser/CreateUser';

export const UserPage = () => {
	return (
		<div className={styles.userPage}>
			<h2>User</h2>

			{/* Create user */}
			<CreateUser />
		</div>
	);
};
