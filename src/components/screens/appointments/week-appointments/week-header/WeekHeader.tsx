'use client';

import { IWeekDay, getCurrentWeek } from '@/helpers/date.helper';
import clsx from 'clsx';

interface IWeakHeader {
	week: IWeekDay[];
}

export default function WeekHeader({ week }: IWeakHeader) {
	return (
		<div className="grid h-14 grid-cols-7  items-center justify-between rounded-lg bg-background pl-20">
			{week &&
				week.map((weekday) => (
					<div
						className={clsx(
							'flex h-full items-center justify-center gap-1 border-l border-solid border-border-schedule text-sm',
							{
								['bg-emergency text-white last:rounded-r-lg']: weekday.selected,
							}
						)}
						key={weekday.weekday}
					>
						<span className="text-sm">
							{weekday.day}
							{','}
						</span>
						<span>{weekday.weekdayLong}</span>
					</div>
				))}
		</div>
	);
}
