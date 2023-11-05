'use client';
import { useAuth } from '@/hooks/useAuth';

import { RoleTypeEnum } from '@/types/user.interface';
import { DoctorAppointments } from './doctor-appointments/DoctorAppointments';

interface IAppointments {}

export function Appointments({}: IAppointments) {
	const { user } = useAuth();
	return <DoctorAppointments variant={user?.role} />;
}
