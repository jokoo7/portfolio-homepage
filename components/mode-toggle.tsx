"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0 bg-accent text-accent-foreground hover:bg-accent/50 dark:hover:bg-accent/50"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaCircleHalfStroke />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
