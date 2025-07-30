import { cn } from "@/lib/utils";
import React from "react";

export default function HeadingSection({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "font-playfair text-muted-foreground text-4xl underline decoration-inherit underline-offset-4 font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}
