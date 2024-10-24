import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../../components';
import styles from './CreateUser.module.scss';
import { getUserInfo, setUserInfo } from '../../../utils';
import { useCreateUser } from '../../../customHooks/useCreateUser';
import { UserForm } from './createUserForm/UserForm';

export interface User {
	username: string;
	name: string;
	lastname: string;
	password: string;
	imageUrl: string;
}

const INITIAL_FORM_VALUES: User = {
	name: '',
	lastname: '',
	username: '',
	imageUrl: '',
	password: '',
};

export const CreateUser = () => {
	const { createUser } = useCreateUser();

	const methods = useForm({
		defaultValues: INITIAL_FORM_VALUES,
		mode: 'onSubmit',
	});
	const { handleSubmit, reset } = methods;

	useEffect(() => {
		const user: User | null = getUserInfo();

		if (user) {
			reset({
				name: user.name,
				lastname: user.lastname,
				username: user.username,
				imageUrl: user.imageUrl,
				password: user.password,
			});
		}
	}, []);

	const onSubmit = (user: User) => {
		setUserInfo(user);
		createUser(user);
	};

	return (
		<div className={styles.userPage}>
			<h2>Create User</h2>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
					<UserForm />
					<Button
						buttonStyle='primary'
						type='submit'
						addClassname={styles.button}
					>
						Save
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
