import { getAppointmentsUrl } from '@/config/api.config';
import { instance } from '@/helpers/api/api.interceptor';
import { IAppointment } from '@/types/appointment.interface';
import {
	IAppointmentsByDate,
	ICreateAppointment,
	TypeAppointmentsFilter,
} from './appointment.type';

export const AppointmentService = {
	//--------------------Create------------------------//

	async createAppointment(data: ICreateAppointment) {
		return instance<IAppointment>({
			url: getAppointmentsUrl('/'),
			method: 'POST',
			data,
		});
	},

	//--------------------Read--------------------------//

	async getAllAppointments(queryData = {} as TypeAppointmentsFilter) {
		return instance<IAppointmentsByDate[]>({
			url: getAppointmentsUrl('/'),
			method: 'GET',
			params: queryData,
		});
	},
	async getNext(queryData = {} as TypeAppointmentsFilter) {
		return instance<IAppointment>({
			url: getAppointmentsUrl('/next'),
			method: 'GET',
		});
	},

	async getAppointmentsByDate(date: string) {
		return instance<IAppointment[]>({
			url: getAppointmentsUrl(`/date/${date}`),
			method: 'GET',
		});
	},
};
