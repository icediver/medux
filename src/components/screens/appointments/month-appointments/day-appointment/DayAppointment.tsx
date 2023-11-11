import { appoinmentsDayTime } from '@/helpers/appointments.helper';
import { ICalendarDay } from '@/helpers/date.helper';
import { IAppointmentsByDate } from '@/services/appointment.type';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

interface IDayAppointment {
	day: IAppointmentsByDate;
	currentMonth: boolean;
	selected: boolean;
	setCurrentWeek: Dispatch<SetStateAction<number>>;
}

export default function DayAppointment({
	day,
	currentMonth,
	selected,
}: IDayAppointment) {
	return (
		<div
			className={clsx(
				'nth-child(7n):text-red-600 flex h-[100px] w-full flex-col justify-between border-r border-t border-solid border-border-schedule p-4 text-1.25xl ',
				{ ['bg-opacity-50 striped-day']: !day.appointments.length }
			)}
		>
			<div
				className={clsx('text-logo', {
					['!text-inactive']: !currentMonth,
					// ['text-1.5xl font-semibold !text-red-700']: selected,
				})}
			>
				{selected ? 'Today' : new Date(day.date).getDate()}
			</div>
			{!!day.appointments.length && (
				<div className=" h-2 w-full overflow-x-auto rounded-lg bg-background scrolbar-hidden">
					<div className="grid h-2 w-48 grid-cols-19 gap-1.5">
						{appoinmentsDayTime.map((time) => {
							const appointment = day.appointments.find((a) => {
								return a.time.time === time.value;
							});
							// if (appointment?.category.id === 6) return null;

							return (
								<div
									title={time.value}
									className={clsx(
										'relative h-2 w-2 cursor-pointer rounded-full bg-background',
										{
											['bg-examination-border']:
												appointment?.category?.id === 2,
											['bg-emergency-border']: appointment?.category.id === 1,
											['bg-consultation-border']:
												appointment?.category.id === 3,
											['bg-routine-border']: appointment?.category.id === 4,
											['bg-sick-border']: appointment?.category.id === 5,
											// ['patient']: variant === 'patient',
										}
									)}
									key={time.value}
								></div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
