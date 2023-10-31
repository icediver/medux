import Appointment from "@/components/ui/appointment/Appointment";
import { appointments } from "../data/data";
import Widget from "../widget/Widget";
import { useProfile } from "@/hooks/useProfile";
import Week from "@/components/ui/week/Week";
import { useState } from "react";
import { getCurrentWeek } from "@/helpers/date.helper";

interface IUpcommingAppointments {}
export default function UpcommingAppointments({}: IUpcommingAppointments) {
  const [currentDay, setCurrentDay] = useState(new Date());
  const { profile } = useProfile();
  const doctor = { doctor: profile };
  const { week, months } = getCurrentWeek(currentDay);

  function forwardBackwardHandler(direction: "forward" | "backward") {
    if (direction === "forward") {
      setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 7)));
    } else
      setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 7)));
  }

  return (
    <Widget size="lg" title="Upcomming Appointments">
      <section className="px-1">
        <div className="mb-4 mx-5 text-primary text-sm underline decoration-dashed">
          {months}
        </div>
        <Week
          week={week}
          setCurrentDay={setCurrentDay}
          forwardBackwardHandler={forwardBackwardHandler}
        />
        {appointments.map((appointment, index) => {
          return (
            <Appointment
              key={index}
              appointment={{ ...appointment, ...doctor }}
              variant="lg"
            />
          );
        })}
      </section>
    </Widget>
  );
}
