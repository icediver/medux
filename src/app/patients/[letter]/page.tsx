import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { UserService } from '@/services/user.service';
import { RoleTypeEnum } from '@/types/user.interface';
import Patients from '@/components/screens/patients/Patients';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
};
export async function generateStaticParams() {
	const patients = await UserService.getAll({ role: RoleTypeEnum.PATIENT });
	const params = patients.users.map((user) => ({
		letter: user.name[0].toLowerCase(),
	}));

	return params;
}
async function getData(letter: string) {
	const res = await UserService.getAll({
		role: RoleTypeEnum.PATIENT,
		letter,
	});

	return res;
}

export default async function Page({ params }: { params: { letter: string } }) {
	const { letter } = params;
	const data = await getData(letter);

	// ...
	return (
		<>
			<Link
				href="/patients"
				className="m-5 flex h-10 w-10 items-center justify-center rounded-lg bg-patient-item hover:text-emergency-border"
			>
				{letter.toUpperCase()}
			</Link>
			<Patients patients={data.users} />
		</>
	);
}

export const dynamicParams = false;
