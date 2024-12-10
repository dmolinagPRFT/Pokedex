import { MdEdit } from 'react-icons/md';
import { RiSave2Fill } from 'react-icons/ri';

import { InputComp } from '../../../../components';
import styles from './UserForm.module.scss';

interface GeneralInputProps {
	isEditing: boolean;
	value: string;
	label: string;
	onEditField: (field: string, value: boolean) => void;
}

export const GeneralInput = ({
	isEditing,
	value,
	label,
	onEditField,
}: GeneralInputProps) => {
	return (
		<>
			{isEditing ? (
				<div className={styles.field}>
					<InputComp
						label={label}
						onChangeValue={(e) => console.log(label.toLowerCase(), e)}
						value={value}
					/>
					<RiSave2Fill
						onClick={() => onEditField(label.toLowerCase(), false)}
					/>
				</div>
			) : (
				<div className={styles.field}>
					<div className={styles.field__container}>
						<label>{label}:</label>
						<label className={styles.value}>{value}</label>
					</div>

					<MdEdit onClick={() => onEditField(label.toLowerCase(), true)} />
				</div>
			)}
		</>
	);
};
