import clsx from 'clsx';
import { ReactElement } from 'react';
import { generateStaticParams } from './[letter]/page';
import Link from 'next/link';
import PatientsHeader from '@/components/screens/patients/patients-header/PatientsHeader';

const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
export default async function PatientsListLayout({
	children,
}: {
	children: ReactElement;
}) {
	const available = await generateStaticParams().then((res) =>
		res.map((l) => l.letter)
	);
	console.log(available);

	return (
		<section className="animate-opacity">
			<div className="mb-5 text-1.75xl  capitalize">Patients List</div>
			<div className="col-row-4 col-span-3 h-[800px] rounded-xl bg-bg-light">
				<div className="flex h-20 items-center justify-between overflow-hidden px-4">
					<PatientsHeader />
				</div>
				<div
					className={clsx(
						'mx-px grid h-20 grid-cols-26 items-center justify-center gap-1 rounded-lg bg-background px-2'
					)}
				>
					{letters.map((letter) => (
						<Link
							href={`/patients/${letter}`}
							key={letter}
							className={clsx(
								'pointer-events-none w-full rounded-lg p-2 text-center capitalize',
								{
									['pointer-events-auto bg-bg-light text-primary']:
										available.some((l) => l === letter),
								}
							)}
						>
							{letter}
						</Link>
					))}
				</div>

				{children}
			</div>
		</section>
	);
}
