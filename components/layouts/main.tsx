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
      <main className="mb-[1000px] mt-32">{children}</main>
    </>
  );
};

export default MainLayout;
