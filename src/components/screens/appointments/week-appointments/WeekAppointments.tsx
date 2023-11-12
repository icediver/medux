import { appoinmentsDayTime } from '@/helpers/appointments.helper';
import CurrentTimeLine from '../current-time-line/CurrentTimeLine';
import { getCurrentWeek } from '@/helpers/date.helper';
import WeekHeader from './week-header/WeekHeader';
import DayTime from '../today-appointments/day-time/DayTime';
import AppointmentItem from '../today-appointments/appointment-item/AppointmentItem';
import AppointmentLegend from '../today-appointments/appointment-legend/AppointmentLegend';
import { useQuery } from '@tanstack/react-query';
import { AppointmentService } from '@/services/appointment.service';
interface ITodayAppointments {
	variant: 'doctor' | 'patient';
	day: Date;
}

export function WeekAppointments({
	variant = 'patient',
	day,
}: ITodayAppointments) {
	const { week } = getCurrentWeek(new Date(day));

	const weekStart = week[0].date.toLocaleDateString('sv-SE');
	const weekEnd = week[6].date.toLocaleDateString('sv-SE');

	const { data } = useQuery({
		queryKey: ['get week', weekStart, weekEnd],
		queryFn: () =>
			AppointmentService.getAllAppointments({ start: weekStart, end: weekEnd }),
		select: ({ data }) => data,
	});

	return (
		<div className="animate-opacity">
			<WeekHeader week={week} />
			<div className="relative flex  h-[660px]  overflow-auto px-px py-5 scrolbar-hidden">
				<DayTime />
				<div className="grid w-full grid-cols-7">
					{data?.map((day, index) => {
						return (
							<div key={index}>
								{appoinmentsDayTime.map((time, n) => {
									const appointment = day.appointments.find((a) => {
										return a.time.time === time.value;
									});

									return (
										<AppointmentItem
											variant={variant}
											appointment={appointment}
											key={String(appointment?.id) + index + n}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
				<CurrentTimeLine />
			</div>
			{variant === 'doctor' && <AppointmentLegend />}
		</div>
	);
}
