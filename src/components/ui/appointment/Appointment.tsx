import { IAppointment } from '@/types/appointment.interface';
import Image from 'next/image';
import RoundedButton from '../rounded-button/RoundedButton';
import { AiOutlinePhone } from 'react-icons/ai';
import { LuClock8 } from 'react-icons/lu';
import { BsThreeDots } from 'react-icons/bs';
import clsx from 'clsx';

interface IAppointmentItem {
	appointment: IAppointment;
	variant?: 'sm' | 'lg';
}
export default function Appointment({
	appointment,
	variant = 'sm',
}: IAppointmentItem) {
	const date = new Date(appointment.date);

	const time = new Intl.DateTimeFormat('en', { timeStyle: 'short' })
		.format(date)
		.replace(' ', '');

	return (
		<div
			className={clsx({
				['border-b border-dashed border-logo pb-5 last:border-none']:
					variant === 'lg',
				['px-6']: variant === 'sm',
			})}
		>
			<div
				className={clsx('flex  pt-4', {
					['border-b border-dashed border-logo pb-5']: variant === 'sm',
					['mb-5']: variant === 'lg',
				})}
			>
				<Image
					src={appointment?.doctor?.avatarPath || ''}
					height={40}
					width={40}
					alt="avatar"
					className="mr-5 rounded-lg"
				/>
				<div className="flex w-full justify-between">
					<div>
						<div className="text-sm">{appointment.doctor?.name}</div>
						<div>{appointment.title}</div>
					</div>
					<RoundedButton
						Icon={AiOutlinePhone}
						variant={variant === 'lg' ? 'third' : 'primary'}
					/>
				</div>
			</div>
			<footer
				className={clsx('mx-6 flex items-center justify-between', {
					['py-3']: variant === 'sm',
				})}
			>
				<div className="flex items-center gap-2.5">
					<LuClock8 />
					<span className="text-sm">{time}</span>
				</div>
				<button className="hover:text-hover-phone">
					<BsThreeDots />
				</button>
			</footer>
		</div>
	);
}
