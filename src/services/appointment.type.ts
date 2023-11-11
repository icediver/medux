import { IAppointment } from '@/types/appointment.interface';

export interface ICreateAppointment {
	description: string;
	type: string;
	date: string;
	timeId: number;
	categoryId: number;
	userId: number;
}

export type TypeAppointmentsFilter = {
	start: string;
	end: string;
};

export interface IAppointmentsByDate {
	date: string;
	appointments: IAppointment[];
}
