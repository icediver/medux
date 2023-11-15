import Tabs from '@/components/ui/tabs/Tabs';
import Widget from '../widget/Widget';
import Men from '@/assets/images/Men.svg';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/Button';

interface ICoordinates {
	x: number;
	y: number;
}

interface ILocationOfPain {}
export default function LocationOfPain({}: ILocationOfPain) {
	const [activeTab, setActiveTab] = useState(0);
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const [locations, setLocations] = useState<ICoordinates[]>([
		{ x: 1389, y: 424 },
	]);

	function clickHandler(e: MouseEvent) {
		setLocations([...locations, { x: e.clientX, y: e.clientY }]);

		console.log(e.clientX, e.clientY, x, y);
	}
	const ref = useRef<HTMLDivElement>(null);
	const x = ref.current?.offsetLeft;
	const y = ref.current?.offsetTop;
	return (
		<Widget size="lg" title="Location of pain">
			<Tabs
				values={['Male', 'Female']}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				variant="third"
				className="mx-auto mt-5 !w-[326px] gap-0"
			/>

			<div ref={ref} className="mx-auto w-[300px]" onClick={clickHandler}>
				<Men className="mx-auto my-3" />
				{!!locations.length && (
					<ul className="opacity-40">
						{locations.map((location, index) => (
							<div
								className="absolute h-16 w-16 -translate-x-1/2 -translate-y-8 rounded-full border border-red-800 bg-sick-border"
								style={{
									top: `${location.y}px`,
									left: `${location.x}px`,
								}}
								key={coordinates.y + coordinates.x + index}
							/>
						))}
					</ul>
				)}
			</div>
			<div className="flex w-full justify-center">
				<Button variant="third" className="mb-5 w-[326px]">
					Submit request
				</Button>
			</div>
		</Widget>
	);
}
