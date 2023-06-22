import React from 'react';
import { TextField, Label, Input } from 'react-aria-components';

import styles from './input.module.scss';

type Props = {
	onChange?: (e: any) => void;
	label?: React.ReactNode;
	isRequired?: boolean;
	disabled?: boolean;
	tabIndex?: number;
};

const InputComp = ({ disabled = false, ...props }: Props) => {
	return (
		<TextField isRequired={props.isRequired} className={styles.container}>
			{props.label && (
				<Label className={styles.label}>
					{props.label}:{props.isRequired && '*'}
				</Label>
			)}

			<Input />
		</TextField>
	);
};

export default InputComp;
