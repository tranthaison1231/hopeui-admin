import { createContext, useState } from 'react'

export const AuthContext = createContext({
  isAuthentication: false,
  onLogout: () => {},
  onSuccess: () => {}
})

interface Props {
  children: JSX.Element
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthentication, setIsAuthentication] = useState(localStorage.getItem('isAuthentication') === 'true') // 0 co thi undefi or null

  const onLogout = (): void => {
    setIsAuthentication(false)
    localStorage.setItem('isAuthentication', 'false')
  }
// redux toolkit + middleware saga/thunk
  const onSuccess = (): void => {
    setIsAuthentication(true)
    localStorage.setItem('isAuthentication', 'true')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthentication,
        onLogout,
        onSuccess
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
