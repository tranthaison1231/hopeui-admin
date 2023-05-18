import React, { useContext } from 'react'
import { ReactComponent as ArrowRight } from '@/assets/svgs/arrow-right.svg'
import { NavbarContext } from '@/contexts/NavbarContext'
import clsx from 'clsx'

interface Props {
  icon: React.ReactElement
  name: string
  active?: boolean
  onClick?: () => void
<<<<<<< HEAD
  isCollapsed?: boolean
=======
>>>>>>> a263800edd02179efd35767965ccf3799441809a
}


const MenuItem = ({ icon, name, active, onClick }: Props): JSX.Element => {
<<<<<<< HEAD
  return (
    <div
      className={`flex flex-row py-2 cursor-pointer ${
        active ? 'bg-blue-600 rounded-sm justify-center px-4' : 'justify-between px-6'
      }`}
=======
  const { isCollapsed } = useContext(NavbarContext)
  return (
    <div
      className={clsx(`flex flex-row px-6 py-2 cursor-pointer`, {
        'bg-primary rounded-md': active,
        'justify-between': !active,
      })}
>>>>>>> a263800edd02179efd35767965ccf3799441809a
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: active ? 'text-white' : 'text-[#8A92A6]' })}
      {!isCollapsed && <div className={clsx('px-3 pb-0 text-gray-500 text-base', {
        'text-white': active
      })}>{name}</div>}
      {!active && <ArrowRight className={active ? 'text-white' : 'text-[#8A92A6]'} alt="arrow right" />}
    </div>
  )
}

export default MenuItem



