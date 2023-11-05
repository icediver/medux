'use client';

import { IAppointment } from '@/types/appointment.interface';
import clsx from 'clsx';
import { RiAddCircleLine } from 'react-icons/ri';

interface IAppointmentItem {
	appointment?: IAppointment;
	variant?: 'doctor' | 'patient';
}
export default function AppointmentItem({
	appointment,
	variant = 'patient',
}: IAppointmentItem) {
	return (
		<li className="border-solid-left border-dashed-bottom flex h-10  pr-px first:border-dashed-top last:border-none">
			{appointment ? (
				<div
					className={clsx('z-10 h-10 w-full', {
						['examination']: appointment?.category?.id === 2,
						['strip']: appointment?.category.id === 1,
						['emergency']: appointment?.category.id === 3,
						['consultation']: appointment?.category.id === 4,
						['routine']: appointment?.category.id === 5,
						['sick']: appointment?.category.id === 6,
						['patient']: variant === 'patient',
					})}
				>
					<div className="flex h-full items-center justify-center">
						{variant === 'doctor' ? <>{appointment.description}</> : null}
					</div>
				</div>
			) : (
				<div className="flex h-full w-full items-center justify-center text-primary">
					{variant === 'patient' && (
						<button className="text-base active:translate-y-1">
							<RiAddCircleLine />
						</button>
					)}
				</div>
			)}
		</li>
	);
}
