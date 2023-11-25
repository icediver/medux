import { useAuth } from '@/hooks/useAuth';
import { UserService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { IContacts } from './Contacts';
import { IUser } from '@/types/user.interface';

interface IUseContacts {
	setActiveUser: Dispatch<SetStateAction<IUser>>;
}

export const useConstacts = ({ setActiveUser }: IUseContacts) => {
	const { user: currentUser } = useAuth();

	const {
		data: users,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['get all users'],
		queryFn: () => UserService.getAll(),
		select: ({ users }) => users.filter((user) => user.id !== currentUser?.id),
	});

	useEffect(() => {
		if (!!users?.length) {
			setActiveUser(users[0]);
		}
	}, [isSuccess]);

	console.log(users);

	return { users, isLoading };
};
