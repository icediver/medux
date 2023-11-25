import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Messages from '@/components/screens/messages/Messages';
import { UserService } from '@/services/user.service';
import { RoleTypeEnum } from '@/types/user.interface';

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
};
async function getData() {
	const res = await UserService.getAll({
		role: RoleTypeEnum.DOCTOR,
	});

	return res.users;
}

export default async function MessagesPage() {
	const users = await getData();
	return <Messages />;
}
