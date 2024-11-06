import { Controller, useFormContext } from 'react-hook-form';
import { InputComp } from '../../../../components';

export const UserForm = () => {
	const { control, setValue } = useFormContext();

	return (
		<>
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
				name='email'
				control={control}
				render={({ field }) => (
					<InputComp
						label={'Email'}
						type='email'
						{...field}
						onChangeValue={(e) => setValue('email', e)}
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
		</>
	);
};
