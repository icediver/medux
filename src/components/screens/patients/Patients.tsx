import { IUser } from '@/types/user.interface';
import PatientItem from './patient-item/PatientItem';

interface IPatients {
	patients: IUser[];
}
export default function Patients({ patients }: IPatients) {
	return (
		<ul className="animate-opacity">
			{!!patients.length &&
				patients.map((patient) => <PatientItem patient={patient} />)}
		</ul>
	);
}
