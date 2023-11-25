'use client';
import clsx from 'clsx';
import { ReactElement } from 'react';
import PatientsHeader from '@/components/screens/patients/patients-header/PatientsHeader';
import { SearchDoctors } from '@/components/ui/search-doctors/SearchDoctors';
import { useSearchDoctors } from '@/hooks/useSearchDoctors';
import { IUser } from '@/types/user.interface';

export default function PatientsListLayout({
	children,
}: {
	children: ReactElement;
}) {
	return (
		<section className="animate-opacity">
			<div className="mb-5 text-1.75xl  capitalize">Patients List</div>
			<div className="col-row-4 col-span-3 h-[800px] overflow-hidden rounded-xl bg-bg-light ">
				<div className="h-[800px] overflow-auto scrolbar-hidden">
					{children}
				</div>
			</div>
		</section>
	);
}
