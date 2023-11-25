'use client';

import NextButton from '@/components/ui/next-button/NextButton';
import Tabs from '@/components/ui/tabs/Tabs';
import { useState } from 'react';

export default function DoctorsHeader() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="flex w-full justify-between">
			<NextButton variant="month" />

			<Tabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				variant="third"
				values={['All', 'Men', 'Woomen']}
				className="!w-[300px]"
			/>
		</div>
	);
}
