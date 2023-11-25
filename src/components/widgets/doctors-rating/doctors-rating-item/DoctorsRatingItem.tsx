import { IUser } from '@/types/user.interface';
import Image from 'next/image';
import { Rating } from './rating/Rating';
import clsx from 'clsx';

export function DoctorsRatingItem({
	user,
	onClick,
	active,
}: {
	user: IUser;
	onClick: () => void;
	active: boolean;
}) {
	const { avatarPath, name, speciality, rating } = user;
	return (
		<li
			className={clsx('animate-opacity rounded-lg px-5', {
				['bg-patient-item']: active,
			})}
			onClick={onClick}
		>
			<button className="flex w-full cursor-pointer items-center justify-between border-b border-dashed border-message-border py-4">
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
					<div className="w-[140px] overflow-hidden whitespace-nowrap">
						<div className="text-md text-start">{name}</div>
						<div className="text-start text-sm">{speciality}</div>
					</div>
				</div>
				<Rating rating={rating} />
			</button>
		</li>
	);
}
