import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="mt-10">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
