import { IMessage } from "@/components/ui/message/Message";
import { IAppointment } from "@/types/appointment.interface";
import { IConfirmedDiagnose } from "@/types/diagnose.interface";

export const messages: IMessage[] = [
  {
    createdAt: "2023-10-07 13:06:33.329",
    textMessage: "Addiction blood bank bone marrow contagious disinfectants?",
  },
  {
    createdAt: "2023-10-27 13:06:33.329",
    textMessage:
      "Triggered asthma anesthesia blood type bone marrow cartilage ?",
  },
];

export const appointments: IAppointment[] = [
  {
    title: "Emergency appointment",
    date: "2023-10-27 13:06:33.329",
  },
  {
    title: "USG + Consultation",
    date: "2023-10-27 13:06:33.329",
  },
  {
    title: "Laboratory screening",
    date: "2023-10-27 13:06:33.329",
  },
  {
    title: "Keeping pregnant",
    date: "2023-10-27 13:06:33.329",
  },
  {
    title: "Primary doctor consultation",
    date: "2023-10-27 13:06:33.329",
  },
];

export const confirmedDiagnoses: IConfirmedDiagnose[] = [
  {
    diagnose: "cold",
    total: 751,
    currentYear: 648,
    currentMonth: 78,
    currentWeek: 15,

    values: [648, 78, 15],
  },
  {
    diagnose: "Fracture",
    total: 651,
    currentYear: 215,
    currentMonth: 18,
    currentWeek: 5,
    values: [215, 18, 5],
  },
  {
    diagnose: "Concussion",
    total: 120,
    currentYear: 84,
    currentMonth: 7,
    currentWeek: 1,
    values: [84, 7, 1],
  },
  {
    diagnose: "Heppatitis",
    total: 846,
    currentYear: 804,
    currentMonth: 74,
    currentWeek: 19,
    values: [804, 74, 19],
  },
  {
    diagnose: "Dermatitis",
    total: 901,
    currentYear: 451,
    currentMonth: 48,
    currentWeek: 23,
    values: [451, 48, 23],
  },
];
