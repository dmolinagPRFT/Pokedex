import React from 'react';
import { useButton } from 'react-aria';
import styles from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
	onClick?: (e: any) => void;
	children: React.ReactNode;
	size?: ButtonSize;
	buttonStyle?: ButtonStyle;
	role?: React.AriaRole;
	disabled?: boolean;
	tabIndex?: number;
};

const Button = ({
	buttonStyle = 'primary',
	size = 'md',
	disabled = false,
	...props
}: Props) => {
	let ref = React.useRef(null);
	let { buttonProps } = useButton(props, ref);

	const className = `${getSizeClass(size)} ${getStyleClass(buttonStyle)}`;

	return (
		<button
			onClick={props.onClick}
			className={className}
			disabled={disabled}
			role={props.role}
			tabIndex={props.tabIndex}
			{...buttonProps}
			ref={ref}
		>
			{props.children}
		</button>
	);
};

Button.displayName = 'Button';

export default Button;

function getSizeClass(size?: ButtonSize | null): string {
	switch (size) {
		case 'md':
			return styles.md;

		default:
			return styles.md;
	}
}

function getStyleClass(buttonStyle?: ButtonStyle | null): string {
	switch (buttonStyle) {
		case 'primary':
			return styles.primary;

		case 'secondary':
			return styles.secondary;

		default:
			return styles.primary;
	}
}
