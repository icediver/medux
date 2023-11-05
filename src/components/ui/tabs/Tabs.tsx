import clsx from 'clsx';
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

interface ITabs extends ButtonHTMLAttributes<HTMLButtonElement> {
	values: string[];
	variant?: 'primary' | 'secondary' | 'third';
	activeTab: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
}
export default function Tabs({
	values,
	className,
	activeTab,
	setActiveTab,
	variant = 'primary',
	...rest
}: ITabs) {
	return (
		<div className={clsx('flex h-10 w-full justify-between gap-1', className)}>
			{values.map((tab, index) => (
				<button
					{...rest}
					key={tab}
					onClick={() => setActiveTab(index)}
					className={clsx(
						'w-full bg-background first:rounded-l-lg last:rounded-r-lg',
						{
							['bg-primary']: activeTab === index && variant === 'primary',
							['bg-bg-light']: activeTab === index && variant === 'secondary',
							['bg-emergency']: activeTab === index && variant === 'third',
						}
					)}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
