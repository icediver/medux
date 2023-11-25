import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Reviews } from '@/components/screens/reviews/Reviews';
import { UserService } from '@/services/user.service';
import { RoleTypeEnum } from '@/types/user.interface';
import { ReviewService } from '@/services/review.service';

export const metadata: Metadata = {
	title: 'Reviews',
	...NO_INDEX_PAGE,
};
async function getData() {
	const res = await UserService.getAll({
		role: RoleTypeEnum.DOCTOR,
	});

	for await (const user of res.users) {
		const rating = await ReviewService.getDoctorRating(user.id);
		user.rating = rating.data.rating;
	}

	return res.users;
}

export default async function ReviewsPage() {
	const doctors = await getData();
	return <Reviews doctors={doctors} />;
}
