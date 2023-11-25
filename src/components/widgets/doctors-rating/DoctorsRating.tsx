import { IUser } from '@/types/user.interface';
import Widget, { WidgetSizeEnum } from '../widget/Widget';
import { DoctorsRatingItem } from './doctors-rating-item/DoctorsRatingItem';
import { SearchDoctorRating } from './search-doctors-rating/SearchDoctorRating';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSearchDoctors } from '@/hooks/useSearchDoctors';

interface IDoctorsRating {
	doctors: IUser[];
	setActiveDoctor: Dispatch<SetStateAction<number>>;
	activeDoctor: number;
}

export function DoctorsRating({
	doctors,
	setActiveDoctor,
	activeDoctor,
}: IDoctorsRating) {
	const { data, isSuccess, isLoading, searchTerm, setSearchTerm } =
		useSearchDoctors({ doctors });
	useEffect(() => {
		if (!!data.users.length) {
			setActiveDoctor(data.users[0].id);
		} else setActiveDoctor(-1);
	}, [data]);

	return (
		<Widget title="Doctors rating" size={WidgetSizeEnum['1x4']}>
			<div className="h-[745px] overflow-auto scrolbar-hidden">
				<SearchDoctorRating
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<ul className="py-5">
					{data.users.map((doctor, index) => (
						<DoctorsRatingItem
							user={doctor}
							onClick={() => {
								setActiveDoctor(doctor.id);
							}}
							key={doctor.name}
							active={doctor.id === activeDoctor}
						/>
					))}
				</ul>
			</div>
		</Widget>
	);
}
