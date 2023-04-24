import cardBg from '@/assets/images/card-bg.png'
import cardCircle from '@/assets/images/card-circle.png'
import BagIcon from '@/assets/images/bag-icon.png'
import BuyIcon from '@/assets/images/buy-icon.png'
const DebitCard = (): JSX.Element => {
  return (
    <div className='w-[479px] h-[627px] flex flex-col mt-10 ml-24 rounded-lg bg-white'>
        <img src={cardBg} alt="card-bg" className='relative'/>
        <div className='flex flex-col bg-white/25 backdrop-blur-lgq backdrop-opacity-100 border-solid border-2 border-white rounded-2xl text-white absolute ml-6 mt-11'>
          <div className='flex flex-row justify-between'>
          <div className='flex flex-col mt-6'>
          <h2 className='text-3xl font-extrabold ml-6'>VISA</h2>
          <p className='text-[13px] ml-6'>PREMIUM ACCOUNT</p>
          </div>
          <img src={cardCircle} alt="Card Circle" className='mt-6 ml-32 mr-2' />
          </div>
          <div className='flex flex-row text-2xl mt-10'>
          <p className='ml-6'>5789</p>
          <p className='mx-7'>****</p>
          <p className='mr-7'>****</p>
          <p>2847</p>
          </div>
          <div className='flex flex-row justify-between text-xs mt-12'>
            <p className='ml-6'>Card holder</p>
            <p className='mr-6'>Expire date</p>
          </div>
          <div className='flex flex-row justify-between mt-2 mb-7'>
            <p className='ml-6'>Anh Tran</p>
            <p className='mr-11'>06/26</p>
          </div>
        </div>
        <div className='flex flex-row ml-6 mt-6'>
          <img src={BagIcon} alt="Bag Icon" className='w-8 h-8'/>
          <div className='flex flex-col ml-6'>
            <span>1153</span>
            <p className='text-[#8A92A6] text-xs'>Products</p>
          </div>
          <img src={BuyIcon} alt="Bag Icon" className='w-8 h-8 ml-11'/>
          <div className='flex flex-col ml-6'>
          <span>81K</span>
            <p className='text-[#8A92A6] text-xs'>Order Served</p>
          </div>
        </div>
        <div className='flex flex-row justify-between ml-6 mt-6'>
            <span className='text-2xl'>$4,050,12,300</span>
            <span className='bg-[#1AA053] h-6 px-4 py-1 rounded-full text-white text-xs mr-6'>YoY 24%</span>
        </div>
        <p className='text-[#08B1BA] ml-6 mt-2'>Life time sales</p>
        <div className='flex flex-row text-white mt-8'>
          <button className='bg-[#3A57E8] px-8 py-2 rounded mr-14 ml-9'>View Project</button>
          <button className='bg-[#08B1BA] px-12 py-2 rounded ml-8'>Analytics</button>
        </div>
    </div>
  )
}

export default DebitCard
