"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const disableNavbar = ["/admin/login", "/admin/dashboard"];
const disableFooter = ["/admin/login", "/admin/dashboard"];

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <div className="absolute inset-0 -z-50 w-full min-h-screen bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_20%,#000_80%,transparent_100%)]"></div>
      <main
        className={cn({
          "mt-24": !disableNavbar.includes(pathname) || !disableFooter.includes(pathname),
        })}
      >
        {children}
      </main>
      {!disableFooter.includes(pathname) && <Footer />}
    </>
  );
};

export default MainLayout;
