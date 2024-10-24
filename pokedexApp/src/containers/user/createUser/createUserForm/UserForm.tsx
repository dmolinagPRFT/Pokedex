import { Controller, useFormContext } from 'react-hook-form';
import { InputComp } from '../../../../components';
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
						onChangeValue={(e) => setValue('name', e)}
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
						onChangeValue={(e) => setValue('lastname', e)}
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
						onChangeValue={(e) => setValue('username', e)}
					/>
				)}
			/>
			<Controller
				name='password'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Password'}
						{...field}
						onChangeValue={(e) => setValue('password', e)}
            type='password'
					/>
				)}
			/>
		</div>
	);
};
