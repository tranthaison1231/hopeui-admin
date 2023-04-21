import Input from '@/components/Input'
import Logo from '@/components/Logo'
import loginBg from '@/assets/images/login-bg.png'
import avatar from '@/assets/images/avatar.png'

const LockScreen = (): JSX.Element => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-xs">
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
          <img src={avatar} alt="avatar" className="w-24" />
            <h2 className='text-2xl mt-2'>Hi! Tran Ngoc Quyen Anh</h2>
            <p className='text-[#8A92A6] mt-2 mb-6'>Enter your password to access the admin.</p>
            <label htmlFor="password">
              <span className="text-[#8A92A6] mb-2">Password</span>
              <Input id="password" type="password" name="password" />
            </label>
            <button className='bg-[#3A57E8] text-white px-6 py-2 rounded shadow-md'>Login</button>
          </div>
        </div>
      </div>
      <img src={loginBg} className="w-9/12" />
    </div>
  )
}

export default LockScreen