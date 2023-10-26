import EmergencyHelp from "@/components/ui/emergency-help/EmergencyHelp";
import { sidebarData } from "./data";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[190px] ">
      <EmergencyHelp />
      <ul className="">
        {sidebarData.map((item) => (
          <li key={item.title} className="mt-10">
            <Link href={item.path} className="text-base flex items-center">
              <div className="w-5 relative">
                {item.Icon && <item.Icon className="text-xl" />}
                {item.message && (
                  <div className="absolute flex justify-center items-center w-3 h-3 bg-background -right-0.5 -top-0.5">
                    <div className=" w-2 h-2 rounded-full bg-green-500" />
                  </div>
                )}
              </div>
              <span className="ml-[18px] w-32">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
