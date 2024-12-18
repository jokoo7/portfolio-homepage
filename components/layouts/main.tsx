import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="wrapper mb-[1000px]">{children}</main>
    </>
  );
};

export default MainLayout;
