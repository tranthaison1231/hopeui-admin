import { FormBilling } from "./FormBilling"
import logo from '@/assets/images/logo.png'

interface Props {
  className? : String
}

const BillingContent = ({className = ''}: Props): JSX.Element => {
  return (
    <div className={`${className}bg-white mx-8 rounded-md absolute top-[170px] p-5`}>
      <div className="flex flex-row justify-between py-2">
        <div className="font-bold text-3xl">Invoice #215462</div>
        <div className="">DUE DATE: Aug 19, 2022</div>
      </div>
      <div className="font-bold text-2xl">Hello, Devon Lane</div>
      <p className="py-4 text-sm">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <FormBilling />
      <div className="">
        <div className="flex flex-row gap-3 py-1">
          <img src={logo} alt="" className="h-full p-1" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula interdum tellus sed scelerisque sed
            habitasse pharetra odio. In sem nunc ac cursus maecenas. Et tincidunt ultrices non et quis elit. Libero
            dignissim laoreet mattis mollis molestie vitae odio morbi sed.
          </p>
        </div>
        <div className="py-1">Please pay within 15 days. Thank you for your business.</div>
      </div>
      <div className="flex flex-row justify-center rounded-sm bg-[#3A57E8] mx-[660px] text-white p-1">Print</div>
    </div>
  )
}

export default BillingContent
