import { TextField, Input } from 'react-aria-components';

import styles from './input.module.scss';

type Props = {
	onChange: (e: string) => void;
	label?: string;
	isRequired?: boolean;
	disabled?: boolean;
	tabIndex?: number;
	loading?: boolean;
	value?: string;
};

export const InputComp = ({ disabled = false, ...props }: Props) => {
	const mClassname = props.label ? styles.labelInput : '';

	return (
		<TextField
			isRequired={props.isRequired}
			className={`${mClassname} ${styles.container}`}
			aria-label='search term'
		>
			{props.label && <label>{props.label}:</label>}
			<Input
				onChange={(e) => props.onChange(e.target.value)}
				placeholder={props.label}
				value={props.value}
			/>
			{props.loading && <div className={styles.container__spinner}></div>}
		</TextField>
	);
};
