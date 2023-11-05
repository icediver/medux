import { appoinmentsDayTime } from '@/helpers/appointments.helper';

export default function DayTime() {
	return (
		<div>
			{appoinmentsDayTime.map((time, index) => {
				return (
					<div
						className="h-10 w-20 border-b border-r border-dashed border-border-schedule"
						key={time.value}
					>
						<div className="relative -top-2 mx-auto flex h-5 w-12 items-center justify-center rounded-lg bg-bg-light text-center text-xs">
							{time.value}
						</div>
					</div>
				);
			})}
		</div>
	);
}
