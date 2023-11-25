import { Rating } from '@/components/widgets/doctors-rating/doctors-rating-item/rating/Rating';
import { IUser } from '@/types/user.interface';
import clsx from 'clsx';
import Image from 'next/image';

interface IDoctorsItems {
	doctor: IUser;
	width: string;
}

export function DoctorsItems({ doctor, width }: IDoctorsItems) {
	const { avatarPath, name, speciality, rating } = doctor;
	return (
		<li
			className={clsx(
				'm-5 animate-opacity rounded-lg bg-patient-item px-5',
				{}
			)}
		>
			<button className="flex w-full cursor-pointer items-center justify-between  py-4">
				<div className="flex">
					<div className="relative mr-4  h-14 w-14  overflow-hidden rounded-lg">
						{avatarPath && (
							<Image
								src={avatarPath}
								alt="patient"
								fill
								sizes="100px"
								className="object-cover"
							/>
						)}
					</div>
					<div className="">
						<div className="text-md text-start">{name}</div>
						<div className="text-start text-sm">{speciality}</div>
					</div>
				</div>
				<div className="flex items-center gap-5">
					<div>
						<div className="mb-2 text-start text-sm">Doctor rating</div>
						<Rating isReview rating={rating} />
					</div>
					<div>
						<div className="mb-2 text-start text-sm">
							Overal booked appointments
						</div>
						<div className="h-1 w-[275px]">
							<div style={{ width }} className="h-1 rounded-lg bg-primary" />
						</div>
					</div>
					<button className="rounded-full bg-bg-light px-5 py-2.5 text-sm active:translate-y-1">
						Make an appointment
					</button>
				</div>
			</button>
		</li>
	);
}
