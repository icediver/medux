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
				'mx-px grid h-14 grid-cols-7 items-center justify-between rounded-lg bg-background pl-20',
				{
					['pl-[72px]']: variant === 'week',
					['pl-[19px]']: variant === 'month',
				}
			)}
		>
			{week &&
				week.map((weekday) => (
					<div
						className={clsx(
							'flex h-full w-[163px] items-center justify-center  border-r border-solid border-border-schedule text-sm last:border-none',
							{
								['bg-emergency text-white last:rounded-r-lg']: weekday.selected,
								// ['first:border-none']: variant === 'month',
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
