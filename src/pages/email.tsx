import Logo from '@/components/Logo'
import loginBg from '@/assets/images/login-bg.png'
import Tick from '@/assets/images/tick.png'

const Email = (): JSX.Element => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-xs">
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={Tick} className="w-20" />
            <h2 className="text-[#0048B2] text-6xl font-extrabold mt-6">Success !</h2>
            <p className='text-center text-base w-[530px] mt-6'>
              A email has been send to your email@domain.com. Please check for an email from company and click on the
              included link to reset your password.
            </p>
            <button className='bg-[#3A57E8] rounded-md shadow-sm mt-9 px-6 py-2 text-white'>Back to home</button>
          </div>
        </div>
      </div>
      <img src={loginBg} className="w-1/2" />
    </div>
  )
}

export default Email
