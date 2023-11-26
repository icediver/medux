import Tabs from '@/components/ui/tabs/Tabs';
import { useState } from 'react';
import SelectDepartment from './select-department/SelectDepartment';

interface IDoctorsHeader {
	selectDepartmentHandler: (department: string) => void;
}

export default function DoctorsHeader({
	selectDepartmentHandler,
}: IDoctorsHeader) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="flex w-full justify-between">
			<SelectDepartment selectDepartmentHandler={selectDepartmentHandler} />
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
