import React from 'react'
import { ReactComponent as ArrowRight } from '@/assets/svgs/arrow-right.svg'

interface Props {
  icon: React.ReactElement
  name: string
  active?: boolean
  onClick?: () => void
  isCollapsed?: boolean
}


const LogoItem = ({ icon, active, onClick, isCollapsed }: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-row py-2 cursor-pointer float-right ml-8 ${
        active ? 'bg-blue-600 rounded-md px-4 mx-4' : 'justify-between px-3'
      }`}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: active ? 'text-white' : 'text-[#8A92A6]' })}
      {!active && <ArrowRight className={active ? 'text-white' : 'text-[#8A92A6]'} alt="arrow right" />}
    </div>
  )
}


export default LogoItem


