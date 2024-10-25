import React from 'react';
import { User } from '../containers';

interface UserContext {
	user: User;
	token: string;
	setUserInfo: (state: User, token: string) => void;
}

const userContext = React.createContext<UserContext>({
	user: {
		id: '',
		name: '',
		lastname: '',
		username: '',
		imageUrl: '',
		password: '',
	},
	token: '',
	setUserInfo: () => {},
});

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = React.useState<User>({
		id: '',
		name: '',
		lastname: '',
		username: '',
		imageUrl: '',
		password: '',
	});
	const [token, setToken] = React.useState<string>('');

	const setUserInfo = (
		{ id, name, lastname, username, imageUrl }: User,
		token: string
	) => {
		setUser(() => {
			return {
				id,
				name,
				lastname,
				username,
				imageUrl,
				password: token,
			};
		});
		setToken(token);
	};

	return (
		<userContext.Provider
			value={{
				user,
				token,
				setUserInfo,
			}}
		>
			{children}
		</userContext.Provider>
	);
};

const useUserContext = (): UserContext => React.useContext(userContext);

export { userContext, useUserContext };
