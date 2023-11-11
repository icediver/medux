import { IUser } from './user.interface';

export interface IAppointment {
	id: number;
	createdAt?: string;
	updatedAt?: string;
	time: ITimeSchedule;
	doctor: IUser;
	patient: IUser;
	type: string;
	description: string;
	category: IAppointmentCategory;
	date: string;
}

export interface IAppointmentCategory {
	id: number;
	name: string;
}

export interface ITimeSchedule {
	id: number;
	time: string;
}
