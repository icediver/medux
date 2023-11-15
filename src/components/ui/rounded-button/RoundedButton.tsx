import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import { IconType } from 'react-icons';

interface IRoundedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'third';
	Icon?: IconType;
}
export default function RoundedButton({
	variant = 'primary',
	children,
	Icon,
	className,
	...rest
}: IRoundedButton) {
	return (
		<button
			{...rest}
			className={clsx(
				'flex h-10 w-10 items-center justify-center rounded-full text-1.5xl hover:text-hover-phone active:translate-y-1',
				{
					['bg-primary']: variant === 'primary',
					['bg-background']: variant === 'secondary',
					['bg-bg-light']: variant === 'third',
				},
				className
			)}
		>
			{Icon && <Icon />}
			{children}
		</button>
	);
}
