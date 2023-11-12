import Appointment from '@/components/ui/appointment/Appointment';
import { appointments } from '../data/data';
import Widget from '../widget/Widget';
import { useProfile } from '@/hooks/useProfile';
import Week from '@/components/ui/week/Week';
import { useState } from 'react';
import { getCurrentWeek } from '@/helpers/date.helper';
import { useQuery } from '@tanstack/react-query';
import { AppointmentService } from '@/services/appointment.service';
import { appoinmentsDayTime } from '@/helpers/appointments.helper';

interface IUpcommingAppointments {}
export default function UpcommingAppointments({}: IUpcommingAppointments) {
	const [currentDay, setCurrentDay] = useState(new Date());
	const { profile } = useProfile();
	const doctor = { doctor: profile };
	const { week, months } = getCurrentWeek(currentDay);

	const { data } = useQuery({
		queryKey: ['get day Appointments', currentDay],
		queryFn: () => {
			return AppointmentService.getAppointmentsByDate(
				currentDay.toLocaleDateString('sv-SE')
			);
		},
		select: ({ data }) => data,
	});

	function forwardBackwardHandler(direction: 'forward' | 'backward') {
		if (direction === 'forward') {
			setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 7)));
		} else
			setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 7)));
	}

	return (
		<Widget size="lg" title="Upcomming Appointments">
			<section className="h-full">
				<div className="mx-5 mb-4 text-sm text-primary underline decoration-dashed">
					{months}
				</div>
				<Week
					week={week}
					setCurrentDay={setCurrentDay}
					forwardBackwardHandler={forwardBackwardHandler}
				/>
				<div className="h-[600px] overflow-auto  px-4 scrolbar-hidden">
					{appoinmentsDayTime.map((time, index) => {
						const appointment = data?.find((a) => {
							return a.time.time === time.value;
						});
						if (!appointment) return null;

						// {appointments.map((appointment, index) => {
						return (
							<Appointment key={index} appointment={appointment} variant="lg" />
						);
					})}
				</div>
			</section>
		</Widget>
	);
}
