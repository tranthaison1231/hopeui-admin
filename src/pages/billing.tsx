import BillingContent from '@/components/BillingContent'
import Footer from '@/components/Footer'
import HeaderBackground from '@/components/HeaderBackground'


const Billing = (): JSX.Element => {
  return (
    <>
      <div className="bg-[#E5E5E5] p-5">
        <HeaderBackground />
        <BillingContent />
      </div>
      <Footer className="w-full mt-2" />
    </>
  )
}

export default Billing
