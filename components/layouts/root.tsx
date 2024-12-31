"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useHamburger } from "@/context/hamberger-state";
import { ThemeProvider } from "../theme-provider";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Toaster } from "../ui/toaster";

const disabledRoute = ["/admin/dashboard", "/admin/login"];

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isHamburger, setIsHamburger } = useHamburger();
  const location = usePathname();

  useEffect(() => {
    setIsHamburger(false);
  }, [location, setIsHamburger]);
  return (
    <body className={cn("antialiased", { "overflow-hidden": isHamburger })}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {!disabledRoute.includes(location) && (
          <div
            className={`w-full overflow-hidden fixed inset-0 dark:bg-[#181818] bg-background z-40 transition-all duration-500 ${
              isHamburger ? "w-full h-full" : "h-0"
            }`}
          >
            <div className="flex flex-col py-24 px-16 text-3xl font-semibold gap-6">
              <Link href="/" className={cn({ "animate-fade-down animate-delay-100": isHamburger })}>
                Home
              </Link>
              <Link href="/about" className={cn({ "animate-fade-down animate-delay-200": isHamburger })}>
                About
              </Link>
              <Link
                href="/projects"
                className={cn({ "animate-fade-down animate-delay-300": isHamburger })}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={cn({ "animate-fade-down animate-delay-[400ms]": isHamburger })}
              >
                Contact
              </Link>

              <div className={cn({ "animate-fade-down animate-delay-500": isHamburger })}>
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  );
};

export default MainLayout;
