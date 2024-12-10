import { useState } from 'react';
import { MdEdit } from 'react-icons/md';

import { User } from '../..';
import styles from './UserForm.module.scss';
import { Input } from 'react-aria-components';
import { GeneralInput } from './GeneralInput';

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
	const [editingInfo, setEditingInfo] = useState<editingUserInfo>(
		defaultEditingUserValue
	);

	const handleEditFields = (field: string, value: boolean) => {
		setEditingInfo({ ...editingInfo, [field]: value });
	};

	return (
		<div className={styles.container}>
			<GeneralInput
				isEditing={editingInfo.name}
				label='Name'
				value={user.name}
				onEditField={handleEditFields}
			/>

			<GeneralInput
				isEditing={editingInfo.lastname}
				label='Lastname'
				value={user.lastname}
				onEditField={handleEditFields}
			/>

			{editingInfo.password ? (
				<div className={styles.field}>
					<label>Password:</label>
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
					<div className={styles.field__container}>
						<label>Password:</label>
					</div>
					<MdEdit />
				</div>
			)}
		</div>
	);
};
