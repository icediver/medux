import { PropsWithChildren, ReactNode } from "react";
import LogoSvg from "../ui/logo/LogoSvg";
import User from "./user/User";
import Sidebar from "./sidebar/SideBar";
import { getPath } from "@/helpers/pathname/pathname.helpers";
import SearchDoctors from "./search-doctors/SearchDoctors";
import { headers } from "next/headers";
import Logo from "../ui/logo/Logo";
import SidebarNavigation from "./sidebar/sidebar-navigation/SidebarNavigation";

export default function CustomLayout({ children }: PropsWithChildren<unknown>) {
  const headerList = headers();
  const pathname = headerList.get("x-pathname");

  return (
    <section className="animate-opacity">
      {pathname === "/auth" ? (
        <div className="col-span-7">{children}</div>
      ) : (
        <main className="w-[1440px] grid grid-cols-7 mx-auto p-10">
          <Logo />
          <div className="col-span-6 flex items-center justify-between">
            <SearchDoctors />
            <User />
          </div>
          <Sidebar>
            <SidebarNavigation />
          </Sidebar>

          <div className="col-span-6 mt-10">{children}</div>
        </main>
      )}
    </section>
  );
}
