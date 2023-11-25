import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export enum WidgetSizeEnum {
	'1x1' = 'col-span-1 row-span-1 w-full h-[182px]',
	'1x2' = 'row-span-2',
	'1x4' = 'w-full row-span-4',
	'2x2' = 'col-span-2 row-span-2',
	'3x4' = 'col-span-3 row-span-4',
	'2x4' = 'col-span-2 row-span-4',
}

interface IWidget extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	size?: WidgetSizeEnum;
	title: string;
	prevNextHandler?: (direction: 'backward' | 'forward') => void;
}
export default function Widget({
	size = WidgetSizeEnum['1x1'],
	children,
	className,
	prevNextHandler,
	title,
}: IWidget) {
	return (
		<div
			className={clsx(
				size,
				className,
				'animate-opacity rounded-xl bg-bg-light py-6'
			)}
		>
			<div className="mx-6 flex  justify-between text-lg">
				<div className="">{title}</div>
				{prevNextHandler && (
					<div className="flex gap-2">
						<button
							onClick={() => prevNextHandler('backward')}
							className="hover:text-white"
						>
							<IoIosArrowBack />
						</button>
						<button
							onClick={() => prevNextHandler('forward')}
							className="hover:text-white"
						>
							<IoIosArrowForward />
						</button>
					</div>
				)}
			</div>
			{children}
		</div>
	);
}
