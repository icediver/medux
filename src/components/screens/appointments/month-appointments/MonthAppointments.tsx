import { getCurrentWeek, getMonthShedule } from '@/helpers/date.helper';
import WeekHeader from '../week-appointments/week-header/WeekHeader';
import DayAppointment from './day-appointment/DayAppointment';
import { useQuery } from '@tanstack/react-query';
import { AppointmentService } from '@/services/appointment.service';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AppointmentLegend from '../today-appointments/appointment-legend/AppointmentLegend';

interface IMonthAppointments {
	day: Date;
	variant: 'doctor' | 'patient';
}
export default function MonthAppointments({
	day,
	variant = 'patient',
}: IMonthAppointments) {
	const month = getMonthShedule({ date: day, selectedDate: day });
	const week = getCurrentWeek(day);
	const [currentWeek, setCurrentWeek] = useState<number>(1);
	useEffect(() => {
		const index = month.findIndex((day) => day.selected === true);
		const current = Math.floor(index / 7);
		setCurrentWeek(current);

		console.log(current);
	}, [day]);

	const { data } = useQuery({
		queryKey: ['get month', month],
		queryFn: () =>
			AppointmentService.getAllAppointments({
				start: month[0].date.toLocaleDateString('sv-SE'),
				end: month[month.length - 1].date.toLocaleDateString('sv-SE'),
			}),
		select: ({ data }) => data,
	});

	return (
		<>
			<WeekHeader week={week.week} variant="month" />
			<div className=" h-[650px] animate-opacity">
				<div className="grid  grid-cols-7 pl-5">
					{[...Array(7)].map((_, index) => (
						<div
							key={index}
							className="h-2.5 w-[163px] border-r border-solid  border-border-schedule last:border-none"
						/>
					))}
				</div>

				<div className="flex">
					<div className="grid grid-rows-6">
						{[...Array(6)].map((_, index) => (
							<div
								key={index}
								className={clsx(
									'h-[100px] w-5 border-l border-r border-t border-solid border-border-schedule  bg-background  first:rounded-tl-xl last:rounded-bl-xl',
									{ ['bg-emergency']: index === currentWeek }
								)}
							/>
						))}
					</div>
					<div className="mx-px grid grid-cols-7 grid-rows-6 [&>*:nth-child(-n+7)]:border-t-transparent [&>*:nth-child(7n)]:border-r-transparent">
						{data?.map((day, index) => {
							return (
								<DayAppointment
									key={day.date}
									day={day}
									currentMonth={month[index].currentMonth}
									selected={month[index].selected}
									setCurrentWeek={setCurrentWeek}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{variant === 'doctor' && <AppointmentLegend />}
		</>
	);
}
