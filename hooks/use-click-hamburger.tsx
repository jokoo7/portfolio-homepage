'use client'

import * as React from 'react'

type HamburgerContextType = {
  isHamburgerOpen: boolean
  setIsHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerContext = React.createContext<HamburgerContextType | undefined>(
  undefined,
)

const useHamburger = () => {
  const context = React.useContext(HamburgerContext)
  if (!context) {
    throw new Error('useHamburger must be used within a HamburgerProvider')
  }
  return context
}

const HamburgerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false)

  const value = React.useMemo(
    () => ({ isHamburgerOpen, setIsHamburgerOpen }),
    [isHamburgerOpen],
  )

  return (
    <HamburgerContext.Provider value={value}>
      {children}
    </HamburgerContext.Provider>
  )
}

export { type HamburgerContextType, HamburgerProvider, useHamburger }
