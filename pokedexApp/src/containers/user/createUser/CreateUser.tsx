import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../../components';
import { UserForm } from './UserForm';
import styles from './createUser.module.scss';
import { useToastContext, getUserInfo, setUserInfo } from '../../../utils';

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
	const { showToast } = useToastContext();

	const methods = useForm({
		defaultValues: INITIAL_FORM_VALUES,
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

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
				<UserForm />
				<Button buttonStyle='primary' type='submit' addClassname={styles.button}>
					Save
				</Button>
			</form>
		</FormProvider>
	);
};
