import { RoleTypeEnum } from '@/types/user.interface';
import { TodayAppointments } from '../today-appointments/TodayAppointments';
import Tabs from '@/components/ui/tabs/Tabs';
import { MouseEvent, useState } from 'react';
import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoMdArrowBack,
} from 'react-icons/io';
import clsx from 'clsx';
import { WeekAppointments } from '../week-appointments/WeekAppointments';
import MonthAppointments from '../month-appointments/MonthAppointments';
interface IDoctorAppointments {
	variant?: RoleTypeEnum;
}
export function DoctorAppointments({
	variant = RoleTypeEnum.PATIENT,
}: IDoctorAppointments) {
	const [activeTab, setActiveTab] = useState(2);
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	function prevNextHandler(event: MouseEvent<HTMLButtonElement>) {
		const direction = event.currentTarget.getAttribute('data-direction');
		const type = event.currentTarget.getAttribute('data-type');
		const offset = type === 'week' ? 7 : 30;
		if (direction === 'back')
			setCurrentDate(
				new Date(currentDate.setDate(currentDate.getDate() - offset))
			);
		if (direction === 'forward')
			setCurrentDate(
				new Date(currentDate.setDate(currentDate.getDate() + offset))
			);
	}

	return (
		<>
			<div className="mb-5 text-1.75xl  capitalize">
				{variant?.toLowerCase()} Appoinments
			</div>
			<div className="col-row-4 col-span-3 rounded-xl bg-bg-light">
				<div className="flex h-20 items-center justify-between overflow-hidden px-4">
					<span className="text-lg">
						{currentDate.toLocaleString('en-Us', {
							weekday: 'long',
							month: 'long',
							day: '2-digit',
						})}
					</span>
					<div
						className={clsx(
							'flex  w-[480px] gap-5 transition-all duration-1000',
							{ ['translate-x-44']: activeTab === 2 }
						)}
					>
						<Tabs
							values={['Month', 'Week', 'Day']}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							variant="third"
							className="!w-[300px] "
						/>
						<div
							className={clsx(
								'flex h-10 w-40 items-center justify-between rounded-lg bg-background px-5'
							)}
						>
							<button
								data-direction="back"
								data-type={activeTab === 0 ? 'month' : 'week'}
								onClick={prevNextHandler}
							>
								<IoIosArrowBack />
							</button>
							This {activeTab === 0 ? 'month' : 'week '}
							<button
								data-direction="forward"
								onClick={prevNextHandler}
								data-type={activeTab === 0 ? 'month' : 'week'}
							>
								<IoIosArrowForward />
							</button>
						</div>
					</div>
				</div>

				<div className="overlay-hidden col-span-3 row-span-4 grid ">
					{activeTab === 2 && (
						<TodayAppointments
							day={currentDate}
							variant={variant === RoleTypeEnum.DOCTOR ? 'doctor' : 'patient'}
						/>
					)}
					{activeTab === 1 && (
						<WeekAppointments
							day={currentDate}
							variant={variant === RoleTypeEnum.DOCTOR ? 'doctor' : 'patient'}
						/>
					)}
					{activeTab === 0 && (
						<MonthAppointments
							day={currentDate}
							variant={variant === RoleTypeEnum.DOCTOR ? 'doctor' : 'patient'}
						/>
					)}
				</div>
			</div>
		</>
	);
}
