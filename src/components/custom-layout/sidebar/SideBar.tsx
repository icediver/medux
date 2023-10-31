import EmergencyHelp from "@/components/ui/emergency-help/EmergencyHelp";
import { ReactNode } from "react";

interface ISidebar {
  children: ReactNode;
}

export default function Sidebar({ children }: ISidebar) {
  return (
    <div className="w-[190px] pr-6">
      <EmergencyHelp />
      {children}
    </div>
  );
}
