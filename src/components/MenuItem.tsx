import { ReactComponent as ArrowRight } from '@/assets/svgs/arrow-right.svg'
import { NavbarContext } from '@/contexts/NavbarContext'
import { cn } from '@/utils/cn'
import React, { useContext } from 'react'

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
      className={cn(`flex flex-row px-6 py-2 cursor-pointer`, {
        'bg-primary rounded-md': active,
        'justify-between': !active,
      })}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: active ? 'text-white' : 'text-[#8A92A6]' })}
      {!isCollapsed && <div className={cn('px-3 pb-0 text-gray-500 text-base', {
        'text-white': active
      })}>{name}</div>}
      {!active && <ArrowRight className={active ? 'text-white' : 'text-[#8A92A6]'} alt="arrow right" />}
    </div>
  )
}

export default MenuItem



