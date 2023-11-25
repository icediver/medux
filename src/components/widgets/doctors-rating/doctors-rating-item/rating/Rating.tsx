import clsx from 'clsx';

interface IRating {
	rating?: number;
	isReview?: boolean;
}

export function Rating({ rating = 0, isReview = false }: IRating) {
	return (
		<div>
			<ul className="flex gap-1">
				{[...Array(5)].map((_, index) => (
					<li key={index}>
						<div
							className={clsx('h-1 w-4 rounded-lg border', {
								['border-rating bg-rating']: index + 1 <= Math.trunc(rating),
							})}
						/>
					</li>
				))}
			</ul>
			{!isReview && (
				<div className="mt-3 text-start text-sm">{`Rating ${
					rating?.toFixed(2) || 0
				}`}</div>
			)}
		</div>
	);
}
