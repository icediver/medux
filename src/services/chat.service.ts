import { getChatsUrl } from '@/config/api.config';
import { instance } from '@/helpers/api/api.interceptor';
import { IChat, IDayMessages } from '@/types/message.interface';

export const ChatsService = {
	//--------------------Read--------------------------//

	async getChat(userToId: number) {
		return instance<IChat>({
			url: getChatsUrl('/'),
			method: 'POST',
			data: { userToId },
		});
	},
	async getCount(chatId: number) {
		return instance<number>({
			url: getChatsUrl(`/count/${chatId}`),
			method: 'GET',
		});
	},
};
