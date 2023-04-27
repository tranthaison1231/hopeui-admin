import React from 'react'
import { ReactComponent as ArrowRight } from '@/assets/svgs/arrow-right.svg'


interface Props {
  icon: React.ReactElement
  name: string
  active?: boolean
  onClick?: () => void
}


const MenuItem = ({ icon, name, active, onClick }: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-row px-6 py-2 cursor-pointer ${active ? 'bg-blue-600 rounded-md' : 'justify-between'}`}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: active ? 'text-white' : 'text-[#8A92A6]' })}
      <div className={`px-3 pb-0 text-gray-500 text-base ${active ? 'text-white' : ''}`}>{name}</div>
      {!active && <ArrowRight className={active ? 'text-white' : 'text-[#8A92A6]'} alt="arrow right" />}
    </div>
  )
}

export default MenuItem
