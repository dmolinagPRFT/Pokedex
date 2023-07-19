import { Controller, useFormContext } from 'react-hook-form';
import { InputComp } from '../../../components';
import styles from './userForm.module.scss';

export const UserForm = () => {
	const { control, setValue } = useFormContext();

	return (
		<div className={styles.userForm}>
			<Controller
				name='name'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Name'}
						{...field}
						onChange={(e) => setValue('name', e)}
					/>
				)}
			/>
			<Controller
				name='lastname'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Last name'}
						{...field}
						onChange={(e) => setValue('lastname', e)}
					/>
				)}
			/>
			<Controller
				name='username'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Username'}
						{...field}
						onChange={(e) => setValue('username', e)}
					/>
				)}
			/>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Email'}
						{...field}
						onChange={(e) => setValue('email', e)}
					/>
				)}
			/>
		</div>
	);
};
