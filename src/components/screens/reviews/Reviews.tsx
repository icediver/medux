'use client';
import { DoctorReviews } from '@/components/widgets/doctor-reviews/DoctorReviews';
import { DoctorsRating } from '@/components/widgets/doctors-rating/DoctorsRating';
import { IUser } from '@/types/user.interface';
import { useState } from 'react';

interface IReviews {
	doctors: IUser[];
}

export function Reviews({ doctors }: IReviews) {
	const [activeDoctor, setActiveDoctor] = useState(1);
	return (
		<>
			<div className="mb-5 bg-background text-1.75xl">{`Doctors rating`}</div>
			<div className="grid h-[800px] grid-cols-3 grid-rows-4 gap-6 rounded-lg bg-bg-light px-5">
				<DoctorsRating
					doctors={doctors}
					activeDoctor={activeDoctor}
					setActiveDoctor={setActiveDoctor}
				/>
				<DoctorReviews doctorId={activeDoctor} />
			</div>
		</>
	);
}
