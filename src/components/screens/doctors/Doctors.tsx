'use client';

import { IUser } from '@/types/user.interface';
import clsx from 'clsx';
import { useSearchDoctors } from '@/hooks/useSearchDoctors';
import { SearchDoctors } from '@/components/ui/search-doctors/SearchDoctors';
import DoctorsHeader from './doctors-header/DoctorsHeader';
import { DoctorsItems } from './doctors-item/DoctorsItems';

interface IDoctors {
	doctors: IUser[];
}
export default function Doctors({ doctors }: IDoctors) {
	const { data, isSuccess, isLoading, searchTerm, setSearchTerm } =
		useSearchDoctors({ doctors });
	return (
		<>
			<div className="flex h-20 items-center justify-between overflow-hidden px-4">
				<DoctorsHeader />
			</div>
			<div
				className={clsx(
					'mx-px h-20  items-center justify-center rounded-lg bg-background px-2'
				)}
			>
				<SearchDoctors searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<ul>
				{!!data.users.length &&
					data.users.map((doctor) => (
						<DoctorsItems
							doctor={doctor}
							key={doctor.name}
							width={`${Math.floor(Math.random() * 101)}%`}
						/>
					))}
			</ul>
		</>
	);
}
