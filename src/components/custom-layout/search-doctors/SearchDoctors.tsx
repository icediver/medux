'use client';

import { useSearch } from '@/hooks/useSearch';
import { LuSearch } from 'react-icons/lu';
import SearchList from './search-list/SearchList';
export default function SearchDoctors() {
	const { searchTerm, data, isSuccess, setSearchTerm } = useSearch();
	return (
		<div className="relative">
			<input
				typeof="text"
				className="h-11 w-[490px] rounded-lg bg-bg-light pl-12 text-sm text-logo focus:outline-none "
				placeholder="Search patients or doctors"
				value={searchTerm}
				onKeyPress={(key) => {
					if (key.charCode === 13) setSearchTerm('');
				}}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<LuSearch className="absolute left-4 top-2.5 text-xl text-gray-600/40" />
			{isSuccess && !!data?.users.length && (
				<SearchList users={data?.users || []} />
			)}
		</div>
	);
}
