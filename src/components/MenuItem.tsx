import React, { useContext } from 'react'
import { ReactComponent as ArrowRight } from '@/assets/svgs/arrow-right.svg'
import { NavbarContext } from '@/contexts/NavbarContext'

interface Props {
  icon: React.ReactElement
  name: string
  active?: boolean
  onClick?: () => void
}

const MenuItem = ({ icon, name, active, onClick }: Props): JSX.Element => {
  const { isCollapsed } = useContext(NavbarContext)
  return (
    <div
      className={`flex flex-row py-2 cursor-pointer ${isCollapsed ? 'ml-12 w-auto pl-[18px]' : 'px-5'}  ${
        active ? 'bg-blue-600 rounded-md w-full' : 'justify-between'
      }`}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: active ? 'text-white' : 'text-[#8A92A6]' })}
      <div className={`px-3 pb-0 text-gray-500 text-base ${active ? 'text-white' : ''}`}>{!isCollapsed && name}</div>
      {!isCollapsed && !active && <ArrowRight className={active ? 'text-white' : 'text-[#8A92A6]'} alt="arrow right" />}
    </div>
  )
}

export default MenuItem
