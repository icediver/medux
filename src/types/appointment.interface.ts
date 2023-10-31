import { IUser } from "./user.interface";

export interface IAppointment {
  title: string;
  date: string;
  type?:
    | "emergency"
    | "examination"
    | "consultation"
    | "routine checkup"
    | "sick visit"
    | "laborotory screening"
    | "keeping pregnant";
  doctor?: IUser;
  patient?: IUser;
}
