import RoundedButton from '@/components/ui/rounded-button/RoundedButton';
import { IUser } from '@/types/user.interface';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { GrUserManager } from 'react-icons/gr';

interface IPatientItem {
	patient: IUser;
}
export default function PatientItem({ patient }: IPatientItem) {
	return (
		<li
			key={patient.name}
			className="m-5 flex items-center justify-between rounded-lg bg-patient-item"
		>
			<div className="flex items-center justify-start gap-5 p-5">
				<Image
					src={patient.avatarPath}
					alt="patient"
					width={20}
					height={20}
					className="h-10 w-10  rounded-lg"
				/>
				<div className="text-logo">
					<div>{patient.name}</div>
					<div className="text-sm font-thin">27 years old</div>
				</div>
			</div>
			<div className="flex items-center gap-5 p-5">
				<RoundedButton
					className="flex w-36 items-center gap-3 text-sm text-logo"
					variant="third"
				>
					<GrUserManager className="[&>path]:stroke-logo " size={14} />
					<div>Case History</div>
				</RoundedButton>
				<RoundedButton
					variant="third"
					Icon={BiMessageDetail}
					className="text-base"
				/>

				<RoundedButton Icon={AiOutlinePhone} variant={'third'} />
			</div>
		</li>
	);
}
