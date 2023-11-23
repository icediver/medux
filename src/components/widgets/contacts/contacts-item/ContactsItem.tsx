import { ChatsService } from '@/services/chat.service';
import { IUser } from '@/types/user.interface';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';

interface IContactsItem {
	user: IUser;
	isActive: boolean;
}

export function ContactsItem({ user, isActive }: IContactsItem) {
	const { data: count } = useQuery({
		queryKey: ['get count', user],
		queryFn: async () => {
			const chat = await ChatsService.getChat(user.id);
			const countMessages = await ChatsService.getCount(chat.data.id);
			return countMessages;
		},
		select: ({ data }) => data,
	});

	return (
		<div
			className={clsx(
				'flex w-full animate-opacity items-center justify-between p-5',
				{
					['rounded-lg bg-message-border']: isActive,
				}
			)}
		>
			<div className="flex">
				<div className="relative h-10 w-10 overflow-hidden rounded-lg">
					<Image
						fill
						src={user.avatarPath}
						alt="avatar"
						// width={80}
						// height={80}
						sizes="100%"
						className="object-cover"
					/>
				</div>
				<div className="px-5">
					<div>{user.name}</div>
					<div className="text-start text-xs">Last Messages</div>
				</div>
			</div>
			<div className="flex h-6 w-6 items-center justify-center rounded-full bg-messages text-xs text-emergency">
				{count}
			</div>
		</div>
	);
}
