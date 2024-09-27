import React from 'react';

interface SpinnerContext {
	isLoading: boolean;
	showSpinner: (state: boolean) => void;
}

const spinnerContext = React.createContext<SpinnerContext>({
	isLoading: true,
	showSpinner: () => {},
});

export const SpinnerProvider = ({ children }: any) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const showSpinner = (isLoading: boolean) => {
		setIsLoading(isLoading);
	};

	return (
		<spinnerContext.Provider
			value={{
				isLoading,
				showSpinner,
			}}
		>
			{children}
		</spinnerContext.Provider>
	);
};

const useSpinnerContext = (): SpinnerContext => React.useContext(spinnerContext);

export { spinnerContext, useSpinnerContext };
