import { useState } from 'react';
import Widget, { WidgetSizeEnum } from '../widget/Widget';
import CheckedButton from '@/components/ui/checked-button/CheckedButton';
import Message, { IMessage } from '@/components/ui/message/Message';
import { messages } from '../data/data';

export default function RecentQuestions() {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<Widget
			size={WidgetSizeEnum['1x2']}
			title="Recent questions"
			className="px-1"
		>
			<ul className="mt-4 flex h-10 w-full items-center gap-2 rounded-lg bg-background px-5">
				<CheckedButton
					isChecked={activeTab === 0}
					variant="second"
					onClick={() => setActiveTab(0)}
				>
					All
				</CheckedButton>
				<CheckedButton
					isChecked={activeTab === 1}
					variant="second"
					onClick={() => setActiveTab(1)}
				>
					Unread
				</CheckedButton>
				<CheckedButton
					isChecked={activeTab === 2}
					variant="second"
					onClick={() => setActiveTab(2)}
				>
					New
				</CheckedButton>
			</ul>
			<ul className="px-6">
				{messages.map((message) => (
					<Message
						key={message.textMessage}
						textMessage={message.textMessage}
						createdAt={message.createdAt}
					/>
				))}
			</ul>
		</Widget>
	);
}
