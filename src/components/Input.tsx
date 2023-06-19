import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps, ref: React.LegacyRef<HTMLInputElement>): JSX.Element => {
  return (
    <input
      className={`border-solid rounded-md border-[1px] border-box px-4 py-2 bg-[#FFFF] order-0 border-primary focus:bg-blue-100 hover:bg-blue-100 focus:outline-none ${
        props.className ?? ''
      }`}
      {...props}
      ref={ref}
    />
  )
}

export default React.forwardRef(Input)
