import gmail from '@/assets/images/gmail.png'
import facebook from '@/assets/images/facebook.png'
import instagram from '@/assets/images/instagram.png'
import linkedin from '@/assets/images/linkedin.png'

const Socials = (): JSX.Element => {
  return (
    <div className="flex flex-row items-start gap-6 order-1">
      <img src={gmail} alt="Gmail" className="cursor-pointer" />
      <img src={facebook} alt="Facebook" className="cursor-pointer" />
      <img src={instagram} alt="Instagram" className="cursor-pointer" />
      <img src={linkedin} alt="Linkedin" className="cursor-pointer" />
    </div>
  )
}

export default Socials
