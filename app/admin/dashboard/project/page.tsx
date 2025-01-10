import * as React from "react";
import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import DashboardProject from "./_components/dashboard-project";

export default function Page() {
  return (
    <div className="w-full">
      <Link className={buttonVariants({ variant: "outline" })} href="/admin/dashboard/project/create">
        <Plus /> Create new project
      </Link>
      <DashboardProject />
    </div>
  );
}
