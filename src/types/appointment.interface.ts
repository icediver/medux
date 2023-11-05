import { IUser } from './user.interface';

export interface IAppointment {
	id: number;
	createdAt?: string;
	updatedAt?: string;
	description: string;
	title: string;
	date: string;
	type?: string;
	doctor?: IUser;
	patient?: IUser;
	time: ITimeAppointment;
	category: ICategoryAppointment;
}
export interface ITimeAppointment {
	id: number;
	time: string;
}
export interface ICategoryAppointment {
	id: number;
	name: string;
}
