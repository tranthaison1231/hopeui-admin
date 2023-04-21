import errorLBg from '../assets/images/bg-logo-error.png'

const ErrClient = (): JSX.Element => {
  return (
    <div className="w-full flex h-screen relative">
      <img src={errorLBg} alt="hihi" className="w-full" />
      <div className="content text-center absolute left-1/3 bottom-[110px] text-white">
        <h1 className="font-bold text-4xl leading-[37px] mt-7">Oops! This Page is Not Found.</h1>
        <p className='p-3'>The requested page dose not exist</p>
        <button className='bg-white text-black rounded-md px-2'>Back to Home</button>
      </div>
    </div>
  )
}

export default ErrClient
