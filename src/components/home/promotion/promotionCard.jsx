import React from "react";



const PromotionCard = ({items}) =>{
    return(
        <>
            <div dir="rtl" className="flex -z-0 flex-col px-4 justify-between items-center">
                <div className="flex flex-row justify-between w-full mt-8 ">
                    <div className="mb-3 flex items-center">
                        <div className="ml-2 " style={{backgroundColor:items.color ,borderRadius:"1.5px", width:"10px", height:"10px"}}></div>
                        <p  style={{fontSize:"17.08px"}}>{items.title}</p>
                    </div>
                </div>
            </div>
            <div className=" mx-4  rounded-xl  shadow-xl">
                <div className="img2">
                    <img className="img-main1 relative rounded-xl" src={items.img}/>
                    <div style={{top:"-44px",width:"359px"}} className="flex justify-between relative rounded-b-xl px-2 h-11 bg-white  ...">
                        <div className="flex ">
                            <div className="w-8 h-8 my-2"><img  src={items.logo}/></div>
                            <div className="text-xs mt-1 text-gray-500 justify-center items-center flex px-2" >{items.contentText}</div>
                        </div>
                        <div className="border text-xs border-gray-400 rounded-xl my-2 justify-center items-center p-1.5">{items.textButton}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromotionCard;