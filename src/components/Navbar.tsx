import backLogo from '@/assets/images/btn-back-spacial.png'
import { ReactComponent as Table } from '@/assets/svgs/table.svg'
import { ReactComponent as Component } from '@/assets/svgs/component.svg'
import { ReactComponent as Authentication } from '@/assets/svgs/authentication.svg'
import { ReactComponent as Dashboard } from '@/assets/svgs/dashboard.svg'
import { ReactComponent as Error404 } from '@/assets/svgs/error404.svg'
import { ReactComponent as Error505 } from '@/assets/svgs/error505.svg'
import { ReactComponent as Example } from '@/assets/svgs/example.svg'
import { ReactComponent as Form } from '@/assets/svgs/form.svg'
import { ReactComponent as Icon } from '@/assets/svgs/icon.svg'
import { ReactComponent as Map } from '@/assets/svgs/map.svg'
import { ReactComponent as Maintence } from '@/assets/svgs/maintence.svg'
import { ReactComponent as Menu } from '@/assets/svgs/menu.svg'
import { ReactComponent as Widget } from '@/assets/svgs/widget.svg'
import { ReactComponent as User } from '@/assets/svgs/user.svg'
import Logo from "./Logo"
import MenuItem from "./MenuItem"

const MENU_ITEMS = [
  {
    title: 'Home',
    subMenus: [
      {
        name: 'Dashboard',
        icon: <Dashboard />,
        active: false
      },
      {
        name: 'Menu Style',
        icon: <Menu />,
        active: true
      }
    ]
  },
  {
    title: 'Pages',
    subMenus: [
      {
        name: 'Example',
        icon: <Example />,
        active: false
      },
      {
        name: 'Widgets',
        icon: <Widget />,
        active: false
      },
      {
        name: 'Maps',
        icon: <Map />,
        active: false
      },
      {
        name: 'Authentication',
        icon: <Authentication />,
        active: false
      },
      {
        name: 'Users',
        icon: <User />,
        active: false
      },
      {
        name: 'Error 404',
        icon: <Error404 />,
        active: false
      },
      {
        name: 'Error 505',
        icon: <Error505 />,
        active: false
      },
      {
        name: 'Maintence',
        icon: <Maintence />,
        active: false
      }
    ]
  },
  {
    title: 'Elements',
    subMenus: [
      {
        name: 'Components',
        icon: <Component />,
        active: false
      },
      {
        name: 'Form',
        icon: <Form />,
        active: false
      },
      {
        name: 'Table',
        icon: <Table />,
        active: false
      },
      {
        name: 'Icon',
        icon: <Icon />,
        active: false
      }
    ]
  }
]


const Navbar = (): JSX.Element => (
  <div className="relative w-[13%] h-full bg-[#FFFFFF] flex justify-center">
    <div className="absolute -right-[28px] top-6">
      <img src={backLogo} alt="back-logo" />
    </div>
    <div className="ml-8 flex flex-col justify-center">
      <Logo className="w-full p-5" />
      <div className="w-full h-[2px] opacity-20 bg-slate-700"></div>
      {MENU_ITEMS.map(item => (
        <div key={item.title}>
          <div className="pt-3 justify-center p-2 pb-0 overflow-hidden">
            <div className="text-left pl-4 font-inter font-bold	opacity-50 py-3 p-1">{item.title}</div>
            {item.subMenus.map(subMenu => (
              <MenuItem key={subMenu.name} icon={subMenu.icon} name={subMenu.name} active={subMenu.active} />
            ))}
          </div>
          <div className="h-[1px] mx-4 ml-3 opacity-20 bg-slate-700 "></div>
        </div>
      ))}
    </div>
  </div>
)

export default Navbar
