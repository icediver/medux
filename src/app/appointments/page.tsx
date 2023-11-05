import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Appointments } from '@/components/screens/appointments/Appointments';

export const metadata: Metadata = {
	title: 'Appoinments',
	...NO_INDEX_PAGE,
};

export default function Page() {
	return <Appointments />;
}
