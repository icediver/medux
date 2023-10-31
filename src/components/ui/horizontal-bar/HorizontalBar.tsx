import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './HorizontalBar.module.scss';
interface IHorizontalBar extends HTMLAttributes<HTMLElement> {
	total: number;
	value: number;
	label: string;
	color: string;
}
export default function HorizontalBar({
	total,
	value,
	label,
	color,
	className,
}: IHorizontalBar) {
	const width = (value / total) * 100;
	return (
		<div className={clsx('h-8', className)}>
			<div className={clsx('mb-1 flex w-full justify-between text-sm')}>
				<div>
					<span>{value}</span>
					<span>{' of '}</span>
					<span>{total}</span>
				</div>
				<span>{label}</span>
			</div>
			<div className="h-1.5 rounded-md bg-background">
				<div
					className={clsx('h-1.5 animate-width rounded-md', styles.bar)}
					style={{ backgroundColor: color, width: `${width}%` }}
				/>
			</div>
		</div>
	);
}
