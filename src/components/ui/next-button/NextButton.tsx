'use client';

import clsx from 'clsx';
import { MouseEvent, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface INextButton {
	variant: 'month' | 'week';
}
export default function NextButton({ variant }: INextButton) {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	type TypeDirection = MouseEvent<HTMLButtonElement>;

	function prevNextHandler(event: TypeDirection) {
		const direction = event.currentTarget.getAttribute('data-direction');
		const offset = variant === 'week' ? 7 : 30;
		if (direction === 'back')
			setCurrentDate(
				new Date(currentDate.setDate(currentDate.getDate() - offset))
			);
		if (direction === 'forward')
			setCurrentDate(
				new Date(currentDate.setDate(currentDate.getDate() + offset))
			);
	}

	return (
		<div
			className={clsx(
				'flex h-10 w-40 items-center justify-between rounded-lg bg-background px-5'
			)}
		>
			<button data-direction="back" onClick={prevNextHandler}>
				<IoIosArrowBack />
			</button>
			This {variant}
			<button data-direction="forward" onClick={prevNextHandler}>
				<IoIosArrowForward />
			</button>
		</div>
	);
}
