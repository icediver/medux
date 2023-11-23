'use client';
import { ChatWindow } from '@/components/widgets/chat-window/ChatWindow';
import Contacts from '@/components/widgets/contacts/Contacts';
import { useAuth } from '@/hooks/useAuth';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { useState } from 'react';

interface IMessages {}
export default function Messages({}: IMessages) {
	const [activeUser, setActiveUser] = useState<IUser>({} as IUser);
	return (
		<>
			<div className="mb-5 bg-background text-1.75xl">{`Recent Talks`}</div>
			<div className="grid h-[800px] grid-cols-3 grid-rows-4 gap-6 ">
				<Contacts activeUser={activeUser} setActiveUser={setActiveUser} />
				<ChatWindow userTo={activeUser} />
			</div>
		</>
	);
}
