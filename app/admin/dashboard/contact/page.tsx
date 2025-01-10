import * as React from "react";
import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import DashboardContact from "./_components/dashboard-contact";

export default function DataTableDemo() {
  return (
    <div className="w-full">
      <Link className={buttonVariants({ variant: "outline" })} href="/admin/dashboard/contact/create">
        <Plus /> Create new contact
      </Link>
      <DashboardContact />
    </div>
  );
}
