import { Dispatch, SetStateAction } from 'react';
import { LuSearch } from 'react-icons/lu';

interface ISearchDoctorRating {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

export function SearchDoctors({
	searchTerm,
	setSearchTerm,
}: ISearchDoctorRating) {
	return (
		<div className="relative h-20   px-5">
			<input
				typeof="text"
				className="h-full w-full rounded-lg bg-background pl-12 text-sm text-logo focus:outline-none "
				placeholder="Search  doctors"
				value={searchTerm}
				onKeyPress={(key) => {
					if (key.charCode === 13) setSearchTerm('');
				}}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<LuSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-xl text-logo" />
		</div>
	);
}
