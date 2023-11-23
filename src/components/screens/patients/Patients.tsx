import { IUser } from '@/types/user.interface';
import UserItem from '@/components/ui/user-item/UserItem';

interface IPatients {
	patients: IUser[];
}
export default function Patients({ patients }: IPatients) {
	return (
		<ul className="animate-opacity">
			{!!patients.length &&
				patients.map((patient) => (
					<UserItem patient={patient} key={patient.id} />
				))}
		</ul>
	);
}
