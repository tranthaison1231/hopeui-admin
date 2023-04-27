import SubscriptionItem from "./SubscriptionItem"

const Subscription = (): JSX.Element => {
    return (
        <div className=" grid grid-cols-4 gap-5">

            <SubscriptionItem
                fee="0"
                level="Free"
                detail1="10 users incleded"
                detail2="2GB of stogare"
                detail3="Email support"
                detail4="Help center access"
                startButton="Get Started"
                colorButton="#F16A1B" />
            <SubscriptionItem
                fee="15"
                level="Pro"
                detail1="20 users incleded"
                detail2="10GB of stogare"
                detail3=" Priority Email support"
                detail4="Help center access"
                startButton="Get Started"
                colorButton="#8A92A6" />
            <SubscriptionItem
                fee="29"
                level="Enterprise"
                detail1="30 users incleded"
                detail2="15GB of stogare"
                detail3="Call and email support"
                detail4="Help center access"
                startButton="Get Started"
                colorButton="#8A92A6" />
            <SubscriptionItem
                fee="49"
                level="Premium"
                detail1="50 users incleded"
                detail2="60GB of stogare"
                detail3="24 x 7 call support"
                detail4="Help center access"
                startButton="Get Started"
                colorButton="#8A92A6" />
        </div>
    )
}


export default Subscription