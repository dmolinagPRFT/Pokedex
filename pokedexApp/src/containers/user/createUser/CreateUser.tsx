import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../../components';
import styles from '../User.module.scss';
import { getUserInfo } from '../../../utils';
import { UserForm } from './createUserForm/UserForm';
import { useCreateUser } from '../../../customHooks';

export interface User {
	id: string;
	username: string;
	email: string;
	name: string;
	lastname: string;
	password: string;
	imageUrl: string;
}

const INITIAL_FORM_VALUES: User = {
	id: '',
	name: '',
	lastname: '',
	username: '',
	email: '',
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
				email: user.email,
				imageUrl: user.imageUrl,
				password: user.password,
			});
		}
	}, []);

	const onSubmit = (user: User) => {
		createUser(user);
	};

	return (
		<div className={styles.container}>
			<h2>Create User</h2>
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.formContainer}
				>
					<UserForm />
					<Button
						buttonStyle='primary'
						type='submit'
						addClassname={styles.button}
					>
						Submit
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
