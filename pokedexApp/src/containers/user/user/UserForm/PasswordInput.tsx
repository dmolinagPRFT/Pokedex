import { MdEdit, MdOutlineCancel } from 'react-icons/md';
import { RiSave2Fill } from 'react-icons/ri';

import { InputComp } from '../../../../components';
import styles from './UserForm.module.scss';

interface GeneralInputProps {
	isEditing: boolean;
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;

	label: string;
	enableSavePass: boolean;
	onEnablingEditField: (field: string) => void;
	onEditField: (field: string, value: string) => void;
	onSaveChange: (field: string) => void;
	onCancel: () => void;
}

export const PasswordInput = ({
	isEditing,
	oldPassword,
	newPassword,
	confirmPassword,
	label,
	enableSavePass,
	onEnablingEditField,
	onEditField,
	onSaveChange,
	onCancel,
}: GeneralInputProps) => {
	const classProp = enableSavePass ? 'icon' : 'iconDisabled';
	return (
		<>
			{isEditing ? (
				<div className={styles.passwordContainer}>
					<div className={styles.field}>
						<InputComp
							label={'Old Password'}
							onChangeValue={(e) => onEditField('oldPassword', e)}
							value={oldPassword}
						/>
					</div>
					<div className={styles.field}>
						<InputComp
							label={'New Password'}
							onChangeValue={(e) => onEditField('newPassword', e)}
							value={newPassword}
						/>
					</div>
					<div className={styles.field}>
						<InputComp
							label={'Confirm Password'}
							onChangeValue={(e) => onEditField('confirmPassword', e)}
							value={confirmPassword}
						/>
						<div className={styles.iconContainer}>
							<MdOutlineCancel className={styles.icon} onClick={onCancel} />
							<RiSave2Fill
								className={styles[classProp]}
								onClick={() =>
									enableSavePass && onSaveChange(label.toLowerCase())
								}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.field}>
					<div className={styles.field__container}>
						<label className={styles.field__container__label}>{label}:</label>
						<label className={styles.field__container__value}>*********</label>
					</div>

					<MdEdit onClick={() => onEnablingEditField(label.toLowerCase())} />
				</div>
			)}
		</>
	);
};
