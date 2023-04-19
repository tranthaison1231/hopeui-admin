import logo from '../assets/images/logo.png'

const Header = (): JSX.Element => {
  return (<div>
            <div className="flex">
              <img src={logo} className="w-8 h-8 object-cover"/>
              <span className="text-[#F4F5F6]"> Crypter </span>
            </div>
          </div>
  )
}

export default Header
