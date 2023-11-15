import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { UserService } from '@/services/user.service';
import { RoleTypeEnum } from '@/types/user.interface';
import Patients from '@/components/screens/patients/Patients';

export const metadata: Metadata = {
	title: 'Patients',
	...NO_INDEX_PAGE,
};

async function getData() {
	const res = await UserService.getAll({
		role: RoleTypeEnum.PATIENT,
	});

	return res;
}

export default async function PatientsPage() {
	const data = await getData();
	return <Patients patients={data.users} />;
}
