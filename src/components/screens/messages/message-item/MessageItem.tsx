import { IMessage } from '@/types/message.interface';
import clsx from 'clsx';
import Image from 'next/image';

interface IMessageItem {
	isAuthor: boolean;
	message: IMessage;
}

export function MessageItem({ isAuthor, message }: IMessageItem) {
	return (
		<li
			className={clsx('flex  animate-opacity p-2.5', {
				['justify-end']: isAuthor,
			})}
			key={message.id}
		>
			<div className={clsx('flex  flex-col')}>
				<div
					className={clsx('mb-2 text-end text-xss text-inactive', {
						['!text-start']: !isAuthor,
					})}
				>
					{new Date(message.createdAt).toLocaleString('en', {
						year: 'numeric',
						month: 'short',
						day: '2-digit',
						hour12: true,
						hour: '2-digit',
						minute: '2-digit',
					})}
				</div>
				{message.text && (
					<div className="max-w-xl rounded-lg bg-background px-4 py-2.5">
						{message.text}
					</div>
				)}
				{message.image && (
					<Image src={message.image} alt="image" width={300} height={200} />
				)}
			</div>
		</li>
	);
}
