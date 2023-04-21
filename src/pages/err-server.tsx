import bg from 'assets/images/bg-logo-error-505.png'
import frame from 'assets/images/frame-505.png'
const ErrServer = (): JSX.Element => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img src={bg} className="" alt="" />
      <button className=" left-[880px] top-[860px] absolute z-10 bg-white border px-[880] w-[155px] py-[9px] rounded-md px-2">
        Back to Home
      </button>
    </div>
  )
}

export default ErrServer
