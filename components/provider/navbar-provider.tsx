"use client";

import { useHamburgerMenu } from "@/hooks/use-hamburger-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ThemeSwitcher } from "../theme-switcher";

export default function NavbarProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isHamburgerOpen, setIsHamburgerOpen } = useHamburgerMenu();
  const location = usePathname();

  const navRef = React.useRef<number | null>(null);
  const [navbarVisible, setNavbarVisible] = React.useState(true);
  const [navBackground, setNavBackground] = React.useState(false);

  React.useEffect(() => {
    if (isHamburgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [location, isHamburgerOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      const isScrollingDown = scrollY > (navRef.current || 0);
      navRef.current = scrollY;

      setNavbarVisible((prev) => {
        const newNavbarState = !isScrollingDown || scrollY === 0 || isHamburgerOpen;
        return prev !== newNavbarState ? newNavbarState : prev;
      });

      setNavBackground(scrollY > 0);
    };

    const handleScrollDebounced = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollDebounced, { passive: true });

    // Initial check in case the user starts on a scrolled page
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [isHamburgerOpen]);

  return (
    <div>
      {/* Navbar Mobile */}
      <div
        className={cn(
          "w-full overflow-hidden fixed inset-0 dark:bg-[#181818] bg-background z-40 transition-all duration-500",
          isHamburgerOpen ? "w-full h-full" : "h-0"
        )}
      >
        <div className="flex flex-col py-24 px-16 text-3xl font-semibold gap-6">
          <Link href="/" className={cn({ "animate-fade-down animate-delay-100": isHamburgerOpen })}>
            Home
          </Link>
          <Link href="/about" className={cn({ "animate-fade-down animate-delay-200": isHamburgerOpen })}>
            About
          </Link>
          <Link
            href="/projects"
            className={cn({ "animate-fade-down animate-delay-300": isHamburgerOpen })}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={cn({ "animate-fade-down animate-delay-[400ms]": isHamburgerOpen })}
          >
            Contact
          </Link>

          <div className={cn({ "animate-fade-down animate-delay-500": isHamburgerOpen })}>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Navbar Desktop */}
      <nav
        className={cn(
          "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 -translate-y-[100%]",
          { "translate-y-0": navbarVisible },
          { "dark:bg-[#181818] bg-secondary": navBackground },
          { "bg-transparent": !navBackground }
        )}
      >
        <div className="max-w-4xl mx-auto px-8 flex justify-between items-center h-16">
          <Link
            href="/"
            className={cn(
              "text-3xl font-semibold whitespace-nowrap cursor-pointer opacity-100 transition-all",
              { "opacity-0 invisible duration-200": isHamburgerOpen },
              { "duration-300": !isHamburgerOpen }
            )}
          >
            koo.
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden sm:block space-x-8">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="hidden sm:block">
                <ThemeSwitcher />
              </div>
              <div
                onClick={() => setIsHamburgerOpen((prev) => !prev)}
                className={cn(
                  "fixed top-3 right-8 sm:hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-foreground rounded-full w-10 aspect-square"
                  // { "right-[49px]": isHamburger }
                )}
              >
                <Menu
                  strokeWidth={1.5}
                  className={cn(
                    "h-[1.5rem] w-[1.5rem] rotate-0 transition-all text-background",
                    isHamburgerOpen ? "scale-0" : "scale-100"
                  )}
                />
                <X
                  strokeWidth={1.5}
                  className={cn(
                    "absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all text-background",
                    isHamburgerOpen && "scale-100"
                  )}
                />
                <span className="sr-only">Toggle menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
