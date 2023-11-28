import { IUser } from '@/types/user.interface';
import Image from 'next/image';
import Link from 'next/link';

interface ISearchList {
	users: IUser[];
}
export default function SearchList({ users }: ISearchList) {
	return (
		<ul className="absolute left-0 top-11  z-10 w-full rounded-b-lg border border-emergency   px-4 pt-5 transparent-panel">
			{users.map((user) => (
				<li key={user.email} className="mb-4 animate-opacity">
					<Link href={'/'} className="grid grid-cols-2 items-center">
						<div className=" flex items-center">
							<div className="relative h-10 w-10">
								<Image
									src={user.avatarPath}
									alt="avatar"
									className="rounded-lg object-cover"
									fill
									sizes="100px"
								/>
							</div>
							<span className="ml-3">{user.name}</span>
						</div>
						<div className="items-center">{user?.speciality}</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
