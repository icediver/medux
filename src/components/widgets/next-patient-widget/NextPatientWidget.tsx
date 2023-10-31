import { IUser } from "@/types/user.interface";
import Widget from "../widget/Widget";
import { IAppointment } from "@/types/appointment.interface";
import Appointment from "@/components/ui/appointment/Appointment";

interface INextPatientWidget {
  appointment: IAppointment;
}
export default function NextPatientWidget({ appointment }: INextPatientWidget) {
  return (
    <Widget title="Next patient" size="base" prevNextHandler={() => {}}>
      <Appointment appointment={appointment} />
    </Widget>
  );
}
