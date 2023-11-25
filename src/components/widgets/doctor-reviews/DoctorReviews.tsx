import { useQuery } from '@tanstack/react-query';
import Widget, { WidgetSizeEnum } from '../widget/Widget';
import { ReviewService } from '@/services/review.service';
import { ReviewItem } from './review-item/ReviewItem';

export interface IDoctorReviews {
	doctorId: number;
}

export function DoctorReviews({ doctorId }: IDoctorReviews) {
	const { data } = useQuery({
		queryKey: ['get reviews', doctorId],
		queryFn: () => ReviewService.getReviewsByDoctor(doctorId),
		select: ({ data }) => data,
	});
	return (
		<Widget size={WidgetSizeEnum['2x4']} title="">
			<>
				<div className="text-lg">Reviews</div>
				<ul className="h-[725px] overflow-auto scrolbar-hidden">
					{data &&
						data?.map((review) => <ReviewItem {...review} key={review.id} />)}
				</ul>
			</>
		</Widget>
	);
}
