import filter from '@/assets/images/filter.png'
import down from '@/assets/images/down.png'
import sent from '@/assets/images/sent.png'
import plus from '@/assets/images/plus.png'
import vector from '@/assets/images/vector.png'
import flag from '@/assets/images/flag.png'
import calender from '@/assets/images/calender.png'
import vector1 from '@/assets/images/vector1.png'
import note from '@/assets/images/note.png'
const CardIteam = (): JSX.Element => {
  return (

    <div className=" flex flex-col  bg-gray-200 w-full h-screen">
      <div className="flex flex-row justify-between mt-10 bg-white rounded-lg mx-7 py-7">
        <div className=" flex flex-row">
          <img src={filter} className='ml-7 mr-3' />
          <input type="text" className='font-inter text-[#717171]  ' placeholder='Filter by task name...' />
        </div>
        <div className=" flex flex-row font-inter text-sm mr-7 text-[#8A92A6] justify-center items-center">
          <p className='font-medium '>Soft By :</p>
          <img src={down} className='h-2' />
          <p className='font-normal ml-7'>Group By :</p>
          <p className='font-light ml-2'>Status </p>
          <img src={down} className='h-2 ml-1' />
          <img src={sent} className='h-2 ml-7' />
          <p className='font-light ml-3'>Share</p>
          <img src={down} className='h-2 ml-3'  />
        </div>
      </div>


      <div className="mt-10 flex flex-row mx-7 justify-between">
        <div className=" bg-white flex flex-row items-center justify-center py-6 ">
          <p className=' mr-40 ml-6'> Open Project 05</p>
          <p className=' mr-8 '> ...</p>
        </div>
        <div className=" bg-white flex flex-row items-center justify-center py-6 ">
          <p className=' mr-40 ml-6 text-[#FFD329]'> In Project 02</p>
          <p className=' mr-8 '> ...</p>
        </div>
        <div className=" bg-white flex flex-row items-center justify-center py-6 ">
          <p className=' mr-40 ml-6 text-[#409900]'> Reviews 01</p>
          <p className=' mr-8 '> ...</p>
        </div>
        <div className=" bg-white flex flex-row items-center justify-center py-6 ">
          <p className=' mr-40 ml-6 text-[#3A57E8]'> Closed 03</p>
          <p className=' mr-8 '> ...</p>
        </div>
      </div>


      <div className="mt-10 flex flex-row mx-7 justify-between ">
        <div className="  bg-gray-200 flex flex-row items-center justify-center py-6 border-dashed border-[1px] border-black  ">
          <p className=' mr-44 ml-6 text-[#717171] text-base'> New Task</p>
          <img src={plus} alt="" className='mr-8 ' />
        </div>
        <div className="   bg-gray-200 flex flex-row items-center justify-center py-6 border-dashed border-[1px] border-black ">
          <p className=' mr-44 ml-6 text-[#717171] text-base'> New Task</p>
          <img src={plus} alt="" className='mr-8 ' />
        </div>
        <div className="   bg-gray-200 flex flex-row items-center justify-center py-6 border-dashed border-[1px] border-black ">
          <p className=' mr-[200px] ml-6 text-[#717171] text-base'> New Task</p>
          <img src={plus} alt="" className='mr-8 ' />
        </div>
        <div className="   bg-gray-200 flex flex-row items-center justify-center py-6 border-dashed border-[1px] border-black ">
          <p className=' mr-44 ml-6 text-[#717171] text-base'> New Task</p>
          <img src={plus} alt="" className='mr-8 ' />
        </div>
      </div>



      <div className="flex flex-col mt-16 ml-7 bg-white w-1/5 h-52 ">
        <div className="flex flex-row mt-6 ml-6">
          <p className='text-[#717171] font-inter text-xs'>Dashboard plan</p>
          <img src={vector} className='mx-2 ' />
          <p className='text-[#717171] font-inter text-xs'> List</p>
          <p className='ml-24 mr-6'>...</p>
        </div>
        <p className='ml-6 text-black font-inter text-base'>Create Sidebar in Dashboard</p>
        <div className="flex flex-row  ml-7 mt-6 gap-6 ">
          <img src={flag} alt="" />
          <img src={calender} alt="" className='' />
          <img src={note} alt="" className='' />
          <img src={vector1} alt="" />
        </div>
        <div className=" bg-white w-96 h-72 p-5">

            <div className=" relative  ">
                <div className="  absolute justify-center items-center ">
                    <p className='text-[#444FBB] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>AT</p>
                </div>
                <div className="  absolute  pl-7 ">
                    <p className='text-[#E57D44] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>WE</p>
                </div>
                <div className="  absolute pl-[69px] ">
                    <p className='text-[#237635]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>GK</p>
                </div>
                <div className="  absolute pl-[95px] ">
                    <p className='text-[#C33E2E]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>+</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 ml-7 bg-white w-1/5 h-52 ">
        <div className="flex flex-row mt-6 ml-6">
          <p className='text-[#717171] font-inter text-xs'>Dashboard plan</p>
          <img src={vector} className='mx-2 ' />
          <p className='text-[#717171] font-inter text-xs'> List</p>
          <p className='ml-24 mr-6'>...</p>
        </div>
        <p className='ml-6 text-black font-inter text-base'>Create Sidebar in Dashboard</p>
        <div className="flex flex-row  ml-7 mt-6 gap-6 ">
          <img src={flag} alt="" />
          <img src={calender} alt="" className='' />
          <img src={note} alt="" className='' />
          <img src={vector1} alt="" />
        </div>
        <div className=" bg-white w-96 h-72 p-5">

            <div className=" relative  ">
                <div className="  absolute justify-center items-center ">
                    <p className='text-[#444FBB] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>AT</p>
                </div>
                <div className="  absolute  pl-7 ">
                    <p className='text-[#E57D44] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>WE</p>
                </div>
                <div className="  absolute pl-[69px] ">
                    <p className='text-[#237635]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>GK</p>
                </div>
                <div className="  absolute pl-[95px] ">
                    <p className='text-[#C33E2E]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>+</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 ml-7 bg-white w-1/5 h-52 ">
        <div className="flex flex-row mt-6 ml-6">
          <p className='text-[#717171] font-inter text-xs'>Dashboard plan</p>
          <img src={vector} className='mx-2 ' />
          <p className='text-[#717171] font-inter text-xs'> List</p>
          <p className='ml-24 mr-6'>...</p>
        </div>
        <p className='ml-6 text-black font-inter text-base'>Create Sidebar in Dashboard</p>
        <div className="flex flex-row  ml-7 mt-6 gap-6 ">
          <img src={flag} alt="" />
          <img src={calender} alt="" className='' />
          <img src={note} alt="" className='' />
          <img src={vector1} alt="" />
        </div>
        <div className=" bg-white w-96 h-72 p-5">

        <div className=" bg-white w-96 h-72 p-5">

            <div className=" relative  ">
                <div className="  absolute justify-center items-center ">
                    <p className='text-[#444FBB] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>AT</p>
                </div>
                <div className="  absolute  pl-7 ">
                    <p className='text-[#E57D44] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>WE</p>
                </div>
                <div className="  absolute pl-[69px] ">
                    <p className='text-[#237635]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>GK</p>
                </div>
                <div className="  absolute pl-[95px] ">
                    <p className='text-[#C33E2E]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>+</p>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className=" flex flex-row">
        <div className="flex flex-col mt-16 ml-7 bg-white w-1/5 h-52 ">
          <div className="flex flex-row mt-6 ml-6">
            <p className='text-[#717171] font-inter text-xs'>Dashboard plan</p>
            <img src={vector} className='mx-2 ' />
            <p className='text-[#717171] font-inter text-xs'> List</p>
            <p className='ml-24 mr-6'>...</p>
          </div>
          <p className='ml-6 text-black font-inter text-base'>Create Sidebar in Dashboard</p>
          <div className="flex flex-row  ml-7 mt-6 gap-6 ">
            <img src={flag} alt="" />
            <img src={calender} alt="" className='' />
            <img src={note} alt="" className='' />
            <img src={vector1} alt="" />
          </div>
          <div className=" bg-white w-96 h-72 p-5">

            <div className=" relative  ">
                <div className="  absolute justify-center items-center ">
                    <p className='text-[#444FBB] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>AT</p>
                </div>
                <div className="  absolute  pl-7 ">
                    <p className='text-[#E57D44] p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>WE</p>
                </div>
                <div className="  absolute pl-[69px] ">
                    <p className='text-[#237635]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>GK</p>
                </div>
                <div className="  absolute pl-[95px] ">
                    <p className='text-[#C33E2E]  p-3 rounded-lg  bg-gray-200 border-2  px border-white text-sm'>+</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default CardIteam