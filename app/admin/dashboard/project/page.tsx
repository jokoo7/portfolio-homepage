import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardProjectPage = () => {
  return (
    <>
      <Link className={buttonVariants({ variant: "secondary" })} href="/admin/dashboard/project/create">
        create project
      </Link>
    </>
  );
};

export default DashboardProjectPage;
