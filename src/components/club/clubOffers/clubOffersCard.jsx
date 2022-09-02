import React from "react";
import './clubOffers.css'

const ClubOffersCard = ({theme,items}) =>{
    return(
        <>
            <div style={{boxShadow:"rgb(0 0 0 / 10%) 0px 2px 12px 0px"}} className="rounded-md  bg-white mb-2 w-full">
                <div className="flex flex-row flex-nowrap justify-start items-start p-2">
                    <div className="flex ml-2  flex-1">
                        <img  className=" object-cover rounded-md w-full h-full" src={items.img} />
                    </div>
                    <div className="flex flex-1 flex-col h-20 justify-between ">
                        <div className="w-full"> 
                            <p className="text-xs">{items.title}</p>
                        </div>
                        <div className="">
                            <span className="text-xs">{items.desiredScore}</span>
                            <span style={{fontSize:"8.4px"}}>امتیاز</span>
                            <span style={{fontSize:"8.4px"}} className="text-gray-400">موردنیاز</span>
                        </div>
                    </div>
                </div>
                <div style={{borderTop:"1px dashed #ddd "}} className="flex border-dashed relative flex-row justify-between items-center p-2">
                    <div className="style"></div>
                    <div className="style2"></div>

                    <div className="flex">
                        <img className="w-8 shrink-0"  src={items.logo}/>
                        <p  className="text-sm mt-1 truncate text-gray-500 justify-start items-center flex mr-1 tracking-tighter	" >{items.value}</p>
                    </div>
                    <p className=" flex items-center" style={{fontSize:"11.9px",color:"rgb(34, 170, 88) "}}>مشاهده</p>

                </div>
            </div>

        </>
    )
}

export default ClubOffersCard