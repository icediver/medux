'use client';

import NextButton from '@/components/ui/next-button/NextButton';
import Tabs from '@/components/ui/tabs/Tabs';
import { useState } from 'react';

interface IPatientsHeader {}
export default function PatientsHeader({}: IPatientsHeader) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="flex w-full justify-between">
			<Tabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				variant="third"
				values={['All', 'Men', 'Woomen']}
				className="!w-[300px]"
			/>
			<NextButton variant="month" />
		</div>
	);
}
