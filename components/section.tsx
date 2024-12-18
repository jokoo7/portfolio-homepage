"uce client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
} & HTMLMotionProps<"section">; // Menggabungkan dengan properti HTML untuk elemen section

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Section = ({ children, delay = 0, className, ...props }: IProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut", delay }}
      style={{ position: "relative" }}
      className={cn("max-w-xl mx-auto", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default Section;
