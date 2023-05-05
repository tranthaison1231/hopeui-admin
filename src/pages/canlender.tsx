import arrow from '@/assets/images/arrow.png'
import DayOn from '@/components/DayOn'
import Day from '@/components/Day'


const Canlender = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start p-6 gap-6 w-[1583px] h-[1472px]">
      <div className="flex flex-row items-center justify-center gap-[446px] w-[1531px] h-[40px]">
        <div className="flex flex-row justify-center gap-4 w-[194px] h-[40px]">
          <div className="flex flex-row items-center w-[80px] h-[40px] bg-[#3A57E8] rounded-[4px]">
            <div className="w-[40px] h-[40px] relative">
              <img
                src={arrow}
                alt="arrow"
                className="absolute left-[26%] right-[26%] top-[26%] bottom-[26%] cursor-pointer"
              />
            </div>
            <div className="w-[40px] h-[40px] relative rotate-180">
              <img
                src={arrow}
                alt="arrow"
                className="absolute left-[26%] right-[26%] top-[26%] bottom-[26%] cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center px-[24px] py-[8px] w-[98px] h-[40px] bg-[#C4CCF8] rounded-[4px] order-1 font-inter text-white font-normal text-base leading-6 cursor-pointer">
            Today
          </div>
        </div>
        <p className="font-inter font-semibold text-[28px] leading-9 w-[131px] h-[36px] order-1">July 2021</p>
        <div className="flex flex-row justify-center items-center w-[314px] h-[40px] bg-[#3A57E8] rounded-[4px] order-2">
          <div className="flex flex-row justify-center items-center px-[24px] py-[8px] w-[107px] h-[40px] bg-[#0048B2] rounded-l-[4px] rounded-r-[4px] font-inter text-white font-normal text-base leading-6 cursor-pointer">
            Months
          </div>
          <div className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-6 order-1 w-[207px] font-inter text-white font-normal text-base leading-6 cursor-pointer">
            <p className="w-[53px] h-[24px]">Weeks</p>
            <p className="w-[32px] h-[24px]">Day</p>
            <p className="w-[26px] h-[24px]">List</p>
          </div>
        </div>
      </div>
      <div className="box-border flex flex-row w-[1531px] h-[1360px] border-[1px] border-solid border-[#E3E3E3] order-1">
        <div className='flex flex-col'>
          <Day day="Sun"/>
          <DayOn dayon="27" isDayOn={false}/>
          <DayOn dayon="4" isDayOn={true} haveEvent={true} isEventGreen={true} EventName1='Long Event'/>
          <DayOn dayon="11" isDayOn={true} haveEvent={true} isEventBlue={true} EventName1='5:30a Birthday Party'/>
          <DayOn dayon="18" isDayOn={true}/>
          <DayOn dayon="25" isDayOn={true}/>
          <DayOn dayon="1" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Mon"/>
          <DayOn dayon="28" isDayOn={false}/>
          <DayOn dayon="5" isDayOn={true} />
          <DayOn dayon="12" isDayOn={true}/>
          <DayOn dayon="19" isDayOn={true} haveEvent={true} isEventOrange={true} EventName1='5:30a Doctor Meeting' haveEvent2={true} isEventGreen2={true} EventName2='5:30a Meeting' haveEvent3={true} isEventBlue3={true} EventName3='5:30a Repeating Event' haveEvent4={true} isEventBlue4={true} EventName4='5:30a Click for Google' haveEvent5={true} isEventOrange5={true} EventName5='5:30a Birthday Party'/>
          <DayOn dayon="26" isDayOn={true}/>
          <DayOn dayon="2" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Tue" />
          <DayOn dayon="29" isDayOn={false} haveEvent={true} isEventBlue={true} EventName1='5:30a Click for Google'/>
          <DayOn dayon="6" isDayOn={true} haveEvent2={true} isEventBlue2={true} EventName2='5:30a Repeating Event'/>
          <DayOn dayon="13" isDayOn={true} haveEvent={true} isEventGreen={true} EventName1='5:30a Meeting'/>
          <DayOn dayon="20" isDayOn={true} haveEvent={true} isEventBlue={true} EventName1='5:30a All day Event'/>
          <DayOn dayon="27" isDayOn={true} haveEvent={true} isEventBlue={true} EventName1='5:30a Repeating Event'/>
          <DayOn dayon="3" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Wed" />
          <DayOn dayon="30" isDayOn={false}/>
          <DayOn dayon="7" isDayOn={true} haveEvent={true} isEventOrange={true} EventName1='5:30a Repeating Event'/>
          <DayOn dayon="14" isDayOn={true}/>
          <DayOn dayon="21" isDayOn={true}/>
          <DayOn dayon="28" isDayOn={true}/>
          <DayOn dayon="4" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Thu" />
          <DayOn dayon="1" isDayOn={true} haveEvent={true} isEventBlue={true} EventName1='5:30a All day Event'/>
          <DayOn dayon="8" isDayOn={true}/>
          <DayOn dayon="15" isDayOn={true}/>
          <DayOn dayon="22" isDayOn={true}/>
          <DayOn dayon="29" isDayOn={true} haveEvent={true} isEventGreen={true} EventName1='5:30a Repeating Event'/>
          <DayOn dayon="5" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Fri" />
          <DayOn dayon="2" isDayOn={true}/>
          <DayOn dayon="9" isDayOn={true} haveEvent={true} isEventRed={true} EventName1='5:30a Repeating Event'/>
          <DayOn dayon="16" isDayOn={true}/>
          <DayOn dayon="23" isDayOn={true}/>
          <DayOn dayon="30" isDayOn={true}/>
          <DayOn dayon="6" isDayOn={false}/>
        </div>
        <div className='flex flex-col'> 
          <Day day="Sat" />
          <DayOn dayon="3" isDayOn={true} haveEvent={true} isEventGreen={true} EventName1='5:30a Long Event'/>
          <DayOn dayon="10" isDayOn={true}/>
          <DayOn dayon="17" isDayOn={true} haveEvent={true} isEventOrange={true} EventName1='5:30a Birthday Party'/>
          <DayOn dayon="24" isDayOn={true}/>
          <DayOn dayon="31" isDayOn={true}/>
          <DayOn dayon="7" isDayOn={false} />
        </div>
      </div>
    </div>
  )
}

export default Canlender
