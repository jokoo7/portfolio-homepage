import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardContactPage = () => {
  return (
    <>
      <Link className={buttonVariants({ variant: "secondary" })} href="/admin/dashboard/contact/create">
        create contact
      </Link>
    </>
  );
};

export default DashboardContactPage;
