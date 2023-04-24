import arrowUp from '../assets/images/up-arrow.png'

interface Props {
    percent: number
}

const ActivityOverview = ({ percent }: Props): JSX.Element => {
    return (
        <div className="p-6 shadow-md rounded-xl text-right">
            <div>
                <h2 className=" text-xl font-semibold">Activity overview</h2>
                <div className=' flex items-center justify-end mt-2' >
                    <p className=" text-base text-[#8A92A6]">{percent}% this month</p>
                    <img src={arrowUp} alt="arrowUp" className=' h-4 ml-2 ' />
                </div>
            </div>

            <div className=' grid grid-cols-12 mt-6'>
                <div className=' col-span-10 justify-end gap-8'>
                    <div className=' mb-8'>
                        <h2 className=" text-lg">$2400, Purchase</h2>
                        <p className=" text-base text-[#8A92A6]">11 JUL 8:10 PM</p>
                    </div>
                    <div className='mb-8'>
                        <h2 className=" text-lg">New order #8744152</h2>
                        <p className=" text-base text-[#8A92A6]">11 JUL 11 PM</p>
                    </div>
                    <div className='mb-8'>
                        <h2 className=" text-lg">Affilate Payout</h2>
                        <p className=" text-base text-[#8A92A6]">11 JUL 7:64 PM</p>
                    </div>
                    <div className='mb-8'>
                        <h2 className=" text-lg">New user added</h2>
                        <p className=" text-base text-[#8A92A6]">11 JUL 1:21 AM</p>
                    </div>
                    <div className='mb-8'>
                        <h2 className=" text-lg">Product added</h2>
                        <p className=" text-base text-[#8A92A6]">11 JUL 4:50 AM</p>
                    </div>

                </div>
                <div className=' col-span-2 justify-end'>

                    <div className=" w-5 h-5 border-2 border-[#3A57E8] rounded-full  " />
                    <div className=''></div>



                </div>

            </div>

        </div>
    )
}


export default ActivityOverview