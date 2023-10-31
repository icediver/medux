import { IAppointment } from "@/types/appointment.interface";
import { IUser } from "@/types/user.interface";
import Image from "next/image";
import RoundedButton from "../rounded-button/RoundedButton";
import { AiOutlinePhone } from "react-icons/ai";
import { LuClock8 } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import clsx from "clsx";

interface IAppointmentItem {
  appointment: IAppointment;
  variant?: "sm" | "lg";
}
export default function Appointment({
  appointment,
  variant = "sm",
}: IAppointmentItem) {
  const date = new Date(appointment.date);

  const time = new Intl.DateTimeFormat("en", { timeStyle: "short" })
    .format(date)
    .replace(" ", "");

  return (
    <div
      className={clsx({
        ["border-b pb-5 border-white/10 border-dashed last:border-none"]:
          variant === "lg",
      })}
    >
      <div
        className={clsx("flex pt-4  mx-6", {
          ["border-b pb-5 border-white/10 border-dashed"]: variant === "sm",
          ["mb-5"]: variant === "lg",
        })}
      >
        <Image
          src={appointment?.doctor?.avatarPath || ""}
          height={40}
          width={40}
          alt="avatar"
          className="rounded-lg mr-5"
        />
        <div className="flex justify-between w-full">
          <div>
            <div className="text-sm">{appointment.doctor?.name}</div>
            <div>{appointment.title}</div>
          </div>
          <RoundedButton
            Icon={AiOutlinePhone}
            variant={variant === "lg" ? "third" : "primary"}
          />
        </div>
      </div>
      <footer
        className={clsx("flex items-center justify-between mx-6", {
          ["py-3"]: variant === "sm",
        })}
      >
        <div className="flex items-center gap-2.5">
          <LuClock8 />
          <span className="text-sm">{time}</span>
        </div>
        <button className="hover:text-white">
          <BsThreeDots />
        </button>
      </footer>
    </div>
  );
}
