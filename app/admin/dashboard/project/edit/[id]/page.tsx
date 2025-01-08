import React from "react";
import DashboardProjectEditPage from "./edit";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <DashboardProjectEditPage id={(await params).id} />;
}

export default Page;
