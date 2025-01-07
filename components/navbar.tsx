"use client";

import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHamburger } from "@/context/hamberger-state";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navRef = useRef<number | null>(null);
  const { isHamburger, setIsHamburger } = useHamburger();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      const isScrollingDown = scrollY > (navRef.current || 0);
      navRef.current = scrollY;

      setNavbarVisible((prev) => {
        const newNavbarState = !isScrollingDown || scrollY === 0 || isHamburger;
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
  }, [isHamburger]);

  return (
    <nav
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 -translate-y-[100%]",
        { "translate-y-0": navbarVisible },
        { "dark:bg-[#181818] bg-secondary": navBackground },
        { "bg-transparent": !navBackground }
      )}
    >
      <div className="wrapper flex justify-between items-center h-16">
        <Link
          href="/"
          className={cn(
            "text-3xl font-semibold whitespace-nowrap cursor-pointer opacity-100 transition-all",
            {
              "opacity-0 invisible duration-200": isHamburger,
            },
            {
              "duration-300": !isHamburger,
            }
          )}
        >
          sann.
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
              <ModeToggle />
            </div>
            <div
              onClick={() => setIsHamburger((prev) => !prev)}
              className={cn(
                "fixed top-3 right-8 sm:hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-foreground rounded-full w-10 aspect-square"
                // { "right-[49px]": isHamburger }
              )}
            >
              <Menu
                strokeWidth={1.5}
                className={`h-[1.5rem] w-[1.5rem] rotate-0 transition-all text-background ${
                  isHamburger ? "scale-0" : "scale-100"
                }`}
              />
              <X
                strokeWidth={1.5}
                className={`absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all text-background ${
                  isHamburger && "scale-100"
                }`}
              />
              <span className="sr-only">Toggle menu</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
