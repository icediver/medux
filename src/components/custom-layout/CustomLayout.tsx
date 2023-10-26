import { PropsWithChildren, ReactNode } from "react";
import LogoSvg from "../ui/logo/LogoSvg";
import SeaarchDoctors from "./search-doctors/SearchDoctors";
import User from "./user/User";
import Sidebar from "./sidebar/SideBar";

export default function CustomLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="w-[1440px] grid grid-cols-7 mx-auto p-10">
      <div className="flex items-center  gap-2 justify-start w-[164px]">
        <LogoSvg className="" />
        <span className="text-logo text-2xl font-rubik font-bold">medux</span>
      </div>
      <div className="col-span-6 flex items-center justify-between">
        <SeaarchDoctors />
        <User />
      </div>
      <Sidebar />

      <div className="col-span-6 mt-10">{children}</div>
    </main>
  );
}
