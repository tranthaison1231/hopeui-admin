import bg from '@/assets/images/bg-side.png'
import voice from '@/assets/svgs/voice.svg'

const HeaderBackground = (): JSX.Element => {
  return (
    <div className="absolute h-36 top-0 left-0 w-full">
      <img src={bg} alt="bg-side" className="h-48 w-full" />
      <div className="absolute left-0 top-1/3 flex w-full p-5 justify-between">
        <div className="text-white">
          <h2 className="text-4xl font-bold py-2">Hello Devs !</h2>
          <p>We are on a mission to help developers like you build successful beautiful projects for free.</p>
        </div>
<<<<<<< HEAD
        <button className="flex px-5 py-3 bg-[#3A57E8] h-fit">
=======
        <button className="flex px-5 py-3 bg-primary h-fit">
>>>>>>> a263800edd02179efd35767965ccf3799441809a
          <img src={voice} alt="voice" />
          <span>Announcments</span>
        </button>
      </div>
    </div>
  )
}


export default HeaderBackground
