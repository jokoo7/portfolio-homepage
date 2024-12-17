import React from "react";
import { ModeToggle } from "../mode-toggle";
import NavLink from "./_components/navlink";
import Logo from "./_components/logo";

const NavLinks = [
  { href: "/work", label: "Work" },
  { href: "/favorite", label: "Favorite" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0">
      <div className="max-w-3xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex gap-4">
            {NavLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
