
import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { NavbarContext } from '@/contexts/NavbarContext'

interface Props {
  className?: string
}

const Logo = ({ className = '' }: Props): JSX.Element => {
  const { isCollapsed } = useContext(NavbarContext)
  return (
    <div className={`${className} flex gap-2`}>
<<<<<<< HEAD
      <img src={logo} alt="logo" className="w-7 h-7" />
=======
      <img src={logo} alt="logo" className={`"w-7 h-7" ${!isCollapsed ? '' : 'ml-8'}`} />
>>>>>>> a263800edd02179efd35767965ccf3799441809a
      { !isCollapsed && <span className="text-3xl"> Hope Ui </span>}
    </div>
  )
}

export default Logo
