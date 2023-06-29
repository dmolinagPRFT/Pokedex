import React from 'react';

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';

interface ToastState {
	isDisplay: boolean;
	message: string;
	type: ToastType;
}

interface ToastContext {
	state: ToastState;
	showToast: (state: ToastState) => void;
}

const toastContext = React.createContext<ToastContext>({
	state: { isDisplay: false, message: '', type: 'info' },
	showToast: () => {},
});

export const ToastProvider = ({ children }: any) => {
	const [state, setState] = React.useState<ToastState>({
		isDisplay: false,
		message: '',
		type: 'info',
	});

	const showToast = ({ isDisplay, type, message }: ToastState) => {
		setState({ isDisplay: true, message: message, type: type });
	};

	return (
		<toastContext.Provider
			value={{
				state,
				showToast,
			}}
		>
			{children}
		</toastContext.Provider>
	);
};

const useToastContext = (): ToastContext => React.useContext(toastContext);

export { toastContext, useToastContext };
