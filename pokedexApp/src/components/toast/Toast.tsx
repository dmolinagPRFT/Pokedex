import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useToastContext } from '../../utils';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
	const { state } = useToastContext();

	useEffect(() => {
		if (state.isDisplay) {
			switch (state.type) {
				case 'error':
					toast.error(state.message, {
						draggable: true,
						progress: undefined,
						theme: 'light',
					});
					break;
				default:
					toast(state.message, {
						draggable: true,
						progress: undefined,
						theme: 'light',
					});
			}
		}
	}, [state.isDisplay, state.message, state.type]);

	return (
		<ToastContainer
			position='top-center'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			pauseOnHover
			theme='light'
		/>
	);
};
