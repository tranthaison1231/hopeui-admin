import arrowUp from '@/assets/images/up-arrow.png'
import ActivityItem from './AvtivityItem'

interface Props {
    percent: number
    activity: string
    day: string
    time: string

}

const ActivityOverview = ({ percent, activity, day, time }: Props): JSX.Element => {
    return (
        <div className="p-6 shadow-md bg-white rounded-xl w-[400px] text-right">
            <div>
                <h2 className=" text-xl font-semibold">Activity overview</h2>
                <div className=' flex items-center justify-end mt-2' >
                    <p className=" text-base text-[#8A92A6]">{percent}% this month</p>
                    <img src={arrowUp} alt="arrowUp" className=' h-4 ml-2 ' />
                </div>
            </div>



        </div>
    )
}


export default ActivityOverview