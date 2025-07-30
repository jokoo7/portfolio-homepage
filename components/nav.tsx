import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import SwitcherLang from "./switcher-lang";
import { AlignRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
};

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 py-4 bg-transparent backdrop-blur-xl w-full ">
      <div className="max-w-[650px] mx-auto w-full flex justify-between px-6 sm:px-4 md:px-0">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold">
            Koo.
          </Link>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="hidden md:flex gap-4 items-center">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all flex align-middle relative hover:text-accent hover:underline decoration-inherit underline-offset-4"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <SwitcherLang />
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden ml-4">
                <Button variant="ghost" className="h-8 w-8 px-0 hover:bg-transparent hover:text-text">
                  <AlignRight />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {Object.entries(navItems).map(([path, { name }]) => (
                  <DropdownMenuItem key={path} asChild>
                    <Link href={path} className="transition-all flex align-middle text-lg">
                      {name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
