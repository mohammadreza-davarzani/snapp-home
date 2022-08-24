import './inventoryIncrease.css'
import React , {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import {faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'

const InventoryIncrease = (props) =>{
    const [prices , setPrices] = useState(0)
    let num = prices + 5000
    let num2 = prices - 5000

    return (
        <>
     
       
      {props.visible ? (
        <>
          <div
          dir="rtl"
            className=" flex overflow-x-hidden overflow-y-auto fixed bottom-0  z-50 outline-none focus:outline-none z1"
          >
            <div className="relative   w-full">
              {/*content*/}
              <div className= "border-0 rounded-md shadow-lg anim2 relative  flex flex-col w-screen bg-white outline-none focus:outline-none" style={{height:"387px"}}>
                {/*header*/}
                <div  className="flex justify-between  w-full p-4  rounded-t">
                  <h3 className="text-xl font-semibold ">
                    افزایش موجودی
                  </h3>
                  <button
                    className="p-1 bg-slate-50 rounded-full items-center  bg-transparent border-0   float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.set}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} className='mx-auto mt-1 text-black' width={25} height={25} />
                  </button>
                </div>
                <div className="border-b border-solid font-bold	 border-slate-200 p-0 relative flex flex-nowrap flex-row justify-between items-center ">
                    <div className="overflow-hidden	mx-auto  max-w-full">
                        <button className="flex up">
                            <span className=' my-auto'>کیف پول</span>
                            <img className='align-middle mt-1' src="https://passenger-pwa-cdn.snapp.ir//images/ap-logo.svg" width={36} height={36}/>
                        </button>
                    </div>
                </div>
                {/*body*/}
                <div className=" px-6 ">
                <div  className="flex justify-between  w-full mt-4 mb-2 rounded-t">
                  <h3 className="text-sm font-bold ">
                    موجودی شما     
                  </h3>
                  <h3 className="text-sm ">
                    0 ریال     
                  </h3>
                </div>
                </div>
                <div className='w-full  flex flex-wrap px-4 pb-6 pt-4'>
                    <button onClick={()=> setPrices('500,000')} className='h-10 text-xs price w-28 mx-auto px-2 border border-solid border-black rounded-md text-gray-500'>500,000 ریال</button>
                    <button onClick={()=> setPrices('200,000')} className='h-10 text-xs price w-28 mx-auto px-2 border border-solid border-black rounded-md text-gray-500'>200,000 ریال</button>
                    <button onClick={()=>setPrices('100,000')} className='h-10 text-xs price w-28 mx-auto px-2 border border-solid border-black rounded-md text-gray-500'>100,000 ریال</button>
                </div>
                <div className='w-full  flex flex-row px-6 pb-6 pt-3'>
                    <button onClick={()=>setPrices(num)} className='h-10 text-xs price w-auto p-1  border border-solid border-black rounded-md text-gray-500'>
                        <FontAwesomeIcon icon={faPlus} className='mx-auto mt-1 font-bold  text-md text-black' width={30} height={30} />
                    </button>
                    <div  className={prices === 0 ? ' text-xs text-center  w-full my-auto  px-2  text-gray-300' : ' text-xs text-center  w-full my-auto  px-2  text-gray-500' }>{prices === 0 ? "مبالغ دیگر" : prices + "ریال"}</div>
                    <button onClick={()=>setPrices(num2)} className='h-10 text-xs price w-auto p-1  border border-solid border-black rounded-md text-gray-500'>
                        <FontAwesomeIcon icon={faMinus} className='mx-auto mt-1 text-black' width={30} height={30} />
                    </button>
                </div>
                {/*footer*/}
                
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-40 py-3.5 rounded-md shadow hover:shadow-lg outline-none focus:outline-none btn mx-auto mt-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.set}
                  >
                    پرداخت
                  </button>
                </div>
              </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-gray-500"></div>
        </>
      ) : null}
    </>
    )
}
export default InventoryIncrease