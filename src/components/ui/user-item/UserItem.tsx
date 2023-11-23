import RoundedButton from '@/components/ui/rounded-button/RoundedButton';
import { IUser } from '@/types/user.interface';
import clsx from 'clsx';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { GrUserManager } from 'react-icons/gr';

interface IPatientItem {
	patient: IUser;
	variant?: 'chat' | 'patients';
}
export default function UserItem({
	patient,
	variant = 'patients',
}: IPatientItem) {
	return (
		<li
			key={patient.name}
			className={clsx(' flex h-20 items-center justify-between rounded-lg', {
				['m-5 bg-patient-item']: variant === 'patients',
			})}
		>
			<div className="flex items-center justify-start gap-5 p-5 ">
				<div className="relative h-10 w-10 overflow-hidden rounded-lg">
					{patient.avatarPath && (
						<Image
							src={patient.avatarPath}
							alt="patient"
							// width={20}
							// height={20}
							fill
							// className="h-10 w-10  rounded-lg"
							// style={{ objectFit: 'cover' }}
							sizes="100px"
							className="object-cover"
						/>
					)}
				</div>
				<div className="text-logo">
					<div>{patient.name}</div>
					<div className="text-sm font-thin">27 years old</div>
				</div>
			</div>
			<div className="flex items-center gap-5 p-5">
				<RoundedButton
					className="flex w-36 items-center gap-3 text-sm text-logo"
					variant={variant === 'patients' ? 'third' : 'fourth'}
				>
					<GrUserManager className="[&>path]:stroke-logo " size={14} />
					<div>Case History</div>
				</RoundedButton>
				<RoundedButton
					variant={variant === 'patients' ? 'third' : 'fourth'}
					Icon={BiMessageDetail}
					className="text-base"
				/>

				<RoundedButton
					Icon={AiOutlinePhone}
					variant={variant === 'patients' ? 'third' : 'fourth'}
				/>
			</div>
		</li>
	);
}
