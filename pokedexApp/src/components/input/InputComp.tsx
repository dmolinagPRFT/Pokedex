import React from 'react';
import { TextField, Input } from 'react-aria-components';

import styles from './input.module.scss';

type Props = {
	onChange: (e: string) => void;
	isRequired?: boolean;
	disabled?: boolean;
	tabIndex?: number;
	loading?: boolean;
};

export const InputComp = ({ disabled = false, ...props }: Props) => {
	return (
		<TextField
			isRequired={props.isRequired}
			className={styles.container}
			aria-label='search term'
		>
			<Input onChange={(e) => props.onChange(e.target.value)} />
			{props.loading && <div className={styles.container__spinner}></div>}
		</TextField>
	);
};
