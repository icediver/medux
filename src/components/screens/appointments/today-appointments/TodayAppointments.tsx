import {
	appoinmentsDayTime,
	appointmentsSchedule,
} from '@/helpers/appointments.helper';
import clsx from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiAddCircleLine } from 'react-icons/ri';
import CurrentTimeLine from '../current-time-line/CurrentTimeLine';
import DayTime from './day-time/DayTime';
import AppointmentItem from './appointment-item/AppointmentItem';
interface ITodayAppointments {
	variant: 'doctor' | 'patient';
	day: Date;
}

export function TodayAppointments({
	variant = 'patient',
	day,
}: ITodayAppointments) {
	const date = new Date(day).toLocaleString('en-Us', {
		weekday: 'long',
		month: 'long',
		day: '2-digit',
	});

	return (
		<div className="animate-opacity">
			<div className="flex h-14 items-center justify-between rounded-xl bg-background px-5">
				<button className="hover:text-white">
					<IoIosArrowBack />
				</button>
				<span className="text-sm">{date}</span>
				<button className="hover:text-white">
					<IoIosArrowForward />
				</button>
			</div>
			<div className="relative flex h-[660px]  overflow-auto py-5 scrolbar-hidden">
				<DayTime />
				<ul className="w-full">
					{appoinmentsDayTime.map((time, index) => {
						const appointment = appointmentsSchedule[6].find(
							(a) => a.time.time === time.value
						);
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
			{variant === 'doctor' && <div className="">Emergency</div>}
		</div>
	);
}
