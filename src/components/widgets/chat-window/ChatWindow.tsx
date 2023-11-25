import Widget, { WidgetSizeEnum } from '../widget/Widget';
import { IUser } from '@/types/user.interface';
import UserItem from '@/components/ui/user-item/UserItem';
import { useChat } from '@/hooks/useChat';
import { useAuth } from '@/hooks/useAuth';
import {
	useState,
	KeyboardEvent,
	MouseEvent,
	useEffect,
	useRef,
	useLayoutEffect,
	Dispatch,
	SetStateAction,
} from 'react';
import { MessageItem } from '@/components/screens/messages/message-item/MessageItem';
import { PiTelegramLogo } from 'react-icons/pi';
import { useQuery } from '@tanstack/react-query';
import { ChatsService } from '@/services/chat.service';
import { IDayMessages } from '@/types/message.interface';
import { useChatById } from './useChatById';

interface IChatWindow {
	userTo: IUser;
}

export function ChatWindow({ userTo }: IChatWindow) {
	// const { data } = useQuery({
	// 	queryKey: ['get chat id', userTo],
	// 	queryFn: async () => {
	// 		const chat = await ChatsService.getChat(userTo.id);
	// 		return chat;
	// 	},
	// 	select: ({ data }) => data,
	// });
	// const { chat, sendMessage, removeMessage, isConnected } = useChat(data?.id);
	const { chatId, sendMessage, removeMessage, isConnected, chat } = useChatById(
		userTo.id
	);
	const [message, setMessage] = useState('');
	const { user } = useAuth();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	};
	useEffect(() => {
		scrollToBottom();
	}, [chat.messages]);

	const addMessageHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			sendMessage({
				chatId: chat.id,
				text: message,
				userFromId: user?.id,
				userToId: userTo?.id,
			});
			setMessage('');
		}
	};
	const removeMessageHandler = async (messageId: number) => {
		removeMessage({ chatId: Number(chatId), messageId });
		// removeMessage({ chatId: Number(data?.id), messageId });
	};
	const clickMessageHandler = async () => {
		sendMessage({
			chatId: chat.id,
			text: message,
			userFromId: user?.id,
			userToId: userTo?.id,
		});
		setMessage('');
	};
	return (
		<Widget
			size={WidgetSizeEnum['2x4']}
			title=""
			className="overflow-hidden !p-0"
		>
			<UserItem patient={userTo} variant="chat" />
			<div className="flex h-[720px] w-full flex-col  justify-between">
				<div className="h-[600px] overflow-auto scrolbar-hidden">
					{!!chat?.messages?.length && (
						<>
							{chat.messages.map((day: IDayMessages) => {
								const date = Object.keys(day)[0];
								return (
									<ul
										className="relative my-2 border-t border-dashed border-t-message-border"
										key={date}
									>
										<div className="absolute -top-2 left-5 text-xs">
											{date === new Date().toLocaleDateString('sv')
												? 'Today'
												: date}
										</div>
										{day[date].map((message) => (
											<MessageItem
												message={message}
												isAuthor={message.userFromId === user?.id}
												key={message.id + message.createdAt}
											/>
										))}
									</ul>
								);
							})}
							<div ref={messagesEndRef} />
						</>
					)}
				</div>
				<div className="relative flex h-20 w-full items-center justify-between border-t-2 border-t-message-border">
					<input
						type="text"
						className=" mx-5 h-10 w-4/5 bg-bg-light px-10 placeholder-inactive focus:outline-none"
						placeholder={'Start typing here'}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyPress={addMessageHandler}
					/>
					<button
						className="active:translate-y-1 "
						onClick={clickMessageHandler}
					>
						<PiTelegramLogo size={20} className={'m-5 fill-inactive'} />
					</button>
				</div>
			</div>
		</Widget>
	);
}
