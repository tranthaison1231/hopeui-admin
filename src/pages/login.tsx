import { useContext, useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/login'
import { AuthContext } from '../contexts/AuthContext'
import loginBg from '../assets/images/login-bg.png'
import Logo from '../components/Logo'
import Frame from '@/components/Frame'
import MoreSelect from '@/components/MoreSelect'
import Logotop from '../assets/images/logotop.png'

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
    <div className="login w-full flex h-screen bg-[#FFFFFF] relative">
      <div className="absolute">
        <img src={Logotop} alt="logo2" className="w-60 h-60 absolute-top-28" />
      </div>
      <div className="form w-1/2 justify-center items-flex-start flex flex-col gap-10">
        <div className="justify-center items-flex-start flex flex-col gap-10 w-[436px] h-[602px] m-auto">
          <Logo />
          <div className="content flex flex-col justify-center items-center p-0 gap-1 order-0">
            <Frame />
            <MoreSelect />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <img src={loginBg} className="h-full " />
      </div>
    </div>
  )
}

export default Login
