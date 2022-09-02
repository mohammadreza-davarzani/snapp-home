import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from "react-redux";
import React from "react";


const HistoryPoint = () =>{
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    return(
        <>
            <div  className={theme ? " shadow-xl px-4 bg-white " : " bg-neutral-800 shadow-xl px-4 "} style={{height:"70px",}} >
                
                    <div className="flex justify-between items-center px-2 py-3">
                        <div style={{width:"130px",fontSize:"14px",boxShadow:"rgb(0 0 0 / 10%) 0px 2px 12px 0px "}} className="bg-white text-center rounded-full  px-2 py-3 ">جایزه‌های دریافتی</div>
                        <div style={{width:"130px",fontSize:"14px",boxShadow:"rgb(0 0 0 / 10%) 0px 2px 12px 0px "}} className="bg-white text-center rounded-full  px-2 py-3 ">جایزه‌های دریافتی</div>
                        <div style={{boxShadow:"rgb(0 0 0 / 10%) 0px 2px 12px 0px "}} className={theme ? "bg-white  flex items-center rounded-full w-12 h-12" : "bg-green-500 flex items-center rounded-full w-12 h-12 "}>
                            <FontAwesomeIcon icon={faQuestionCircle  } className={theme ?'mx-auto px-auto text-xl  text-gray-500' : 'mx-auto text-xl px-auto  text-gray-50'} width={25} height={25} />
                        </div>

                    </div>
            </div>
        </>
    )
}

export default HistoryPoint;