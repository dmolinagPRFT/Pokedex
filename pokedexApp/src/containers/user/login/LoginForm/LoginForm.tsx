import { Controller, useFormContext } from 'react-hook-form';
import { InputComp } from '../../../../components';

export const LoginForm = () => {
	const { control, setValue } = useFormContext();

	return (
		<>
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
		</>
	);
};
