import React from 'react'

interface Props {
  children: React.ReactNode
  error?: string
  label: string
  className?: string
}

const FormItem = ({ children, label, error, className }: Props) => {
  return (
    <div className={className}>
      <label className="flex flex-col gap-2">
        <span className="font-normal text-base leading-7 text-[#8A92A6]">{label}</span>
        {children}
      </label>
      {error && <p className="text-error">{error}</p>}
    </div>
  )
}

export default FormItem
