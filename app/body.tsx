"use client";

import AnimatePresenceLayout from "@/components/animate-presence";
import MainLayout from "@/components/layouts/main";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { useHamburger } from "@/context/hamberger-state";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Body = ({
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
        <MainLayout>
          <AnimatePresenceLayout>{children}</AnimatePresenceLayout>
        </MainLayout>
      </ThemeProvider>
    </body>
  );
};

export default Body;
