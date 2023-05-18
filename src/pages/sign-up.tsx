import LoginBg from "@/assets/images/login-bg.png"
import LogoBg2 from '@/assets/images/logo-bg2.png'
import Logo from "@/components/Logo"
import { SignUp as ClerkSignUp } from '@clerk/clerk-react'

const SignUp = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex flex-row items-start ">
      <div className="w-1/2 h-full">
        <img src={LoginBg} className="h-full rotate-180 " alt="login-bg" />
      </div>
      <div className="w-1/2 h-full flex flex-row">
        <div className="flex flex-col items-center gap-6 justify-center my-auto w-full">
          <Logo />
          <ClerkSignUp signInUrl="/sign-in" routing="path" path="/sign-up" />
        </div>
        <img src={LogoBg2} alt="LogoBg" className="w-[20rem] h-[20rem] absolute right-0" />
      </div>
    </div>
  )
}

export default SignUp
