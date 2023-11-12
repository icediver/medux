'use client';

import { IData } from './Speedometer';

const RADIAN = Math.PI / 180;
interface INeedle {
	value: number;
	cx: number;
	cy: number;
	iR: number;
	oR: number;
	color: string;
}
export default function Needle({ value, cx, cy, iR, oR, color }: INeedle) {
	const needle = (props: INeedle) => {
		let total = 0;
		[...Array(20)].forEach((v) => {
			total += 5;
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
			<circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
			<path
				d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
				stroke="#none"
				fill={color}
			/>,
		];
	};
	console.log(
		needle({ value: 30, oR: 150, color: '#fff', iR: 150, cy: 100, cx: 100 })
	);
	return <div></div>;
}
