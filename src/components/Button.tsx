import { cva, type VariantProps } from 'class-variance-authority'
import Loading from './Loading'

const button = cva('button', {
  variants: {
    intent: {
      primary: ['bg-primary', 'text-white'],
      secondary: ['bg-secondary', 'text-white']
    },
    size: {
      medium: ['text-base ', 'py-2', 'px-16', 'rounded-[4px]', 'font-normal', 'leading-7']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', className: ['hover:opacity-90', 'flex', 'items-center'] }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  isLoading?: boolean
}

const Button = ({ className, intent, size, isLoading, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={button({ intent, size, className })} disabled={isLoading} {...props}>
      {isLoading && <Loading />}
      {children}
    </button>
  )
}

export default Button
