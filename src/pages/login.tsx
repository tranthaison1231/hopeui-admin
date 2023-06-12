import {  signIn } from '@/api/auth'
import loginBg from '@/assets/images/login-bg.png'
import logoBg from '@/assets/images/logo-bg.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface Inputs {
  email: string
  password: string
}

const Login = (): JSX.Element | null => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password}) => {
    try {
      const res = await signIn(email, password)
      const accessToken = res.data.accessToken
      localStorage.setItem('accessToken', accessToken)
      navigate('/')
    } catch (error) {
      showError(error)
    }
  }

  const forgetPassword = () => {
    navigate('/forgot-password')
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
                <div className="flex flex-col gap-2">
                  <FormItem label="Email" error={errors?.email?.message}>
                    <Input
                      type="text"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: validator.email,
                          message: 'Please enter a valid email'
                        }
                      })}
                    />
                  </FormItem>
                  <FormItem label="Password" error={errors?.password?.message}>
                    <Input
                      type="password"
                      {...register('password', {
                        required: 'Password is required',
                        pattern: {
                          value: validator.password,
                          message: 'Please enter a valid password'
                        }
                      })}
                    />
                  </FormItem>
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
                <Button type="submit">Sign in</Button>
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
