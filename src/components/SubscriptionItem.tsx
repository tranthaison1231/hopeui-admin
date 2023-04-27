interface Props {
    fee: string
    level: string
    detail1: string
    detail2: string
    detail3: string
    detail4: string
    startButton: string
    colorButton: string
}

const SubscriptionItem = ({ fee, level, detail1, detail2, detail3, detail4, startButton, colorButton }: Props): JSX.Element => {
    return (
        <div className=" flex p-6 text-center flex-col gap-6 items-center mx-5 bg-white rounded-lg">
            <div className=" flex font-normal text-4xl " >
                ${fee}<p className="text-[#8A92A6]">/mo</p>
            </div>
            <div className=" font-inter text-2xl">
                {level}
            </div>
            <div className=" flex flex-col gap-4 text-base text-[#8A92A6] ">
                <p>{detail1}</p>
                <p>{detail2}</p>
                <p>{detail3}</p>
                <p>{detail4}</p>
            </div>
            <div className={`rounded-lg border border-[#8A92A6] px-6 py-2 inline-block box-border bg-[${colorButton}]`} >

                {startButton}

            </div>

        </div>
    )
}


export default SubscriptionItem