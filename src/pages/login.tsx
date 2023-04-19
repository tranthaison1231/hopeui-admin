import { useContext, useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/login'
import { AuthContext } from '../contexts/AuthContext'
import loginBg from '../assets/images/login-bg.png'
import Logo from '../components/Logo'

const Login = (): JSX.Element => {
  const { onSuccess } = useContext(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { username, password } = Object.fromEntries(formData)
    const isAuth = login(username as string, password as string)
    if (isAuth) {
      navigate('/')
      onSuccess()
      localStorage.setItem('isAuthentication', 'true')
    } else {
      setError('Username or password is incorrect')
    }
  }

  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-xs">
          <Logo className="mb-10" />
          <h2 className="text-center text-3xl mb-4">Sign In</h2>
          <p className="text-center text-sm text-[#8A92A6] mb-4">Sign in to stay connected. </p>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label htmlFor="username" className="mb-6">
              <span className="mr-6">Username</span>
              <Input id="username" name="username" />
            </label>
            <label htmlFor="password">
              <span className="mr-6">Password</span>
              <Input id="password" type="password" name="password" />
            </label>
            <button className="mt-6 p-2 bg-red-700">Login</button>
          </form>
          {error && <div className="text-red-700">{error}</div>}
        </div>
      </div>
      <img src={loginBg} className="w-1/2" />
    </div>
  )
}

export default Login
