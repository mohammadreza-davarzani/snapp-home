import { useSelector } from "react-redux";
import React from "react";
import Card from "./card";


const OfferedDisCount = () =>{
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    return(
        <>
            <div dir="rtl" className="flex -z-0 flex-col px-4 justify-between items-center">
                <div className="flex flex-row justify-between w-full mt-8 ">
                    <div className="mb-3 flex items-center">
                        <div className="ml-2 " style={{backgroundColor:"rgb(255, 206, 0)",borderRadius:"1.5px", width:"10px", height:"10px"}}></div>
                        <p className={theme ? "" : "text-white"}  style={{fontSize:"17.08px"}}>به دلخواه خود تخفيف بگيريد</p>

                    </div>
                    <p className=" flex items-center" style={{fontSize:"11.9px",color:"rgb(34, 170, 88) "}}>مشاهده همه</p>

                </div>
                <div className="text-gray-600 flex w-full justify-start items-start" style={{fontSize:"11.9px"}}>انتخاب از بين پيشنهادهاى متنوع</div>
            </div>
            <Card/>
        </>
    )
}

export default OfferedDisCount