import { TextField, Input, InputProps } from 'react-aria-components';

import styles from './input.module.scss';

export interface InputCompProps {
	onChangeValue: (e: string) => void;
	label?: string;
	isRequired?: boolean;
	disabled?: boolean;
	tabIndex?: number;
	loading?: boolean;
	value?: string;
	type?: string;
}

export const InputComp = ({
	disabled = false,
	type,
	...props
}: InputCompProps & Partial<InputProps>) => {
	const mClassname = props.label ? styles.labelInput : '';

	return (
		<TextField
			isRequired={props.isRequired}
			className={`${mClassname} ${styles.container}`}
			aria-label='search term'
		>
			{props.label && <label>{props.label}:</label>}
			<Input
				onChange={(e) => props.onChangeValue(e.target.value)}
				placeholder={props.label}
				value={props.value}
				type={type ?? 'text'}
			/>
			{props.loading && (
				<div className={styles.container__spinner} data-testid='spinner'></div>
			)}
		</TextField>
	);
};
