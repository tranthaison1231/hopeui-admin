const Frame1 = (): JSX.Element => {
  const forgetPassword = () => {
    window.location.href = '/forgetpassword'
  }
  return (
    <div>
      <div className="Frame flex flex-col justify-center items-center p-0 gap-1 w-49 h-24 order-0">
        <h1 className="SignIn w-30 h-10 font-serif font-normal text-5xl leading-10 text-[#000000] order-0">Sign In</h1>
        <h2 className="Sitsc w-52 h-7 font-serif font-normal text-base leading-7 text-center order-1 text-[#8A92A6]">
          Sign in to stay connected
        </h2>
      </div>

      <div className="formall flex flex-col justify-center items-center p-0 gap-6 order-1 ">
        <div className="form1 flex flex-col items-start gap-4 order-0">
          <div className="flex flex-col items-start gap-2 order-0">
            <h1 className="username font-serif font-normal text-base leading-7 text-[#8A92A6] order-0 ">Username</h1>
            <label htmlFor="username" className="username flex flex-col items-start gap-4 order-1 w-[420px] h-11 ">
              <input
                type="text"
                className="username border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[420px] h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex flex-col items-start gap-2 order-0">
            <h1 className="password font-serif font-normal text-base leading-7 text-[#8A92A6] order-0">Password</h1>
            <label htmlFor="password" className="password flex flex-col items-start gap-4 order-1 w-[420px] h-11 ">
              <input
                type="password"
                className="password border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[420px] h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
              />
            </label>
          </div>
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
              className="forgot font-serif font-normal text-base leading-7 text-[#3A57E8] order-0 cursor-pointer hover:text-[#131c49]"
            >
              Forgot Password
            </p>
          </div>
        </div>
        <div className="signbutton flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-[#3A57E8] rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3]">
          <p className="font-serif font-normal text-base leading-7 flex items-center text-center text-[#FFFFFF]">
            Sign in
          </p>
        </div>
      </div>
    </div>
  )
}

export default Frame1
