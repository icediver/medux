import { useEffect, useState } from 'react';

export default function CurrentTimeLine() {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		const minute = setInterval(() => setDateState(new Date()), 60000);
		return () => clearInterval(minute);
	}, []);
	const procent =
		(((dateState.getHours() - 9) * 60 + dateState.getMinutes()) / 1080) * 100;

	const offset = (procent * 18 * 40 * 2) / 100 + 18;
	const labelTime = dateState.toLocaleString('ru-Ru', {
		hour: '2-digit',
		minute: '2-digit',
	});

	if (dateState.getHours() > 17 || dateState.getHours() < 9) return <></>;
	return (
		<div
			className="absolute z-20 h-0.5 w-full bg-primary"
			style={{ top: `${offset}px` }}
		>
			<div className="ml-3 w-12 -translate-y-1/2 rounded-lg bg-primary px-1  text-center text-xs">
				{labelTime}
			</div>
		</div>
	);
}
