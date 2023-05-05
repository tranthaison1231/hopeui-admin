
interface Props {
  dayon: string
  isDayOn: boolean
  haveEvent?: boolean, haveEvent2?: boolean, haveEvent3?: boolean, haveEvent4?: boolean ,haveEvent5?: boolean
  isEventOrange?: Boolean, isEventOrange2?: Boolean, isEventOrange3?: Boolean, isEventOrange4?: Boolean, isEventOrange5?: Boolean
  isEventGreen?: Boolean, isEventGreen2?: Boolean, isEventGreen3?: Boolean, isEventGreen4?: Boolean, isEventGreen5?: Boolean
  isEventRed? : Boolean, isEventRed2? : Boolean, isEventRed3? : Boolean, isEventRed4? : Boolean, isEventRed5? : Boolean
  isEventBlue? : Boolean, isEventBlue2? : Boolean, isEventBlue3? : Boolean, isEventBlue4? : Boolean, isEventBlue5? : Boolean
  EventName1?: String, EventName2?: String, EventName3?: String, EventName4?: String, EventName5?: String,
  haveLongEvent? : Boolean
}

const DayOn = ({ dayon, isDayOn, haveEvent, haveEvent2, haveEvent3, haveEvent4, haveEvent5, isEventOrange,isEventOrange2,isEventOrange3,isEventOrange4,isEventOrange5, isEventGreen,isEventGreen2,isEventGreen3,isEventGreen4, isEventGreen5, isEventRed, isEventRed2, isEventRed3, isEventRed4, isEventRed5, isEventBlue, isEventBlue2, isEventBlue3, isEventBlue4, isEventBlue5, EventName1,EventName2,EventName3, EventName4, EventName5,haveLongEvent}: Props): JSX.Element => {

  if (haveEvent && haveEvent2 && haveEvent3 && haveEvent4 && haveEvent5 === true) {
    return (
      <div>
        <div className="w-[220px] h-[220px] border-[1px] flex flex-col bg-[#C4CCF8]">
          <div className="flex flex-col items-flex-end p-2 w-[40px] h-[40px] ml-auto">
          <p className={`w-[24px] h-[24px] text-center font-inter text-[#8A92A6] font-normal text-base leading-6 ${isDayOn ? '' : 'opacity-40'}`}>
            {dayon}
          </p>
        </div>
        <div
          className={`${
            haveEvent ? 'w-[216px] h-[32px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ' '
          }${isEventOrange ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName1}</p>
        </div>
        <div
          className={`${
            haveEvent2 ? 'w-[216px] h-[32px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange2 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px]' : ''}
          ${isEventGreen2 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue2 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed2 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName2}</p>
        </div>
        <div
          className={`${
            haveEvent3 ? 'w-[216px] h-[32px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange3 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen3 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue3 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed3 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName3}</p>
        </div>
        <div
          className={`${
            haveEvent4 ? 'w-[216px] h-[32px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange4 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen4 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue4 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed4 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName4}</p>
        </div>
        <div
          className={`${
            haveEvent5 ? 'w-[216px] h-[32px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange5 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen5 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue5 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed5 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName5}</p>
        </div>
    </div>
    </div> );
  } 
  else {

  return (
    <div>
      <div className={`w-full h-[220px] border-[1px] flex flex-col ${isDayOn ? 'bg-[#FFFF]' : 'bg-[#E9ECEF]'}`}>
        <div className="flex flex-col items-flex-end p-2 w-[40px] h-[40px] ml-auto ">
          <p className={`w-[24px] h-[24px] text-center font-inter text-[#8A92A6] font-normal text-base leading-6 ${isDayOn ? '' : 'opacity-40'}`}>
            {dayon}
          </p>
        </div>
        <div
          className={`${
            haveEvent ? 'w-[216px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          } ${haveLongEvent ? 'w-[656px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''}
          ${isEventOrange ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6 text-start">{EventName1}</p>
        </div>
        <div
          className={`${
            haveEvent2 ? 'w-[216px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange2 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px]' : ''}
          ${isEventGreen2 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue2 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed2 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName2}</p>
        </div>
        <div
          className={`${
            haveEvent3 ? 'w-[216px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange3 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen3 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue3 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed3 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName3}</p>
        </div>
        <div
          className={`${
            haveEvent4 ? 'w-[216px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange4 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen4 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue4 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed4 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName4}</p>
        </div>
        <div
          className={`${
            haveEvent5 ? 'w-[216px] h-[33px] flex flex-row justify-center items-center py-[4px] px-[8px]' : ''
          }${isEventOrange5 ? ' bg-[#FCE1D1] border-solid border-[1px] border-[#F16A1B] rounded-[4px] text-[#F16A1B]' : ''}
          ${isEventGreen5 ? ' bg-[#D5EBDF] border-solid border-[1px] border-[#1AA053] rounded-[4px] text-[#1AA053]' : ''}
          ${isEventBlue5 ? ' bg-[#C4CCF8] border-solid border-[1px] border-[#3A57E8] rounded-[4px] text-[#3A57E8]' : ''}
          ${isEventRed5 ? ' bg-[#F2D6D3] border-solid border-[1px] border-[#C03221] rounded-[4px] text-[#C03221]' : ''}
          ${isDayOn ? '' : 'opacity-40'}`}
        >
          <p className="w-[199px] h-[24px] font-inter font-normal text-base leading-6">{EventName5}</p>
        </div>
      </div>
    </div>
  ) }
}

export default DayOn
