import { getReviewsUrl } from '@/config/api.config';
import { axiosClassic, instance } from '@/helpers/api/api.interceptor';
import { IReview } from '@/types/review.interface';

type TypeData = {
	title: string;
	rating: number;
	text: string;
};

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: getReviewsUrl('/'),
			method: 'GET',
		});
	},

	async create(doctorId: string | number, data: TypeData) {
		return instance<IReview>({
			url: getReviewsUrl(`/doctor/${doctorId}`),
			method: 'POST',
			data,
		});
	},

	async getDoctorRating(doctorId: string | number) {
		return axiosClassic<{ rating: number }>({
			url: getReviewsUrl(`/rating/${doctorId}`),
			method: 'GET',
		});
	},
	async getReviewsByDoctor(doctorId: string | number) {
		return instance<IReview[]>({
			url: getReviewsUrl(`/doctor/${doctorId}`),
			method: 'GET',
		});
	},
};
