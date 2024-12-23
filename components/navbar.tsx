"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full">
      <div className="wrapper flex justify-between items-center h-16">
        <div className="text-3xl font-semibold whitespace-nowrap">sann.</div>
        <div className="flex items-center gap-8 ">
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
              onClick={() => setToggle((prev) => !prev)}
              className="sm:hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-foreground rounded-full w-10 aspect-square"
            >
              <Menu
                strokeWidth={1.5}
                className={` h-[1.5rem] w-[1.5rem] rotate-0 transition-all text-background  ${
                  toggle ? "scale-0" : "scale-100"
                }`}
              />
              <X
                strokeWidth={1.5}
                className={`absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all text-background ${
                  toggle && "scale-100"
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
