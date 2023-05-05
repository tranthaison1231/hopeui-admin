import { ReactComponent as ArrowLeft } from '@/assets/svgs/arrow-left.svg'
import { ReactComponent as Authentication } from '@/assets/svgs/authentication.svg'
import { ReactComponent as Component } from '@/assets/svgs/component.svg'
import { ReactComponent as Dashboard } from '@/assets/svgs/dashboard.svg'
import { ReactComponent as Error404 } from '@/assets/svgs/error404.svg'
import { ReactComponent as Error505 } from '@/assets/svgs/error505.svg'
import { ReactComponent as Example } from '@/assets/svgs/example.svg'
import { ReactComponent as Form } from '@/assets/svgs/form.svg'
import { ReactComponent as Icon } from '@/assets/svgs/icon.svg'
import { ReactComponent as Maintence } from '@/assets/svgs/maintence.svg'
import { ReactComponent as Map } from '@/assets/svgs/map.svg'
import { ReactComponent as Menu } from '@/assets/svgs/menu.svg'
import { ReactComponent as Table } from '@/assets/svgs/table.svg'
import { ReactComponent as User } from '@/assets/svgs/user.svg'
import { ReactComponent as Widget } from '@/assets/svgs/widget.svg'
import { NavbarContext } from '@/contexts/NavbarContext'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from "./Logo"
import MenuItem from "./MenuItem"

const MENU_ITEMS = [
  {
    title: 'Home',
    subMenus: [
      {
        name: 'Dashboard',
        icon: <Dashboard />,
        path: '/'
      },
      {
        name: 'Menu Style',
        icon: <Menu />,
        path: '/menu-style',
      }
    ]
  },
  {
    title: 'Pages',
    subMenus: [
      {
        name: 'Example',
        icon: <Example />,
        path: '/example'
      },
      {
        name: 'Widgets',
        icon: <Widget />,
        path: '/widgets'
      },
      {
        name: 'Maps',
        icon: <Map />,
        path: '/maps'
      },
      {
        name: 'Authentication',
        icon: <Authentication />,
        path: '/authentication'
      },
      {
        name: 'Users',
        icon: <User />,
        path: '/users'
      },
      {
        name: 'Error 404',
        icon: <Error404 />,
        path: '/404'
      },
      {
        name: 'Error 505',
        icon: <Error505 />,
        path: '/505'
      },
      {
        name: 'Maintence',
        icon: <Maintence />,
        path: '/maintence'
      }
    ]
  },
  {
    title: 'Elements',
    subMenus: [
      {
        name: 'Components',
        icon: <Component />,
        path: '/components'
      },
      {
        name: 'Form',
        icon: <Form />,
        path: '/form'
      },
      {
        name: 'Table',
        icon: <Table />,
        path: '/table'
      },
      {
        name: 'Icon',
        icon: <Icon />,
        path: '/icon'
      }
    ]
  }
]


const Navbar = (): JSX.Element => {
  const {  isCollapsed, toggleIsCollapsed }  = useContext(NavbarContext)
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className={`relative h-full bg-[#FFFFFF] flex justify-center ${isCollapsed ? 'w-10' : 'w-64'}`}>
      <button
        className="absolute -right-2 top-6 bg-[#3A57E8] w-8 h-8 flex justify-center items-center rounded-full"
        onClick={toggleIsCollapsed}
      >
        <ArrowLeft className={isCollapsed ? 'rotate-180' : ''} />
      </button>
      <div className="flex flex-col justify-center">
        <Logo className="w-full p-5" />
        <div className="w-full h-[2px] opacity-20 bg-slate-500"></div>
        {MENU_ITEMS.map(item => (
          <div key={item.title}>
            <div className="pt-3 justify-center p-2 pb-0 overflow-hidden">
              <div className="text-left pl-4 font-inter font-semibold	opacity-50 py-3 p-1 ml-6 text-[#ADB5BD]">
                {item.title}
              </div>
              {item.subMenus.map(subMenu => (
                <MenuItem
                  onClick={() => {
                    navigate(subMenu.path)
                  }}
                  key={subMenu.name}
                  icon={subMenu.icon}
                  name={subMenu.name}
                  active={subMenu.path === location.pathname}
                />
              ))}
            </div>
            <div className="h-[1px] mx-4 ml-3 opacity-20 bg-slate-500 "></div>
          </div>
        ))}
      </div>
    </div>
  )}

export default Navbar
