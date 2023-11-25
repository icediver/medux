import { Dispatch, SetStateAction } from 'react';
import { LuSearch } from 'react-icons/lu';

interface ISearchDoctorRating {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

export function SearchDoctorRating({
	searchTerm,
	setSearchTerm,
}: ISearchDoctorRating) {
	return (
		<div className="relative  pt-3">
			<input
				typeof="text"
				className="h-11 w-full rounded-lg bg-background pl-12 text-sm text-logo focus:outline-none "
				placeholder="Search  doctors"
				value={searchTerm}
				onKeyPress={(key) => {
					if (key.charCode === 13) setSearchTerm('');
				}}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<LuSearch className="absolute left-4 top-6 text-xl text-gray-600/40" />
		</div>
	);
}
