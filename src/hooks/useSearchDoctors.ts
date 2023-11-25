import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';
import { ReviewService } from '@/services/review.service';
import { UserService } from '@/services/user.service';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

export interface ISearchDoctorsRating {
	doctors: IUser[];
}

export const useSearchDoctors = ({ doctors }: ISearchDoctorsRating) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { user } = useAuth();
	const roleFilter: { role: RoleTypeEnum } = { role: RoleTypeEnum.DOCTOR };

	const searchParams = useMemo(
		() => ({
			searchTerm,
			...roleFilter,
		}),
		[searchTerm, user?.role]
	);

	const debouncedSearch = useDebounce(searchParams, 500);
	const { data, isLoading, isSuccess } = useQuery({
		enabled: !!debouncedSearch.searchTerm,
		queryKey: ['search doctors', Object.values(debouncedSearch)],
		queryFn: async () => {
			const res = await UserService.getAll(debouncedSearch);
			for await (const user of res.users) {
				const rating = await ReviewService.getDoctorRating(user.id);
				user.rating = rating.data.rating;
			}

			return res;
		},
		initialData: { users: doctors, length: doctors.length },
	});

	return {
		data,
		isLoading,
		isSuccess,
		searchTerm,
		setSearchTerm,
	};
};
