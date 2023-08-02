interface Props {
  className?: string
}
const Footer = ({ className = '' }: Props): JSX.Element => {
  return (
    <div className={`${className} flex flex-row justify-between bg-white text-sm p-2`}>
      <div className=" flex flex-row gap-4">
        <div className="">Privacy Policy</div>
        <div className="">Terms of Use</div>
      </div>
      <div className="">
        © 2021 Hope UI, Made with ❤ by <a href="" className="text-blue-700"> IQONIC Design.</a>
      </div>
    </div>
  )
}

export default Footer
