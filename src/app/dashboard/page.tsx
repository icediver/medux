import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Dashboard from "@/components/screens/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Dashboard />;
}
