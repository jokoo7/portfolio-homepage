import React from "react";
import Navbar from "@/components/navbar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="wrapper mt-10 mb-[1000px]">{children}</main>
    </>
  );
};

export default MainLayout;
