import { useState } from 'react';
import { MdEdit } from 'react-icons/md';

import { User } from '../..';
import styles from './UserForm.module.scss';
import { Input } from 'react-aria-components';
import { GeneralInput } from './GeneralInput';
import { useEditUser } from '../../../../customHooks/useEditUser';

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

export const UserForm = ({ user }: UserFormProps) => {
	const { editUser } = useEditUser();

	const [editingInfo, setEditingInfo] = useState<editingUserInfo>(
		defaultEditingUserValue
	);
	const [userInfo, setUserInfo] = useState<User>(user);

	const handleEnablingEditFields = (field: string) => {
		setEditingInfo({ ...editingInfo, [field]: true });
	};

	const handleSetFields = (field: string, value: string) => {
		setUserInfo({ ...userInfo, [field]: value });
	};

	const handleSaveChange = (field: string) => {
		editUser(userInfo);
		setEditingInfo({ ...editingInfo, [field]: false });
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

			{editingInfo.password ? (
				<div className={styles.field}>
					<label className={styles.label}>Password:</label>
					<Input
						className={styles.value}
						onChange={(e) => console.log(e.target.value)}
						placeholder={'Last Name'}
						value={''}
						type={'text'}
					/>
				</div>
			) : (
				<div className={styles.field}>
					<div className={styles.container}>
						<label className={styles.label}>Password:</label>
					</div>
					<MdEdit />
				</div>
			)}
		</div>
	);
};
