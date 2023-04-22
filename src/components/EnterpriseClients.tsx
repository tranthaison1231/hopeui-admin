import Stroke from "@/assets/images/stroke.png"
import Arrow from "@/assets/images/arrow.png"
import CoreMin from "@/assets/images/core-min.png"
import Sphere from "@/assets/images/sphere.png"
import Ico from "@/assets/images/ico.png"
import Cylinder from "@/assets/images/cylinder.png"
import Cube from "@/assets/images/cube.png"
const EnterpriseClients =():JSX.Element => {
  return (
    <div className='flex flex-col items-start bg-[#FFFF] rounded-lg w-[1000px] h-[550px] m-auto'>
      <div className="flex flex-row justify-center items-center p-6">
        <div className="flex flex-col items-start">
            <h1 className="font-inter font-medium text-[19px] text-[#232D42] leading-8" >Enterprise Clients</h1>
            <div className="flex flex-row justify-center items-center gap-5 order-1">
                <img src={Stroke} alt="Stroke" />
                <p className="text-[#8A92A6] font-inter font-normal text-base leading-7 order-1">15 New Acquired ths month</p>
            </div>
        </div>
        <div className="">
        <img src={Arrow} alt="arrow" className="ml-[650px] w-[14px] h-[7px] cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col items-flex-start rounded-3xl w-full">
            <div className="flex flex-col justify-center items-flex-start p-2 bg-[#F5F6FA] w-full h-[44px]">
                <div className="flex flex-row justify-center items-center gap-32 w-[960px] h-[28px]">
                    <p className="font-inter text-base leading-7 font-medium text-[#8A92A6] order-0 w-[241px] h-[28px]">COMPANIES</p>
                    <p className="font-inter text-base leading-7 font-medium text-[#8A92A6] order-1 w-[190px] h-[28px]">CONTACTS</p>
                    <p className="font-inter text-base leading-7 font-medium text-[#8A92A6] order-2 w-[100px] h-[28px]">ORDER</p>
                    <p className="font-inter text-base leading-7 font-medium text-[#8A92A6] order-3 w-[220px] h-[28px] ">COMPLETION</p>
                </div>
            </div>
            <div className="flex flex-col items-start w-full h-[389px] order-1">
                <div className="flex flex-row justify-center items-center p-4 gap-26 w-full h-[77px] border-[1px] border-solid border-[#E9ECEF]">
                    <div className="flex  flex-row items-center gap-4 w-1/4 h-[45px]">
                        <img src={CoreMin} alt="CoreMin" className="bg-[#C4CCF8]"/>
                        <p className="font-inter font-normal text-base leading-7 text-[#232D42] order-1 w-[175px]">Addidas Sportwear</p>
                    </div>
                    <div className="w-[674px] flex flex-row justify-center items-start gap-26 order-1 mr-11">
                        <div className="w-[141px] h-[45px] flex flex-row relative">
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[0px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">SP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[32px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">PP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[64px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">MM</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-36 order-1 w-[415px] h-[38px]">
                            <p className="font-inter font-normal text-base leading-7 text-[#232D42] ml-64">$14,000</p>
                            <div className="flex flex-col items-start w-[188px] h-[38px] order-1">
                                <p className="font-inter font-normal text-base leading-7 text-[#232D42]" >60%</p>
                                <div className="w-[188px] h-[10px] order-1">
                                    <div className="w-[120px] h-[10px] bg-[#3A57E8] rounded-l-[50px] absolute"></div>
                                    <div className="w-[188px] h-[10px] bg-[#E9ECEF] rounded-r-[50px] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4 gap-26 w-full h-[77px] border-[1px] border-solid border-[#E9ECEF] bg-[#FBFCFC]">
                    <div className="flex  flex-row items-center gap-4 w-1/4 h-[45px]">
                        <img src={Sphere} alt="CoreMin" className="bg-[#C4CCF8]"/>
                        <p className="font-inter font-normal text-base leading-7 text-[#232D42] order-1 w-[175px]">Netflix</p>
                    </div>
                    <div className="w-[674px] flex flex-row justify-center items-start gap-26 order-1 mr-11">
                        <div className="w-[141px] h-[45px] flex flex-row relative">
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[0px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">SP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[32px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">MM</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-36 order-1 w-[415px] h-[38px]">
                            <p className="font-inter font-normal text-base leading-7 text-[#232D42] ml-64">$30,000</p>
                            <div className="flex flex-col items-start w-[188px] h-[38px] order-1">
                                <p className="font-inter font-normal text-base leading-7 text-[#232D42]" >25%</p>
                                <div className="w-[188px] h-[10px] order-1">
                                    <div className="w-[47px] h-[10px] bg-[#3A57E8] rounded-l-[50px] absolute"></div>
                                    <div className="w-[188px] h-[10px] bg-[#E9ECEF] rounded-r-[50px] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4 gap-26 w-full h-[77px] border-[1px] border-solid border-[#E9ECEF]">
                    <div className="flex  flex-row items-center gap-4 w-1/4 h-[45px]">
                        <img src={Cube} alt="CoreMin" className="bg-[#C4CCF8]"/>
                        <p className="font-inter font-normal text-base leading-7 text-[#232D42] order-1 w-[175px]">Shopifi Stores</p>
                    </div>
                    <div className="w-[674px] flex flex-row justify-center items-start gap-26 order-1 mr-11">
                        <div className="w-[141px] h-[45px] flex flex-row relative">
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[0px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">PP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[32px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">TP</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-36 order-1 w-[415px] h-[38px]">
                            <p className="font-inter font-normal text-base leading-7 text-[#232D42] ml-64">$8,500</p>
                            <div className="flex flex-col items-start w-[188px] h-[38px] order-1">
                                <p className="font-inter font-normal text-base leading-7 text-[#232D42]" >100%</p>
                                <div className="w-[188px] h-[10px] order-1">
                                    <div className="w-[188px] h-[10px] bg-[#1AA053] rounded-r-[50px] rounded-l-[50px] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4 gap-26 w-full h-[77px] border-[1px] border-solid border-[#E9ECEF]  bg-[#FBFCFC]">
                    <div className="flex  flex-row items-center gap-4 w-1/4 h-[45px]">
                        <img src={Cylinder} alt="CoreMin" className="bg-[#C4CCF8]"/>
                        <p className="font-inter font-normal text-base leading-7 text-[#232D42] order-1 w-[175px]">Boostrap Technologies</p>
                    </div>
                    <div className="w-[674px] flex flex-row justify-center items-start gap-26 order-1 mr-11">
                        <div className="w-[141px] h-[45px] flex flex-row relative">
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[0px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">SP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[32px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">PP</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[64px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">MM</p>
                            </div>
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[96px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">TP</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-36 order-1 w-[415px] h-[38px]">
                            <p className="font-inter font-normal text-base leading-7 text-[#232D42] ml-64">$20,500</p>
                            <div className="flex flex-col items-start w-[188px] h-[38px] order-1">
                                <p className="font-inter font-normal text-base leading-7 text-[#232D42]" >100%</p>
                                <div className="w-[188px] h-[10px] order-1">
                                    <div className="w-[188px] h-[10px] bg-[#1AA053] rounded-r-[50px] rounded-l-[50px] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-4 gap-26 w-full h-[77px] border-[1px] border-solid border-[#E9ECEF]">
                    <div className="flex  flex-row items-center gap-4 w-1/4 h-[45px]">
                        <img src={Ico} alt="CoreMin" className="bg-[#C4CCF8]"/>
                        <p className="font-inter font-normal text-base leading-7 text-[#232D42] order-1 w-[175px]">Community First</p>
                    </div>
                    <div className="w-[674px] flex flex-row justify-center items-start gap-26 order-1 mr-11">
                        <div className="w-[141px] h-[45px] flex flex-row relative">
                            <div className="box-border w-[45px] h-[45px] bg-[#FFFF] rounded-[33px] border-solid border-[2px] border-[#3A57E8] left-[0px] absolute">
                                <p className="font-inter text-base leading-7 font-medium text-[#3A57E8] w-[29px] h-[28px] ml-[8px] mt-[8px]">MM</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-36 order-1 w-[415px] h-[38px]">
                            <p className="font-inter font-normal text-base leading-7 text-[#232D42] ml-64">$9,800</p>
                            <div className="flex flex-col items-start w-[188px] h-[38px] order-1">
                                <p className="font-inter font-normal text-base leading-7 text-[#232D42]" >75%</p>
                                <div className="w-[188px] h-[10px] order-1">
                                    <div className="w-[141px] h-[10px] bg-[#3A57E8] rounded-l-[50px] absolute"></div>
                                    <div className="w-[188px] h-[10px] bg-[#E9ECEF] rounded-r-[50px] "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnterpriseClients
