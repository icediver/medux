import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';
import { ReviewService } from '@/services/review.service';
import { UserService } from '@/services/user.service';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

export interface ISearchDoctorsRating {
	doctors: IUser[];
}
export interface IDepartment {
	speciality: string;
}

export const useSearchDoctors = ({ doctors }: ISearchDoctorsRating) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { user } = useAuth();
	const roleFilter: { role: RoleTypeEnum } = { role: RoleTypeEnum.DOCTOR };
	const [department, setDepartment] = useState<IDepartment>({} as IDepartment);

	const searchParams = useMemo(
		() => ({
			searchTerm,
			...roleFilter,
			...department,
		}),
		[searchTerm, user?.role, department.speciality]
	);

	const debouncedSearch = useDebounce(searchParams, 500);

	const { data, isLoading, isSuccess } = useQuery({
		enabled: !!debouncedSearch.searchTerm || !!department,
		queryKey: ['search doctors', debouncedSearch],
		queryFn: async () => {
			const res = await UserService.getAll(debouncedSearch);
			console.log(res);
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
		setDepartment,
	};
};
