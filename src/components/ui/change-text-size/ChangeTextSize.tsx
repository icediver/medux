'use client';
import clsx from 'clsx';
import {
	HTMLAttributes,
	HTMLInputTypeAttribute,
	HtmlHTMLAttributes,
	InputHTMLAttributes,
	useEffect,
	useState,
} from 'react';
import styles from './ChangeTextSize.module.scss';
import { FaFont } from 'react-icons/fa6';

interface IChangeTextSize extends InputHTMLAttributes<HTMLInputElement> {}
export default function ChangeTextSize({
	className,
	...props
}: IChangeTextSize) {
	const [range, setRange] = useState(16);

	useEffect(() => {
		document.getElementsByTagName('html')[0].style.fontSize = `${range}px`;
	}, [range]);
	return (
		<div
			className={clsx(
				'absolute right-10 top-16 flex items-center gap-2',
				styles.range
			)}
		>
			<FaFont />
			<label htmlFor="cowbell" className="text-xs">
				Font size
			</label>
			<input
				{...props}
				className={clsx(className)}
				type="range"
				id="cowbell"
				name="cowbell"
				min="12"
				max="22"
				value={range}
				onChange={(e) => setRange(+e.currentTarget.value)}
				step="2"
			/>
		</div>
	);
}
