import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useToastContext } from '../../utils';
import 'react-toastify/dist/ReactToastify.css';

const AUTO_CLOSE = 5000;

export const Toast = () => {
	const { state, showToast } = useToastContext();

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

	useEffect(() => {
		let closeTimeout: NodeJS.Timeout;
		if (state.isDisplay) {
			closeTimeout = setTimeout(() => {
				showToast({
					isDisplay: false,
					message: '',
					type: 'default',
				});
			}, AUTO_CLOSE + 10);
		}

		return () => clearTimeout(closeTimeout);
	}, [state.isDisplay]);

	return (
		<ToastContainer
			position='top-center'
			autoClose={AUTO_CLOSE}
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
