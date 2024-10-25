import { FormProvider, useForm } from 'react-hook-form';
import styles from '../User.module.scss';
import { useEffect } from 'react';
import { getUserInfo } from '../../../utils';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from '../../../components';

const INITIAL_FORM_VALUES: Login = {
	username: '',
	password: '',
};

interface Login {
	username: string;
	password: string;
}

export const LoginView = () => {
	const methods = useForm({
		defaultValues: INITIAL_FORM_VALUES,
		mode: 'onSubmit',
	});
	const { handleSubmit, reset } = methods;

	useEffect(() => {
		const user: Login | null = getUserInfo();

		if (user) {
			reset({
				username: user.username,
				password: user.password,
			});
		}
	}, []);

	const onSubmit = (loginInfo: Login) => {
		console.log(loginInfo);
	};

	return (
		<div className={styles.container}>
			<h2>User</h2>

			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.formContainer}
				>
					<LoginForm />
					<Button
						buttonStyle='primary'
						type='submit'
						addClassname={styles.button}
					>
						Login
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
