import Logo from '@/components/Logo'
import loginBg from '@/assets/images/login-bg.png'
import Input from '@/components/Input'

const ResetPassword = (): JSX.Element => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex items-center">
        <div className="ml-24">
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-4xl mt-2">Reset Password</h2>
            <p className="w-[466px] text-[#8A92A6] text-center mt-2 mb-12">
              Enter your email address and we’ll send you an email with instructions to reset your password
            </p>
            <label htmlFor="password" className="w-full">
              <span className="text-[#8A92A6] mb-2">Email</span>
              <Input id="email" type="text" name="email" className="w-full" />
            </label>
            <button className="bg-[#3A57E8] text-white px-6 py-2 rounded shadow-md mt-10">Reset</button>
          </div>
        </div>
      </div>
      <img src={loginBg} className="w-1/2" alt='bg-login' />
    </div>
  )
}

export default ResetPassword
