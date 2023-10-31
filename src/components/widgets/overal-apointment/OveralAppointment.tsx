import VerticalBar from "@/components/ui/vertical-bar/VerticalBar";
import Widget from "../widget/Widget";

const appointmenstInTime: { key: string; value: number }[] = [
  { key: "8:00", value: 30 },
  { key: "9:00", value: 50 },
  { key: "10:00", value: 90 },
  { key: "11:00", value: 30 },
  { key: "12:00", value: 50 },
  { key: "13:00", value: 90 },
  { key: "14:00", value: 30 },
  { key: "15:00", value: 50 },
  { key: "16:00", value: 90 },
];

interface IOveralAppointment {}
export default function OveralAppointment({}: IOveralAppointment) {
  return (
    <Widget title="Overal appointment">
      <div className="mx-6 flex gap-2.5">
        {appointmenstInTime.map((appointment) => {
          return (
            <VerticalBar
              time={appointment.key}
              value={appointment.value}
              key={appointment.key}
            />
          );
        })}
      </div>
    </Widget>
  );
}
