import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api/login'
import loginBg from '@/assets/images/login-bg.png'
import logoBg from '@/assets/images/logo-bg.png'
import Logo from '@/components/Logo'
import { AuthContext } from '@/contexts/AuthContext'
import Socials from '@/components/Socials'
import { useForm, SubmitHandler } from 'react-hook-form'


interface Inputs {
  username: string,
  password: string
}

const Login = (): JSX.Element => {
  const { onSuccess } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      username: 'Hoang',
      password: '123'
    }
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = data => {
    const isAuth = login(data.username, data.password)
    if (isAuth) {
      navigate('/')
      onSuccess()
      localStorage.setItem('isAuthentication', 'true')
    } else {
      setError('Username or password is incorrect')
    }
  }

  const forgetPassword = () => {
    navigate('/reset-password')
  }

  const moveToSignUp = () => {
    navigate('/sign-up')
  }

  return (
    <div className="login w-full flex h-screen bg-[#FFFFFF] relative">
      <div className="absolute">
        <img src={logoBg} alt="logo2" className="w-60 h-60 absolute-top-28" />
      </div>
      <div className="form w-1/2 justify-center items-flex-start flex flex-col gap-10">
        <div className="justify-center items-flex-start flex flex-col gap-10 w-[436px] h-[602px] m-auto">
          <Logo />
          <div className="content flex flex-col justify-center items-center p-0 gap-1 order-0">
            <div>
              <div className="flex flex-col justify-center items-center p-0 gap-1 w-49 h-24 order-0">
                <h1 className="SignIn w-30 h-10 font-serif font-normal text-5xl leading-10 text-[#000000] order-0">
                  Sign In
                </h1>
                <h2 className="w-52 h-7 font-serif font-normal text-base leading-7 text-center order-1 text-[#8A92A6]">
                  Sign in to stay connected
                </h2>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center p-0 gap-6 order-1 "
              >
                <div className="flex flex-col items-start">
                  <div className="flex flex-col items-start gap-2 order-0">
                    <h1 className="font-serif font-normal text-base leading-7 text-[#8A92A6] order-0 ">Username</h1>
                    <label htmlFor="username" className="flex flex-col items-start gap-4 order-1 w-[420px] h-11 ">
                      <input
                        type="text"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[420px] h-11 bg-[#FFFF] order-0 border-primary focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                        {...register('username', { required: true })}
                      />
                    </label>
                  </div>
                  {errors.username && <p className="text-error">This field is required</p>}
                  <div className="flex flex-col items-start gap-2 order-0">
                    <h1 className="font-serif font-normal text-base leading-7 text-[#8A92A6] order-0">Password</h1>
                    <label htmlFor="password" className="flex flex-col items-start gap-4 order-1 w-[420px] h-11 ">
                      <input
                        type="password"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[420px] h-11 bg-[#FFFF] order-0 border-primary focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                        {...register('password', { required: true })}
                      />
                    </label>
                  </div>
                  {errors.password && <p className="text-error">This field is required</p>}
                  <div className="flex flex-row items-start p-0 gap-40 order-2 w-full">
                    <div className="remember flex flex-row items-center gap-2 order-0">
                      <input
                        type="checkbox"
                        className="border-box flex flex-row justify-center items-center display-none w-5 h-5"
                      />
                      <p className="font-serif font-normal text-base leading-7 text-[#8A92A6] order-0">Remember me?</p>
                    </div>
                    <p
                      onClick={forgetPassword}
                      className="forgot font-serif font-normal text-base leading-7 text-primary order-0 cursor-pointer hover:text-[#131c49]"
                    >
                      Forgot Password
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-primary rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3]"
                >
                  <p className="font-serif font-normal text-base leading-7 flex items-center text-center text-[#FFFFFF]">
                    Sign in
                  </p>
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 order-1">
              <p className="w-56 h-7 font-serif font-normal text-base leading-7 text-[#232D42] order-0">
                or sign in with other accounts?
              </p>
              <Socials />
              <div className="flex flex-row gap-3 order-2 font-serif font-normal text-base leading-7">
                <p className="text-[#232D42]">Don’t have an account?</p>
                <p onClick={moveToSignUp} className="text-primary cursor-pointer hover:text-[#4a66f3]">
                  Click here to sign up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={loginBg} alt="login" className="w-1/2" />
    </div>
  )
}

export default Login
