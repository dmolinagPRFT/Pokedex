import { FormProvider, useForm } from 'react-hook-form';
import styles from '../User.module.scss';
import { useEffect } from 'react';
import { getUserInfo, useToastContext, useUserContext } from '../../../utils';
import { LoginForm } from './LoginForm/LoginForm';
import { Button } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api';

const INITIAL_FORM_VALUES: Login = {
	username: '',
	password: '',
};

export interface Login {
	username: string;
	password: string;
}

export const LoginView = () => {
	const methods = useForm({
		defaultValues: INITIAL_FORM_VALUES,
		mode: 'onSubmit',
	});
	const { handleSubmit, reset } = methods;
	const navigate = useNavigate();
	const { setUserInfo } = useUserContext();
	const { showToast } = useToastContext();

	useEffect(() => {
		const user: Login | null = getUserInfo();

		if (user) {
			reset({
				username: user.username,
				password: user.password,
			});
		}
	}, []);

	const onSubmit = async (loginInfo: Login) => {
		const { data, error } = await login(loginInfo);

		if (!data) {
			showToast({
				isDisplay: true,
				message: error,
				type: 'error',
			});
			return;
		}

		setUserInfo(data.user, data.token);
		navigate('/user');
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
