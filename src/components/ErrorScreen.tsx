import errorLogoBg from '@/assets/images/bg-logo-error.png'

interface Props {
  title: string
  subTitle: string
  imageURL: string
}

const ErrorScreen = ({ title, subTitle, imageURL }: Props): JSX.Element => {
  return (
    <div className="w-full flex h-screen relative">
      <img src={imageURL} alt="error logo background" className="w-full" />
      <div className="absolute text-center left-[50%] translate-x-[-50%] bottom-[110px] text-white">
        <h1 className="font-bold text-4xl leading-[37px] mt-7">{title}</h1>
        <p className="p-3">{subTitle}</p>
        <button className="bg-white text-black rounded-md px-4 py-2">Back to Home</button>
      </div>
    </div>
  )
}

export default ErrorScreen
