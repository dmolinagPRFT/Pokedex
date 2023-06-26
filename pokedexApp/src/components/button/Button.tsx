import React, { MouseEvent } from 'react';
import { useButton } from 'react-aria';
import styles from './button.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'badge';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
	size?: ButtonSize;
	buttonStyle?: ButtonStyle;
	role?: React.AriaRole;
	disabled?: boolean;
	tabIndex?: number;
	bgColor?: string;
	name?: string;
	textColor?: string;
};

export const Button = ({
	buttonStyle = 'primary',
	size = 'md',
	disabled = false,
	textColor,
	...props
}: Props) => {
	let ref = React.useRef(null);
	let { buttonProps } = useButton(props, ref);

	const className = `${getSizeClass(size)} ${getStyleClass(buttonStyle)}`;

	return (
		<button
			onClick={props.onClick}
			name={props.name}
			className={className}
			disabled={disabled}
			role={props.role}
			tabIndex={props.tabIndex}
			style={{ background: props.bgColor, color: textColor && textColor }}
			{...buttonProps}
			ref={ref}
		>
			{props.children}
		</button>
	);
};

Button.displayName = 'Button';

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

		case 'badge':
			return styles.badge;

		default:
			return styles.primary;
	}
}
