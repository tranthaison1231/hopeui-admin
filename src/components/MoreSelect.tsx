import gmail from '../assets/images/gmail.png'
import facebook from '../assets/images/Facebook.png'
import instagram from '../assets/images/Instagram.png'
import linkedin from '../assets/images/Linkedin.png'

interface Props {
  title: string
  haveAccount: string
  clickTo: string
}

const MoreSelect = ({title,haveAccount,clickTo}:Props): JSX.Element => {
  const moveToSignup = () => {
    window.location.href = '/signup'
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 order-1">
      <p className="w-56 h-7 font-serif font-normal text-base leading-7 text-[#232D42] order-0">
        {title}
      </p>
      <div className="sociallink flex flex-row items-start gap-6 order-1">
        <img src={gmail} alt="Gmail" className="cursor-pointer" />
        <img src={facebook} alt="Facebook" className="cursor-pointer" />
        <img src={instagram} alt="Instagram" className="cursor-pointer" />
        <img src={linkedin} alt="Linkedin" className="cursor-pointer" />
      </div>
      <div className="flex flex-row gap-3 order-2">
        <p className="font-serif font-normal text-base leading-7 text-[#232D42]">{haveAccount}</p>
        <p
          onClick={moveToSignup}
          className="font-serif font-normal text-base leading-7 text-[#3A57E8] cursor-pointer hover:text-[#4a66f3]"
        >
          {clickTo}
        </p>
      </div>
    </div>
  )
}

export default MoreSelect
