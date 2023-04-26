import bg from '@/assets/svgs/bg-side.svg'
import voice from '@/assets/svgs/voice.svg'
interface Props {
  className?: string
}
export const Background = ({ className = '' }: Props): JSX.Element => {
  return (
    <div className={`${className} relative `}>
      <img src={bg} alt="" className="w-full " />
      <div className="absolute top-1/2 left-9 text-white">
        <h2 className="text-4xl font-bold py-2">Hello Devs !</h2>
        <p>We are on a mission to help developers like you build successful beautiful projects for free.</p>
      </div>
      <div className="flex flex-row absolute right-4 top-1/5 bg-[#3a57e853] px-7 py-3 rounded-[4px] gap-2 text-white">
        <img src={voice} alt="" />
        <div className="">Announcments</div>
      </div>
    </div>
  )
}

