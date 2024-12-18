"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";

type IProps = {
  children: React.ReactNode;
};

const AnimatePresenceLayout = ({ children }: IProps) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </AnimatePresence>
  );
};

export default AnimatePresenceLayout;
