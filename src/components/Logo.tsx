import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { NavbarContext } from '@/contexts/NavbarContext'

interface Props {
  className?: string
}

const Logo = ({ className = '' }: Props): JSX.Element => {
  const { isCollapsed } = useContext(NavbarContext)
  return (
    <div className={`${className} flex ${isCollapsed ? 'pl-16' : 'gap-2'}`}>
      <img src={logo} alt="logo" className="w-7 h-7" />
      {!isCollapsed && <span className="text-3xl"> Hope Ui </span>}
    </div>
  )
}

export default Logo
