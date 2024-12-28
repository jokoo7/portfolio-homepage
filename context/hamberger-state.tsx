"use client";

import React, { createContext, useState, useMemo, ReactNode, useContext } from "react";

// Create the context with a default value of undefined
const HamburgerContext = createContext<
  | {
      isHamburger: boolean;
      setIsHamburger: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

// Provider component
const HamburgerContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHamburger, setIsHamburger] = useState(false);

  const value = useMemo(() => ({ isHamburger, setIsHamburger }), [isHamburger]);

  return <HamburgerContext.Provider value={value}>{children}</HamburgerContext.Provider>;
};

// Custom hook to use the Hamburger context
const useHamburger = () => {
  const context = useContext(HamburgerContext);
  if (context === undefined) {
    throw new Error("useHamburger must be used within a HamburgerContextProvider");
  }
  return context;
};

// Exporting the context and provider
export { HamburgerContext, HamburgerContextProvider, useHamburger };
