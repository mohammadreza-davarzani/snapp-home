import React from "react";
import "./offers.css"
const OffersItems = ({items}) =>{
    return(
        <>
        <div key={items.id} className="   rounded-xl  shadow-md">
                <div className="img-tw">
                    <img className="img-main-two relative rounded-xl" src={items.img}/>
                    <div style={{top:"-44px"}} className="bg-white flex flex-row flex-nowrap items-center justify-between relative h-11 p-2 rounded-b-xl">
                        <div className="flex justify-start items-center">
                            <img className="w-8 shrink-0"  src={items.logo}/>
                            <p style={{width:"148px"}} className="text-xs mt-1 text-gray-500 justify-start items-center flex mr-2 tracking-tighter	" >{items.contentText}</p>
                        </div>
                        <div className="border text-xs border-gray-400 rounded-xl my-2 justify-center items-center p-1.5">{items.textButton}</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default OffersItems