'use client';

import ConfirmDiagnoses from '@/components/widgets/confirm-diagnoses/ConfirmDiagnoses';
import LaboratoryTestsWidget from '@/components/widgets/laboratory-tests-widget/LaboratoryTestsWidget';
import NextPatientWidget from '@/components/widgets/next-patient-widget/NextPatientWidget';
import OveralAppointment from '@/components/widgets/overal-apointment/OveralAppointment';
import PatientPace from '@/components/widgets/patien-pace/PatientPace';
import RecentQuestions from '@/components/widgets/recent-questions/RecentQuestions';
import UpcommingAppointments from '@/components/widgets/upcomming-appointments/UpcommingAppointments';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { use } from 'react';

interface IDashboard {}
export default function Dashboard({}: IDashboard) {
	const { profile } = useProfile();
	const { user } = useAuth();
	const role = user?.role === RoleTypeEnum.DOCTOR ? 'Doctor' : 'Patient';
	return (
		<>
			<div className="mb-5 text-1.75xl">{`Basic ${role} Dashboard`}</div>
			<div className="grid h-[800px] grid-cols-3 grid-rows-4 gap-6 ">
				<NextPatientWidget
					appointment={{
						title: 'USG + Consultation',
						date: '2023-10-27 13:06:33.329',
						doctor: profile,
					}}
				/>
				<LaboratoryTestsWidget
					isFinished={true}
					user={profile || ({} as IUser)}
					type={'Beta 2 Microglobulin (B2M) Tumor Marker Test'}
				/>
				<UpcommingAppointments />
				<OveralAppointment />
				<PatientPace />
				<RecentQuestions />
				<ConfirmDiagnoses />
			</div>
		</>
	);
}
