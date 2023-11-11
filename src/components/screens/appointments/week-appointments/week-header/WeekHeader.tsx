'use client';

import { IWeekDay } from '@/helpers/date.helper';
import clsx from 'clsx';

interface IWeakHeader {
	week: IWeekDay[];
	variant?: 'week' | 'month';
}

export default function WeekHeader({ week, variant = 'week' }: IWeakHeader) {
	return (
		<div
			className={clsx(
				'mx-px grid h-14 grid-cols-7  items-center justify-between rounded-lg bg-background pl-20 pr-px',
				{
					['pl-20']: variant === 'week',
					['pl-5']: variant === 'month',
				}
			)}
		>
			{week &&
				week.map((weekday) => (
					<div
						className={clsx(
							'flex h-full  items-center justify-center  border-l border-solid border-border-schedule text-sm',
							{
								['bg-emergency text-white last:rounded-r-lg']: weekday.selected,
								['first:border-none']: variant === 'month',
							}
						)}
						key={weekday.weekday}
					>
						{variant === 'week' && (
							<span className="text-sm">
								{weekday.day}
								{','}
							</span>
						)}
						<span>{weekday.weekdayLong}</span>
					</div>
				))}
		</div>
	);
}
