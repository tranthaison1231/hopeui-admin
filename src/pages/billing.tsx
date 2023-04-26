import BillingContent from '@/components/BillingContent'
import { Background } from '@/components/Background'
import FooterSpacial from '@/components/FooterSpacial'


const Billing = (): JSX.Element => {
  return (
    <div className="bg-gray-400 h-full relative ">
      <Background className="" />
      <BillingContent className=""/>
      <FooterSpacial className='w-full bottom-0'/>
    </div>
  )
}

export default Billing
