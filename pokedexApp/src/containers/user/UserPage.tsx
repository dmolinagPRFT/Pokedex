import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../components';
import { UserForm } from './userForm/UserForm';
import styles from './userPage.module.scss';
import { getUserInfo, setUserInfo } from '../../utils/setGetLocalStorageInfo';
import { useToastContext } from '../../utils';

export interface User {
	name: string;
	lastname: string;
	username: string;
	email: string;
}

const initialFormValues: User = {
	name: '',
	lastname: '',
	username: '',
	email: '',
};

export const UserPage = () => {
	const { showToast } = useToastContext();

	const methods = useForm({
		defaultValues: initialFormValues,
		mode: 'onSubmit',
	});

	const { handleSubmit, reset } = methods;

	const onSubmit = (values: User) => {
		setUserInfo(values);
		showToast({
			isDisplay: true,
			message: 'Log in successfully',
			type: 'success',
		});
	};

	React.useEffect(() => {
		const user: User | null = getUserInfo();

		if (user) {
			reset({
				name: user.name,
				lastname: user.lastname,
				username: user.username,
				email: user.email,
			});
		}
	}, []);

	return (
		<div className={styles.userPage}>
			<h2>User</h2>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.userPage}>
						<UserForm />
						<Button buttonStyle='primary' type='submit'>
							Save
						</Button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};
