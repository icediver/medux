import { getCurrentWeek, getMonthShedule } from '@/helpers/date.helper';
import WeekHeader from '../week-appointments/week-header/WeekHeader';

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
	return (
		<>
			<WeekHeader week={week.week} variant="month" />
			<div className="grid grid-cols-7 pl-5 pr-0.5">
				{[...Array(7)].map((_, index) => (
					<div
						key={index}
						className="h-2.5 w-full border-l border-solid  border-border-schedule first:border-none"
					/>
				))}
			</div>

			<div className="grid grid-cols-7 grid-rows-6 pl-5 [&>*:nth-child(-n+7)]:border-t-transparent [&>*:nth-child(7n)]:border-r-transparent">
				{month.map((day) => (
					<div
						className="nth-child(7n):text-red-600 flex h-[100px] w-full flex-col justify-between border-r border-t border-solid border-border-schedule p-5 text-1.25xl "
						key={day.date.getDate()}
					>
						<div>{day.date.getDate()}</div>
						<div className="h-2 w-full rounded-lg bg-background "></div>
					</div>
				))}
			</div>
		</>
	);
}
