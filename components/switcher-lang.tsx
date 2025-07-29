"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function SwitcherLang() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    // pathname: /id/about  ->  /en/about
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 px-0">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("id")}>Indonesia</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
