import { useCallback, useEffect, useState } from 'react';

import { User } from '../..';
import styles from './UserForm.module.scss';
import { GeneralInput } from './GeneralInput';
import { useEditUser } from '../../../../customHooks/useEditUser';
import { PasswordInput } from './PasswordInput';

interface UserFormProps {
	user: User;
}

interface editingUserInfo {
	name: boolean;
	lastname: boolean;
	password: boolean;
}

const defaultEditingUserValue: editingUserInfo = {
	name: false,
	lastname: false,
	password: false,
};

interface passwordVerification {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
}

const defaultPasswordValue: passwordVerification = {
	oldPassword: '',
	newPassword: '',
	confirmPassword: '',
};

export const UserForm = ({ user }: UserFormProps) => {
	const { editUser } = useEditUser();

	const [editingInfo, setEditingInfo] = useState<editingUserInfo>(
		defaultEditingUserValue
	);
	const [userInfo, setUserInfo] = useState<User>({ ...user, password: '' });
	const [passwordVerification, setPasswordVerification] =
		useState<passwordVerification>(defaultPasswordValue);
	const [enableSavePass, setEnableSavePass] = useState<boolean>(false);

	const handleEnablingEditFields = (field: string) => {
		setEditingInfo({ ...editingInfo, [field]: true });
	};

	const handleSetFields = useCallback(
		(field: string, value: string) => {
			setUserInfo((prevState) => ({ ...prevState, [field]: value }));
		},
		[userInfo]
	);

	const handleSetPassword = (field: string, value: string) => {
		setPasswordVerification((prevState) => ({ ...prevState, [field]: value }));
	};

	const validatePassword = useCallback(() => {
		const { oldPassword, newPassword, confirmPassword } = passwordVerification;
		if (
			oldPassword.trim().length > 0 &&
			newPassword.trim().length > 0 &&
			confirmPassword.trim().length > 0 &&
			newPassword === confirmPassword
		) {
			setEnableSavePass(true);
		} else {
			setEnableSavePass(false);
		}
	}, [passwordVerification]);

	useEffect(() => {
		validatePassword();
	}, [passwordVerification, validatePassword]);

	const handleSaveChange = useCallback(
		(field: string) => {
			if (userInfo[field as keyof User] === user[field as keyof User]) {
				setEditingInfo((prevState) => ({ ...prevState, [field]: false }));
				return;
			}

			editUser(userInfo);
			setEditingInfo({ ...editingInfo, [field]: false });
		},
		[userInfo, user, editUser, editingInfo]
	);

	const handleCancel = () => {
		setEditingInfo((prevState) => ({
			...prevState,
			password: false,
		}));
	};

	return (
		<div className={styles.container}>
			<GeneralInput
				isEditing={editingInfo.name}
				label='Name'
				value={userInfo.name}
				onEnablingEditField={handleEnablingEditFields}
				onEditField={handleSetFields}
				onSaveChange={handleSaveChange}
			/>

			<GeneralInput
				isEditing={editingInfo.lastname}
				label='Lastname'
				value={userInfo.lastname}
				onEnablingEditField={handleEnablingEditFields}
				onEditField={handleSetFields}
				onSaveChange={handleSaveChange}
			/>

			<PasswordInput
				isEditing={editingInfo.password}
				label='Password'
				confirmPassword={passwordVerification.confirmPassword}
				newPassword={passwordVerification.newPassword}
				oldPassword={passwordVerification.oldPassword}
				onEnablingEditField={handleEnablingEditFields}
				onEditField={handleSetPassword}
				onSaveChange={handleSaveChange}
				enableSavePass={enableSavePass}
				onCancel={handleCancel}
			/>
		</div>
	);
};
