import Link from "next/link";
import { metaData } from "../lib/config";
import { ModeToggle } from "./mode-toggle";
import SwitcherLang from "./switcher-lang";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5 flex items-start justify-between">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold font-m-plus-rounded">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <SwitcherLang />
        <ModeToggle />
      </div>
    </nav>
  );
}
