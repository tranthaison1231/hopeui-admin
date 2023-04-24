import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const HeadOfDashboard = (): JSX.Element => {
  return (
    <div className="p-6 shadow-md absolute  ">HeadOfDashboard
        <div className="Frame1 flex flex-col items-start p-0 gap-[8px] w-[911px] h-[86px] flex-none order-none grow-0 "> 
            
           
            <img src="./src/assets/images/logo1.png" alt="" className=""></img>
            
        </div>    
        <h1 className="w-[230px] h-[48px] font-inter not-italic font-bold text-4xl text-center mt-[-60px] text-white  ">Hello Devs !</h1> 
        <h1 className=" p-[8px] text-white">We are on a missionn to help developers like you to build beautiful projects for FREE.</h1> 
        <div className="Frame2">
          <input  className="h-[35px] w-[180px] ml-[700px] px-2 bg-[#3A57E859] " />
          <h3 className="text-white  text-center font-inter ml-[700px] my-[-40px] ">  Anouncment</h3>
        
        </div>
        {/* <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer> */}
    </div>
  )
}


export default HeadOfDashboard