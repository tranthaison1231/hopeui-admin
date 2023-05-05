interface Props {

    day: string,
  
  
  }
const Months = ({day}:Props): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col items-flex-start w-[218.7px] h-full border-[1px] border-solid border-[#E3E3E3]">
        <div className="flex flex-row p-2 w-[218.7px] h-[40px] border-b-[1px]">
          <p className="text-center font-inter text-[#8A92A6] font-normal text-base leading-6 w-[199px] h-[24px]">
            {day}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Months
