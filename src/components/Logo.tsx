
import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Link } from 'react-router-dom'

interface Props {
  className?: string
}

const Logo = ({ className = '' }: Props): JSX.Element => {
  const { isCollapsed } = useContext(NavbarContext)
  return (
    <Link to="/" className={`${className} flex gap-2`}>
      <img src={logo} alt="logo" className={`"w-7 h-7" ${!isCollapsed ? '' : 'ml-8'}`} />
      {!isCollapsed && <span className="text-3xl"> Hope Ui </span>}
    </Link>
  )
}

export default Logo
