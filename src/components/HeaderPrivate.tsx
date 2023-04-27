import search from '@/assets/images/search.png'
import england from '@/assets/images/england.png'
import notification from '@/assets/images/notification.png'
import message from '@/assets/images/message.png'
import avatarMin from '@/assets/images/avatar-min.png'
import headerBg from '@/assets/images/header-bg.png'
import voice from '@/assets/images/voice.png'

const HeaderPrivate = () => {
  return (
    <div className="flex flex-col w-[84%] absolute right-0">
      <div className="flex justify-between mt-4 ml-8 ">
        <div className="flex justify-center items-center border-solid border-[#E9ECEF] border-[1px] rounded">
          <img src={search} alt="Search" className="h-6 pl-4" />
          <input type="text" placeholder="Search..." className="w-80 h-9 outline-none ml-2" />
        </div>
        <div className="flex justify-center items-center">
          <img src={england} alt="England" className="w-8 h-8" />
          <img src={notification} alt="Notification" className="w-6 h-6 mx-4" />
          <img src={message} alt="Message" className="w-6 h-6 mx-4" />
          <img src={avatarMin} alt="Avatar Min" />

          <div className="flex flex-col ml-4 mr-4">
            <p>Austin Robertson</p>
            <p className="text-[13px] text-[#8A92A6]">Marketing Administrator</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-3 relative">
        <img src={headerBg} alt="Header Background" />
        <div className="absolute top-0 mt-4 ml-10">
          <p className="text-4xl text-white font-bold font-inter">Hello Devs !</p>
          <p className="font-inter text-xl text-white">
            We are on a mission to help developers like you to build beautiful projects for free.
          </p>
        </div>
        <button className="flex absolute right-0 top-0 bg-blue-700/40 mt-4 mr-10 px-6 py-2 rounded">
          <img src={voice} alt="Voice" />
          <p className="ml-2 text-white">Announcements</p>
        </button>
      </div>
    </div>
  )
}

export default HeaderPrivate
