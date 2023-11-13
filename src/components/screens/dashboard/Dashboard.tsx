'use client';

import Button from '@/components/ui/button/Button';
import Tabs from '@/components/ui/tabs/Tabs';
import BloodTestSpeedometer from '@/components/widgets/blood-test-speedometer/BloodTestSpeedometer';
import Cardiogram from '@/components/widgets/cardiogram/Cardiogram';
import ConfirmDiagnoses from '@/components/widgets/confirm-diagnoses/ConfirmDiagnoses';
import LaboratoryTestsWidget from '@/components/widgets/laboratory-tests-widget/LaboratoryTestsWidget';
import LocationOfPain from '@/components/widgets/location-of-pain/LocationOfPain';
import NextPatientWidget from '@/components/widgets/next-patient-widget/NextPatientWidget';
import OveralAppointment from '@/components/widgets/overal-apointment/OveralAppointment';
import PatientPace from '@/components/widgets/patien-pace/PatientPace';
import RecentQuestions from '@/components/widgets/recent-questions/RecentQuestions';
import UpcommingAppointments from '@/components/widgets/upcomming-appointments/UpcommingAppointments';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { use, useState } from 'react';

interface IDashboard {}
export default function Dashboard({}: IDashboard) {
	const [activeTab, setActiveTab] = useState(0);

	const { profile } = useProfile();
	const { user } = useAuth();
	const role = user?.role === RoleTypeEnum.DOCTOR ? 'Doctor' : 'Patient';
	return (
		<>
			<div className="mb-5 text-1.75xl">{`Basic ${role} Dashboard`}</div>
			<div className="grid h-[800px] grid-cols-3 grid-rows-4 gap-6 ">
				{activeTab === 0 && (
					<>
						<NextPatientWidget />
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
					</>
				)}
				{activeTab === 1 && (
					<>
						<Cardiogram />
						<LocationOfPain />
						<NextPatientWidget />
						<BloodTestSpeedometer />
						<PatientPace />
					</>
				)}
			</div>
			<Tabs
				values={['1', '2']}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				variant="third"
				className="mx-auto mt-4 !w-20  gap-0"
			/>
		</>
	);
}
