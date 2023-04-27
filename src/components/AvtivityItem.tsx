interface Props {
    activity: string
    day: string
    time: string
}

const ActivityItem = ({ activity, day, time }: Props): JSX.Element => {
    return (



        <div className=' flex justify-end mb-8'>
            <div className=' mr-4'>
                <h2 className=" text-lg">{activity}</h2>
                <p className=" text-base text-[#8A92A6]">{day} {time}</p>
            </div>
            <div>
                <div className="rounded-full border-[#3A57E8] border-2 bg-white w-[21px] h-[21px] relative">
                    <div className=" border-l border-[#E9ECEF] h-[74px] absolute right-1/2 top-[19px]  "></div>
                </div>
            </div>
        </div>


    )
}

export default ActivityItem 
