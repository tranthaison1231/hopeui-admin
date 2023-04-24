import LoginBg from "@/assets/images/login-bg.png"
import Logo from "@/components/Logo"
import LogoBg2 from '@/assets/images/logo-bg2.png'
import Socials from "@/components/Socials"
import { useNavigate } from "react-router-dom"

const SignUp = (): JSX.Element => {
  const navigate = useNavigate()

  const moveToLogin = () =>{
    navigate('/login')
  }


  return (
    <div className="w-full h-screen flex flex-row items-start ">
      <div className="w-1/2 h-full">
        <img src={LoginBg} className="h-full rotate-180 " />
      </div>
      <div className="w-1/2 order-1 h-full flex flex-row">
        <div className="flex flex-col items-start gap-6 justify-center my-auto ml-[100px]">
          <Logo />
          <div className="flex flex-col justify-center items-center gap-4 w-[32.25rem] h-[36.375rem] order-1 font-serif font-normal text-base leading-7">
            <div className="flex flex-col justify-center items-center p-0 gap-1 order-0 w-[13.75rem] h-[5rem]">
              <h1 className="font-serif font-normal text-[33px] leading-10 text-[#000000] order-0 w-[8rem] h-[2.7rem]">
                Sign Up
              </h1>
              <h2 className="w-[13.75rem] h-[1.75rem]  text-center order-1 text-[#8A92A6]">
                Create your Hope UI account
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 order-1 w-[32.25rem] h-[30.438rem]">
              <div className="flex flex-col items-center justify-center gap-4 order-0 w-[32.25rem] h-[17.688rem]">
                <div className="flex flex-row items-flex-start gap-4 order-0 w-[32.25rem] h-[4.32rem]">
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      First Name
                    </p>
                    <label
                      htmlFor="fisrtname"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem]"
                    >
                      <input
                        type="text"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      Last Name
                    </p>
                    <label
                      htmlFor="lastname"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem] "
                    >
                      <input
                        type="text"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-row items-flex-start gap-4 order-0 w-[32.25rem] h-[4.32rem]">
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      Email
                    </p>
                    <label
                      htmlFor="email"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem] "
                    >
                      <input
                        type="text"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      Phone No.
                    </p>
                    <label
                      htmlFor="phoneno"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem] "
                    >
                      <input
                        type="text"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-row items-flex-start gap-4 order-0 w-[32.25rem] h-[4.32rem]">
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      Password
                    </p>
                    <label
                      htmlFor="password"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem] "
                    >
                      <input
                        type="password"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-flex-start gap-2 order-0 w-[15.625rem] h-[4.32rem]">
                    <p className=" text-[#8A92A6] order-0 w-[5.188rem] h-[1.75em]">
                      Confirm Password
                    </p>
                    <label
                      htmlFor="confirmPassword"
                      className="flex flex-col items-start gap-4 order-1 w-[15.625rem] h-[2.063rem] "
                    >
                      <input
                        type="password"
                        className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[15.625rem] h-[2.063rem] bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                <div className="remember flex flex-row items-center gap-2 order-0 w-[15.063rem] h-[1.75rem]">
                  <input
                    type="checkbox"
                    className="border-box flex flex-row justify-center items-center display-none w-5 h-5"
                  />
                  <p className=" text-[#8A92A6] order-0 ">
                    I agree with the terms of use
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-[#3A57E8] rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3] m-auto">
                <p className=" flex items-center text-center text-[#FFFFFF]">
                  Sign up
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 order-1">
                <p className="w-56 h-7  text-[#232D42] order-0">
                  or sign up with other accounts?
                </p>
                <Socials />
                <div className="flex flex-row gap-3 order-2 ">
                  <p className=" text-[#232D42]">Already have an Account</p>
                  <p onClick={moveToLogin} className="text-[#3A57E8] cursor-pointer hover:text-[#4a66f3]">
                    Sign in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20rem] h-[20rem]">
          <img src={LogoBg2} alt="LogoBg" className="w-[20rem] h-[20rem]" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
