import arrowUp from '@/assets/svgs/up-arrow.svg'
import ActivityItem from './AvtivityItem'

interface Props {
    percent: number
    activity: string
    day: string
    time: string

}

const ActivityOverview = ({ percent }: Props): JSX.Element => {
    return (
        <div className="p-6 shadow-md bg-white rounded-xl w-[400px] text-right">
            <div className=' mb-6'>
                <h2 className=" text-xl font-semibold">Activity overview</h2>
                <div className=' flex items-center justify-end mt-2' >
                    <p className=" text-base text-[#8A92A6]">{percent}% this month</p>
                    <img src={arrowUp} alt="arrowUp" className=' ml-[7px]' />
                </div>
            </div>

            <ActivityItem activity="$2400, Purchase" day="11 JUL" time="8:10 PM" />
            <ActivityItem activity="New order #8744152" day="11 JUL" time="11 PM" />
            <ActivityItem activity="Affilate Payout" day="11 JUL" time="7:64 PM" />
            <ActivityItem activity="New user added" day="11 JUL" time="1:20 AM" />
            <ActivityItem activity="Product added" day="11 JUL" time="4:50 AM" />


        </div>
    )
}


export default ActivityOverview