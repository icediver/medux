import { IUser } from '@/types/user.interface';

export interface IMessage {
	id: number;
	createdAt: string;
	text?: string;
	image?: string;
	userFromId: number;
	userToId: number;
}

export interface IMessageFields {
	text?: string;
	image?: string;
	userToId: number | undefined;
	chatId: number;
	userFromId: number | undefined;
}

export interface IDeleteMessageFields extends Pick<IMessageFields, 'chatId'> {
	messageId: number;
}

export interface IDayMessages {
	// id: number;
	[date: string]: IMessage[];
}
export interface IChat {
	id: number;
	messages: IDayMessages[];
}
