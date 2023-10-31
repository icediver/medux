"use client";

import clsx from "clsx";
import { sidebarData } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISidebarNavigation {}
export default function SidebarNavigation({}: ISidebarNavigation) {
  const pathname = usePathname();
  return (
    <ul className="">
      {sidebarData.map((item) => {
        return (
          <li
            key={item.title}
            className={clsx("mt-8 p-2 rounded-lg", {
              "bg-bg-light": pathname === item.path,
            })}
          >
            <Link href={item.path} className="text-base flex items-center">
              <div className="w-5 relative">
                {item.Icon && <item.Icon className="text-xl" />}
                {item.message && (
                  <div className="absolute flex justify-center items-center w-3 h-3 bg-background -right-0.5 -top-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                )}
              </div>
              <span className="ml-[18px] w-32">{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
