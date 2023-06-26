import React from 'react';
import styles from './loadingSpinner.module.scss';

type loadingSpinnerProps = {
	isLoading: boolean;
	children: React.ReactNode;
};

export const LoadingSpinner = ({ isLoading, children }: loadingSpinnerProps) => {
	return (
		<div className={styles.loadingSpinner}>
			{isLoading && (
				<div className={styles.loadingSpinner__loadingContainer}>
					<div
						className={styles.loadingSpinner__loadingContainer__spinner}
					></div>
				</div>
			)}

			{children}
		</div>
	);
};
