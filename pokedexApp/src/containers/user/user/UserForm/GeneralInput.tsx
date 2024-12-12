import { MdEdit } from 'react-icons/md';
import { RiSave2Fill } from 'react-icons/ri';

import { InputComp } from '../../../../components';
import styles from './UserForm.module.scss';

interface GeneralInputProps {
	isEditing: boolean;
	value: string;
	label: string;
	onEnablingEditField: (field: string) => void;
	onEditField: (field: string, value: string) => void;
	onSaveChange: (field: string) => void;
}

export const GeneralInput = ({
	isEditing,
	value,
	label,
	onEnablingEditField,
	onEditField,
	onSaveChange,
}: GeneralInputProps) => {
	return (
		<>
			{isEditing ? (
				<div className={styles.field}>
					<InputComp
						label={label}
						onChangeValue={(e) => onEditField(label.toLowerCase(), e)}
						value={value}
					/>
					<RiSave2Fill
						className={styles.icon}
						onClick={() => onSaveChange(label.toLowerCase())}
					/>
				</div>
			) : (
				<div className={styles.field}>
					<div className={styles.field__container}>
						<label className={styles.field__container__label}>{label}:</label>
						<label className={styles.field__container__value}>{value}</label>
					</div>

					<MdEdit
						className={styles.icon}
						onClick={() => onEnablingEditField(label.toLowerCase())}
					/>
				</div>
			)}
		</>
	);
};
