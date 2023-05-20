import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const input = cva('input', {
  variants: {
  },
  compoundVariants: [
    {
      className: [
        'border-solid',
        'border-box',
        'bg-white',
        'focus:outline-none',
        'border-primary',
        'focus:bg-blue-100',
        'hover:bg-blue-100'
      ]
    }
  ]
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

const Input = (
  { className, ...props }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => {
  return <input className={input({ className })} {...props} ref={ref} />
}

export default React.forwardRef(Input)
