import Tabs from '@/components/ui/tabs/Tabs';
import Widget from '../widget/Widget';
import Men from '@/assets/images/Men.svg';
import { useState } from 'react';
import Button from '@/components/ui/button/Button';

interface ILocationOfPain {}
export default function LocationOfPain({}: ILocationOfPain) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<Widget size="lg" title="Location of pain">
			<Tabs
				values={['Male', 'Female']}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				variant="third"
				className="mx-auto mt-5 !w-[326px] gap-0"
			/>

			<Men className="mx-auto my-3" />
			<div className="flex w-full justify-center">
				<Button variant="third" className="mb-5 w-[326px]">
					Submit request
				</Button>
			</div>
		</Widget>
	);
}
