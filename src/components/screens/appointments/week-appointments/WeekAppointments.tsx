import {
	appoinmentsDayTime,
	appointmentsSchedule,
} from '@/helpers/appointments.helper';
import clsx from 'clsx';
import { RiAddCircleLine } from 'react-icons/ri';
import CurrentTimeLine from '../current-time-line/CurrentTimeLine';
import { getCurrentWeek } from '@/helpers/date.helper';
import WeekHeader from './week-header/WeekHeader';
import DayTime from '../today-appointments/day-time/DayTime';
import AppointmentItem from '../today-appointments/appointment-item/AppointmentItem';
interface ITodayAppointments {
	variant: 'doctor' | 'patient';
	day: Date;
}

export function WeekAppointments({
	variant = 'patient',
	day,
}: ITodayAppointments) {
	const { week } = getCurrentWeek(new Date(day));
	return (
		<div className="animate-opacity">
			<WeekHeader week={week} />
			<div className="relative flex  h-[660px]  overflow-auto py-5 scrolbar-hidden">
				<DayTime />
				<div className="grid w-full grid-cols-7">
					{week.map((day, index) => (
						<div key={day.weekdayLong}>
							{appoinmentsDayTime.map((time, n) => {
								const appointment = appointmentsSchedule[index].find(
									(a) => a.time.time === time.value
								);
								return (
									<AppointmentItem
										variant={variant}
										appointment={appointment}
										key={String(appointment?.id) + index + time + n}
									/>
								);
							})}
						</div>
					))}
				</div>
				<CurrentTimeLine />
			</div>
			{variant === 'doctor' && <div className="">Emergency</div>}
		</div>
	);
}
