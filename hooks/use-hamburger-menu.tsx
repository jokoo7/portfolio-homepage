"use client";

import * as React from "react";

type HamburgerContextType = {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const hamburgerContext = React.createContext<HamburgerContextType | undefined>(undefined);

// Custom hook to use the Hamburger context
function useHamburgerMenu() {
  const context = React.useContext(hamburgerContext);
  if (!context) {
    throw new Error("useHamburgerMenu must be used within a HamburgerProvider");
  }
  return context;
}

// Provider component to manage the state of the hamburger menu
function HamburgerProvider({ children }: { children: React.ReactNode }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const value = React.useMemo(() => ({ isHamburgerOpen, setIsHamburgerOpen }), [isHamburgerOpen]);

  return <hamburgerContext.Provider value={value}>{children}</hamburgerContext.Provider>;
}

export { useHamburgerMenu, HamburgerProvider };
