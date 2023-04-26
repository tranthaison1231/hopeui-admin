import BillingContent from '@/components/BillingContent'
import { Background } from '@/components/Background'
import setting from '@/assets/svgs/settings.svg'
import FooterSpacial from '@/components/FooterSpacial'


const Billing = (): JSX.Element => {
  return (
    <div className="bg-gray-400 h-[137%] relative ">
      <Background className="" />
      <BillingContent className=""/>
      <img src={setting} alt="" className='absolute right-0 translate-y-32'/>
      <FooterSpacial className='w-full absolute bottom-0 '/>
    </div>
  )
}

export default Billing
