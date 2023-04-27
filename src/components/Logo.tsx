
import logo from '../assets/images/logo.png'

interface Props {
  className?: string
}

const Logo = ({ className = '' }: Props): JSX.Element => {
  return (
    <div className={`${className} flex gap-2`}>
      <img src={logo} alt="logo" className="w-7 h-7" />
      <span className="text-3xl"> Hope Ui </span>
    </div>
  )
}

export default Logo
