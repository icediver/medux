import { IWeekDay } from "@/helpers/date.helper";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IWeek {
  week: IWeekDay[];
  setCurrentDay: Dispatch<SetStateAction<Date>>;
  forwardBackwardHandler: (direction: "forward" | "backward") => void;
}
export default function Week({
  week,
  setCurrentDay,
  forwardBackwardHandler,
}: IWeek) {
  return (
    <div className="flex w-full h-[100px] justify-between items-center bg-background rounded-lg px-2">
      <button
        className="mx-1"
        onClick={() => forwardBackwardHandler("backward")}
      >
        <IoIosArrowBack />
      </button>
      <ul className="flex justify-between w-full ">
        {week.map((weekday) => (
          <li
            key={weekday.day}
            onClick={() => setCurrentDay(weekday.date)}
            className={clsx(
              "w-11 h-16 flex flex-col justify-between items-center py-2.5 cursor-pointer",
              { ["bg-bg-light rounded-lg"]: weekday.selected },
            )}
          >
            <div className="text-primary">{weekday.day}</div>
            <div className="text-[0.5rem] uppercase">{weekday.weekday}</div>
          </li>
        ))}
      </ul>

      <button
        className="mx-1 "
        onClick={() => forwardBackwardHandler("forward")}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
