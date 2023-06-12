import { Navigate } from "react-router-dom"

interface Props {
  children: JSX.Element
}

const AuthGuard = ({ children }: Props) => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) return <Navigate to="/sign-in" />

  return <>{children} </>
}

export default AuthGuard
