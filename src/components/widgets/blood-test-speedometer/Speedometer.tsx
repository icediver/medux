import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface IData {
	name: string;
	value: number;
	color: string;
}

const RADIAN = Math.PI / 180;
const data: IData[] = [
	{ name: 'A', value: 5, color: '#19dbb8' },
	{ name: 'B', value: 5, color: '#2ed7a7' },
	{ name: 'C', value: 5, color: '#3fd295' },
	{ name: 'D', value: 5, color: '#4fcd83' },
	{ name: 'E', value: 5, color: '#5dc770' },
	{ name: 'F', value: 5, color: '#6ac25e' },
	{ name: 'G', value: 5, color: '#76bc4b' },
	{ name: 'H', value: 5, color: '#82b538' },
	{ name: 'I', value: 5, color: '#8dae22' },
	{ name: 'J', value: 5, color: '#98a601' },
	{ name: 'K', value: 5, color: '#a39e00' },
	{ name: 'L', value: 5, color: '#ad9500' },
	{ name: 'M', value: 5, color: '#b88c00' },
	{ name: 'N', value: 5, color: '#c18100' },
	{ name: 'O', value: 5, color: '#cb7600' },
	{ name: 'P', value: 5, color: '#d36900' },
	{ name: 'Q', value: 5, color: '#db5a00' },
	{ name: 'R', value: 5, color: '#e24900' },
	{ name: 'S', value: 5, color: '#e83313' },
	{ name: 'T', value: 5, color: '#ed0824' },
];

const needle = (
	value: number,
	data: IData[],
	cx: number,
	cy: number,
	iR: number,
	oR: number,
	color: string
) => {
	let total = 0;
	data.forEach((v) => {
		total += v.value;
	});
	const ang = 180.0 * (1 - value / total);
	const length = (iR + 2 * oR) / 3;
	const sin = Math.sin(-RADIAN * ang);
	const cos = Math.cos(-RADIAN * ang);
	const r = 5;
	const x0 = cx + 5;
	const y0 = cy + 5;
	const xba = x0 + r * sin;
	const yba = y0 - r * cos;
	const xbb = x0 - r * sin;
	const ybb = y0 + r * cos;
	const xp = x0 + length * cos;
	const yp = y0 + length * sin;

	return [
		<circle
			cx={x0}
			cy={y0}
			r={r}
			fill={color}
			stroke={color}
			key={'circleNeedle'}
		/>,
		<path
			d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
			stroke="#none"
			fill={color}
			key={'pathNeedle'}
		/>,
	];
};

interface ISpeedometer {
	value: number;
}

export default function Speedometer({ value }: ISpeedometer) {
	const cx = 150;
	const cy = 150;
	// const iR = 50;
	const oR = 125;

	return (
		<PieChart width={300} height={300}>
			<Pie
				dataKey="value"
				startAngle={225}
				endAngle={-45}
				data={data}
				cx={cx}
				cy={cy}
				innerRadius={oR}
				outerRadius={oR}
				fill="none"
				stroke="none"
				className="p-0"
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						stroke={entry.color}
						strokeWidth={35}
						strokeDasharray={'0.8%'}
					/>
				))}
			</Pie>
			{needle(value, data, cx, cy, oR, oR, '#414D55')}
		</PieChart>
	);
}
