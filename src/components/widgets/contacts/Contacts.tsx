import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Widget, { WidgetSizeEnum } from '../widget/Widget';
import Tabs from '@/components/ui/tabs/Tabs';
import { IUser, RoleTypeEnum } from '@/types/user.interface';
import { ContactsItem } from './contacts-item/ContactsItem';
import { useConstacts } from './useConstacts';

export interface IContacts {
	activeUser: IUser;
	setActiveUser: Dispatch<SetStateAction<IUser>>;
}
export default function Contacts({ activeUser, setActiveUser }: IContacts) {
	const [activeTab, setActiveTab] = useState(0);
	const roles = [RoleTypeEnum.PATIENT, RoleTypeEnum.DOCTOR];
	const { users, isLoading } = useConstacts({ setActiveUser });

	return (
		<Widget size={WidgetSizeEnum['1x4']} title="" className="py-5">
			<div className="border-b border-b-message-border pb-5">
				<Tabs
					values={['Patients', 'Doctors']}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					variant="third"
					className="mx-auto !w-full gap-0 px-6"
				/>
			</div>
			{isLoading && <div>Is loading</div>}
			{users
				?.filter((user) => user.role === roles[activeTab])
				.map((user) => {
					return (
						<button
							onClick={() => setActiveUser(user)}
							className="block w-full border-b border-b-message-border"
							key={user.name + user.id}
						>
							<ContactsItem user={user} isActive={activeUser.id === user.id} />
						</button>
					);
				})}
		</Widget>
	);
}
