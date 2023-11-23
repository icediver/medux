import { IUser } from '@/types/user.interface';
import Widget from '../widget/Widget';
import { BsCheck, BsLink45Deg, BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';
import CheckedButton from '@/components/ui/checked-button/CheckedButton';
import { useState } from 'react';

interface INextPatientWidget {
	user: IUser;
	type: string;
	isFinished: boolean;
}
export default function LaboratoryTestsWidget({
	user,
	type,
	isFinished,
}: INextPatientWidget) {
	const [isChecked, setIsChecked] = useState(0);
	return (
		<Widget title="Laboratory tests" prevNextHandler={() => {}}>
			<div className="mx-6">
				{' '}
				<div className="mt-3 flex flex-col ">
					<div>
						<Link href={'#'} className="flex w-full justify-start gap-2.5">
							<BsLink45Deg />
							<div className="text-sm text-primary">{user.name}</div>
						</Link>
					</div>
					<div className="flex items-start justify-start">
						<div>
							<span className="leading-none"> {type}</span>
							{isFinished && (
								<div className="inline-block">
									<div className="ml-2 flex h-3 w-3 items-center justify-center rounded-full bg-background">
										<div className="h-2 w-2 rounded-full bg-green-600"></div>
									</div>
								</div>
							)}
						</div>
						<button className="w-10 hover:text-white">
							<BsThreeDots className="ml-auto" />
						</button>
					</div>
				</div>
				<footer className="flex h-10 items-center justify-between">
					<CheckedButton
						isChecked={isChecked === 0}
						onClick={() => setIsChecked(0)}
					>
						Details
					</CheckedButton>
					<CheckedButton
						isChecked={isChecked === 1}
						onClick={() => setIsChecked(1)}
					>
						Contact Patient
					</CheckedButton>
					<CheckedButton
						onClick={() => setIsChecked(2)}
						isChecked={isChecked === 2}
						Icon={BsCheck}
					>
						Achive
					</CheckedButton>
				</footer>
			</div>
		</Widget>
	);
}
