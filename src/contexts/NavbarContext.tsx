import { createContext, useState } from 'react'

export const NavbarContext = createContext({
  isCollapsed: false,
  toggleIsCollapsed: () => {},
})

interface Props {
  children: JSX.Element
}

export const NavbarProvider = ({ children }: Props): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleIsCollapsed = (): void => {
    setIsCollapsed(isCollapsed => !isCollapsed)
  }

  return (
    <NavbarContext.Provider
      value={{
        isCollapsed,
        toggleIsCollapsed
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}
