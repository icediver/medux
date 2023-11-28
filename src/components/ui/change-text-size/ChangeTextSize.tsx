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
			className={clsx('left-32 flex items-center  gap-2 pl-3', styles.range)}
		>
			<FaFont />
			<label htmlFor="cowbell" className="text-xs">
				Font size
			</label>

			<div className="w-[100px relative flex items-center">
				<span
					className="t-0 absolute left-0  h-0.5 rounded-lg bg-emergency"
					style={{ width: `${100 - ((22 - range) / 10) * 100}px` }}
				/>
				<input
					{...props}
					className={clsx(className)}
					type="range"
					id="cowbell"
					name="cowbell"
					min="12"
					max="22"
					value={range}
					onChange={(e) => {
						setRange(+e.currentTarget.value);
					}}
					step="2"
				/>
			</div>
		</div>
	);
}
