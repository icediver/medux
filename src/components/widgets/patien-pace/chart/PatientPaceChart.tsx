import { useThemeObserver } from '@/hooks/useThemeObserver';
import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Legend } from 'recharts';

const data = [
	{
		name: 'page 1',
		np: 80,
		rp: 150,
	},
	{
		name: 'page a',
		np: 120,
		rp: 300,
	},
	{
		name: 'Page B',
		np: 280,
		rp: 109,
	},
	{
		name: 'Page C',
		np: 100,
		rp: 240,
	},
	{
		name: 'Page D',
		np: 208,
		rp: 100,
	},
	{
		name: 'Page E',
		np: 89,
		rp: 320,
	},
	{
		name: 'Page F',
		np: 169,
		rp: 240,
	},
];

export default function PatientPaceChart() {
	const { isDarkMode } = useThemeObserver();

	return (
		<ResponsiveContainer width="100%" height="100%" className={'text-xs'}>
			<AreaChart
				width={200}
				height={60}
				data={data}
				margin={{
					top: 5,
					right: 0,
					left: 0,
					bottom: 5,
				}}
			>
				<Area
					type="monotone"
					dataKey="rp"
					stroke="#7ED321"
					strokeWidth={3}
					fill="none"
					name="NEW PATIENTS"
				/>

				<Area
					type="monotone"
					dataKey="np"
					stroke="#29E7CD"
					strokeWidth={3}
					name="RETURN PATIENTS"
					// fill={css}
					fill="url(#splitColor)"
				/>

				<defs>
					<linearGradient id="splitColor" gradientTransform="rotate(90)">
						<stop offset="0%" stopColor={isDarkMode ? '#29E7CD' : '#FFFFFF'} />
						<stop
							offset="100%"
							stopColor={isDarkMode ? 'var(--bg-light)' : '#FFFFFF'}
						/>
					</linearGradient>
				</defs>
				<Legend iconSize={20} />
			</AreaChart>
		</ResponsiveContainer>
	);
}
