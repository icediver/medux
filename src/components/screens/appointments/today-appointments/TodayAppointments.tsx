import { appoinmentsDayTime } from '@/helpers/appointments.helper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CurrentTimeLine from '../current-time-line/CurrentTimeLine';
import DayTime from './day-time/DayTime';
import AppointmentItem from './appointment-item/AppointmentItem';
import AppointmentLegend from './appointment-legend/AppointmentLegend';
import { useQuery } from '@tanstack/react-query';
import { AppointmentService } from '@/services/appointment.service';
import { useState } from 'react';
interface ITodayAppointments {
	variant: 'doctor' | 'patient';
	day: Date;
}

export function TodayAppointments({
	variant = 'patient',
	day,
}: ITodayAppointments) {
	const date = new Date(day);
	const [currentDate, setCurrentDate] = useState<Date>(date);

	const { data } = useQuery({
		queryKey: ['get day Appointments', currentDate],
		queryFn: () => {
			return AppointmentService.getAppointmentsByDate(
				currentDate.toLocaleDateString('sv-SE')
			);
		},
		select: ({ data }) => data,
	});

	function prevNextHandler(direction: 'prev' | 'next') {
		if (direction === 'prev')
			setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
		if (direction === 'next')
			setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
	}

	return (
		<div className="animate-opacity">
			<div className="mx-px flex h-14 items-center justify-between rounded-xl bg-background px-5">
				<button
					className="hover:text-white"
					onClick={() => prevNextHandler('prev')}
				>
					<IoIosArrowBack />
				</button>
				<span className="text-sm">
					{currentDate.toLocaleString('en-Us', {
						weekday: 'long',
						month: 'long',
						day: '2-digit',
					})}
				</span>
				<button
					className="hover:text-white"
					onClick={() => prevNextHandler('next')}
				>
					<IoIosArrowForward />
				</button>
			</div>
			<div className="relative mx-px flex  h-[660px] overflow-auto py-5 scrolbar-hidden">
				<DayTime />
				<ul className="w-full">
					{appoinmentsDayTime.map((time, index) => {
						const appointment = data?.find((a) => {
							return a.time.time === time.value;
						});
						return (
							<AppointmentItem
								variant={variant}
								appointment={appointment}
								key={String(appointment?.id) + index + time}
							/>
						);
					})}
				</ul>
				<CurrentTimeLine />
			</div>
			{variant === 'doctor' && <AppointmentLegend />}
		</div>
	);
}
