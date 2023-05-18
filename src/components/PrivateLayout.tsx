import Navbar from '@/components/Navbar'
import avatarMin from '@/assets/images/avatar-min.png'
import england from '@/assets/images/england.png'
import message from '@/assets/images/message.png'
import notification from '@/assets/images/notification.png'
import search from '@/assets/images/search.png'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const PrivateLayout = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  const { isCollapsed } = useContext(NavbarContext)
  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <div className="w-full flex flex-row">
      <Navbar />
      <div
        className={`flex flex-col ${isCollapsed ? 'w-[calc(100%-2.5rem)]' : 'w-[calc(100%-16rem)]'}  absolute right-0`}
      >
        <div className="flex justify-between p-4 px-8 ">
          <div className="flex justify-center items-center border-solid border-[#E9ECEF] border-[1px] rounded">
            <img src={search} alt="Search" className="h-6 pl-4" />
            <input type="text" placeholder="Search..." className="w-80 h-9 outline-none ml-2" />
          </div>
          <div className="flex justify-center items-center">
            <img src={england} alt="England" className="w-8 h-8" />
            <img src={notification} alt="Notification" className="w-6 h-6 mx-4" />
            <img src={message} alt="Message" className="w-6 h-6 mx-4" />

            <div className="dropdown">
              <div tabIndex={0} className="flex cursor-pointer">
                <img src={avatarMin} alt="Avatar Min" />
                <div className="flex flex-col ml-4 mr-4">
                  <p>Austin Robertson</p>
                  <p className="text-[13px] text-[#8A92A6]">Marketing Administrator</p>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#E5E5E5] p-5">{children}</div>
      </div>
    </div>
  )
}

export default PrivateLayout
