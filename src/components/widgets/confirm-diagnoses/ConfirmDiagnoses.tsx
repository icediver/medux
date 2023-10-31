import Widget from '../widget/Widget';
import Tabs from '@/components/ui/tabs/Tabs';
import { useState } from 'react';
import { confirmedDiagnoses } from '../data/data';
import HorizontalBar from '@/components/ui/horizontal-bar/HorizontalBar';

const colors = ['#FF715B', '#04E762', '#2662F0', '#6665DD', '#34D1BF'];

interface IConfirmDiagnoses {}
export default function ConfirmDiagnoses({}: IConfirmDiagnoses) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<Widget prevNextHandler={() => {}} title="Confirm diagnoses" size="md">
			<section className="mt-4 px-6">
				<Tabs
					values={['Year', 'Month', 'Week']}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					variant="third"
				/>
				{confirmedDiagnoses.map((diagnose, index) => (
					<HorizontalBar
						label={diagnose.diagnose}
						total={diagnose.total}
						value={diagnose.values[activeTab]}
						color={colors[index]}
						className="my-5"
					/>
				))}
			</section>
		</Widget>
	);
}
