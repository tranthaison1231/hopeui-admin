import Logo from "./Logo"
import BackLogo from '@/assets/images/btn-back-spacial.png'
import DashBoard from '@/assets/images/dashboard.svg'
import MenuStyle from '@/assets/images/menu.svg'
import DropDown from '@/assets/images/Dropdown.svg'
import Widgets from '@/assets/images/widget.svg'
import Example from '@/assets/images/example.svg'
import Map from '@/assets/images/map.svg'
import Authentication from '@/assets/images/authentication.svg'
import User from '@/assets/images/user.svg'
import Error404 from '@/assets/images/error404.svg'
import Error505 from '@/assets/images/error505.svg'
import Maintence from '@/assets/images/maintence.svg'
import Component from '@/assets/images/component.svg'
import Tabble from '@/assets/images/Table.svg'
import Form from '@/assets/images/form.svg'
import Icon from '@/assets/images/icon.svg'

  const NavbarSpacial = (): JSX.Element => (
    <div className="relative w-[13%] h-full bg-[#FFFFFF] flex justify-center">
      <div className="drag absolute -right-[28px] top-6">
        <img src={BackLogo} alt="button back-logo z-10" />
      </div>
      <div className="side-bar flex flex-col justify-center">
        <Logo className="w-full p-5" />
        <div className="separator w-full  h-[2px] opacity-20 bg-slate-700"></div>
        {/* element home  */}
        <div className="menu-home-page pt-3 justify-center p-2 pb-0 overflow-hidden">
          <div className="title-menu text-left font-inter font-bold	opacity-50 py-3 p-1">Home</div>
          <div className="dashboard bg-blue-600 flex flex-row p-2 rounded-md mr-2">
            <img src={DashBoard} alt="icon" />
            <div className="content ml-3 text-white text-base">Dashboard</div>
          </div>
          <div className="menu-style flex flex-row p-2 pb-1 justify-between">
            <img src={MenuStyle} alt="icon" />
            <div className="menu-style px-3 pb-0 text-gray-500 text-base">Menu Style</div>
            <img src={DropDown} alt="icon" />
          </div>
        </div>
        <div className="separator h-[1px] mx-4 ml-3 opacity-10 bg-slate-700"></div>
        {/* element page  */}
        <div className="menu-home-page pt-3 justify-center p-2 pb-0 overflow-hidden">
          <div className="title-menu text-left font-inter font-bold	opacity-50 py-3 p-1">Page</div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Example} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Example</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Widgets} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Widgets</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Map} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Map</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Authentication} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Authentication</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={User} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">User</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Error404} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Error 404</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Error505} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Error 505</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-3 justify-between">
            <img src={Maintence} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Maintence</div>
            <img src={DropDown} alt="icon" />
          </div>
        </div>
        <div className="separator h-[1px] mx-4 ml-3 opacity-20 bg-slate-700 "></div>
        {/* element help */}
        <div className="menu-home-page pt-3 justify-center p-2 pb-0 overflow-hidden">
          <div className="title-menu text-left font-inter font-bold	opacity-50 py-3 p-1">Element</div>
          <div className="menu-style flex flex-row p-2 pb-1 justify-between">
            <img src={Component} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Component</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-2 pb-1 justify-between">
            <img src={Form} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Form</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-2 pb-1 justify-between">
            <img src={Tabble} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Table</div>
            <img src={DropDown} alt="icon" />
          </div>
          <div className="menu-style flex flex-row p-2 pb-1 justify-between">
            <img src={Icon} alt="icon" />
            <div className="menu-style px-3 text-gray-500 text-base">Icon</div>
            <img src={DropDown} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  )

export default NavbarSpacial
