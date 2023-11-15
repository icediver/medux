import { convertDate } from '@/helpers/date.helper';
import Button from '../button/Button';
import { BiMessageDetail } from 'react-icons/bi';
import RoundedButton from '../rounded-button/RoundedButton';
import CheckedButton from '../checked-button/CheckedButton';

export interface IMessage {
	createdAt: string;
	textMessage: string;
}
export default function Message({ createdAt, textMessage }: IMessage) {
	return (
		<li className="mt-5 border-dashed border-white/20 first:border-b">
			<div className="text-xs">{convertDate(createdAt)}</div>
			<div className="flex justify-between">
				<div className="w-[262px]">{textMessage}</div>
				<RoundedButton variant="secondary" className="text-base">
					<BiMessageDetail />
				</RoundedButton>
			</div>
			<div className="mb-5 mt-4 flex">
				<CheckedButton isChecked={false}>Read more</CheckedButton>
				<CheckedButton isChecked={false}>Reply</CheckedButton>
			</div>
		</li>
	);
}
