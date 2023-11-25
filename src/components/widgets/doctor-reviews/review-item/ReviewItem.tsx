import { IReview } from '@/types/review.interface';
import { Rating } from '../../doctors-rating/doctors-rating-item/rating/Rating';
import clsx from 'clsx';
import styles from './ReviewItem.module.scss';

export function ReviewItem({
	id,
	text,
	title,
	rating,
	user,
	createdAt,
}: IReview) {
	return (
		<li className="my-5 animate-opacity">
			<div className="mb-5">{title}</div>
			<div
				className={clsx('relative rounded-lg bg-background p-5', styles.review)}
			>
				<div className="">{text}</div>
				<div className="my-5 text-xs">{`Published: ${new Date(
					createdAt
				).toLocaleString('sv')}`}</div>
				<Rating isReview rating={rating} />
			</div>
		</li>
	);
}
