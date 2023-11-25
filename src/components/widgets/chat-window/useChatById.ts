import { useChat } from '@/hooks/useChat';
import { ChatsService } from '@/services/chat.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useChatById = (userToId: number) => {
	const [chatId, setChatId] = useState(1);
	const { data, isSuccess } = useQuery({
		queryKey: ['get chat id', userToId],
		queryFn: async () => {
			const chat = await ChatsService.getChat(userToId);
			return chat;
		},
		select: ({ data }) => data,
	});

	useEffect(() => {
		if (isSuccess) setChatId(data.id);
	}, [data]);
	const chat = useChat(chatId);

	return { ...chat, chatId };
};
