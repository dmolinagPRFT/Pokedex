import { FavoriteList } from './listFavorites/FavoriteList';
import styles from './UserPage.module.scss';

export const UserPage = () => {
	return (
		<div className={styles.userPage}>
			<h2>User</h2>

			{/* user preferences */}
      <FavoriteList />
		</div>
	);
};
