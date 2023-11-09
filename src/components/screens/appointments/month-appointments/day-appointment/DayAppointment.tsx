import { appoinmentsDayTime } from '@/helpers/appointments.helper';
import { ICalendarDay } from '@/helpers/date.helper';
import clsx from 'clsx';

interface IDayAppointment {
	day: ICalendarDay;
}

export default function DayAppointment({ day }: IDayAppointment) {
	return (
		<div
			className="nth-child(7n):text-red-600 flex h-[100px] w-full flex-col justify-between border-r border-t border-solid border-border-schedule p-5 text-1.25xl "
			key={day.date.getDate()}
		>
			<div
				className={clsx('text-white', {
					['text-gray-500']: !day.currentMonth,
					['text-red-700']: day.selected,
				})}
			>
				{day.date.getDate()}
			</div>
			<div className="grid h-2 w-full grid-cols-19 rounded-lg bg-background ">
				{appoinmentsDayTime.map((halfHour) => (
					<div
						className={clsx('h-2 w-2 rounded-full bg-primary', {
							['examination']: appointment?.category?.id === 2,
							['strip']: appointment?.category.id === 1,
							['emergency']: appointment?.category.id === 3,
							['consultation']: appointment?.category.id === 4,
							['routine']: appointment?.category.id === 5,
							['sick']: appointment?.category.id === 6,
							['patient']: variant === 'patient',
						})}
						key={halfHour.value}
					></div>
				))}
			</div>
		</div>
	);
}
