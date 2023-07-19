import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../components';
import { UserForm } from './userForm/UserForm';
import styles from './userPage.module.scss';

interface User {
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
	const methods = useForm({
		defaultValues: initialFormValues,
		mode: 'onSubmit',
	});

	const { handleSubmit, reset } = methods;

	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<div className={styles.userPage}>
			<h2>User</h2>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<UserForm />
					<Button buttonStyle='primary' type='submit'>
						Save
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};
