import "./quickAccess.css";
import React , {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const TicketOptions = (props) =>{
    const menus = [
        {
          to:"https://pwa.snapptrip.com/flights-home?ispwa=true&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_medium=icon&utm_source=Jek-Flight&app_version=v14.2.2",
          key:"flight",
          name:'پرواز',
          isActive:false,
          icon: <button  className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Trip/Flight.png
" className="mb-1"  width={50} height={50} />
                </button>,
        },
        {
            to:"https://pwa.snapptrip.com/interflights?token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&app_version=v14.2.2",
            key:"internationalFlights",
            name:'پرواز خارجی',
            isActive:false,
            icon: <button  className='relative' style={{width:"46px"}}> 
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Trip/Flight%20int..png" className="mb-1"  width={50} height={50} />
                  </button>,
          },
          {
            to:"https://pwa.snapptrip.com/bus?ispwa=true&refer=bus&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_medium=icon&utm_source=Jek-Bus&app_version=v14.2.2",
            key:"bus",
            name:'اتوبوس',
            isActive:false,
            icon: <button  className='relative' style={{width:"46px"}}> 
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Trip/Bus.png" className="mb-1"  width={50} height={50} />
                  </button>,
          },
          {
            to:"https://pwa.snapptrip.com/train?ispwa=true&refer=train&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_medium=icon&utm_source=Jek-Train&app_version=v14.2.2",
            key:"train",
            name:'قطار',
            isActive:false,
            icon: <button  className='relative' style={{width:"46px"}}> 
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Trip/Train.png" className="mb-1"  width={50} height={50} />
                  </button>,
          },
    ]
    return (
        <>
      {props.visible ? (
        <>
          <div
          dir="rtl"
            className=" flex z1 overflow-x-hidden overflow-y-auto fixed bottom-0   outline-none focus:outline-none"
          >
            <div className="relative  z w-full">
              {/*content*/}
              <div className= "border-0 rounded-md z shadow-lg anim2 relative  flex flex-col w-screen bg-white outline-none focus:outline-none" style={{height:"187px"}}>
                {/*header*/}
                <div  className="flex justify-between  w-full p-4  rounded-t">
                  <h3 className="text-xl font-semibold ">
                    بلیط سفر
                  </h3>
                  <button
                    className="p-1 bg-slate-50 rounded-full items-center  bg-transparent border-0   float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.set}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} className='mx-auto mt-1 text-black' width={25} height={25} />
                  </button>
                </div>

                
                
                <div dir='rtl' className='mx-6 mt-3 grid grid-cols-4  	 '>
        { menus.map((menu) => (
            <div className='mb-5 mx-auto  justify-center items-center relative'>
                <a target="_blanck" href={menu.to}>
                  <div className='items-center  my-0 mx-auto'>
                      {menu.icon} 
                      <div style={{wordSpacing:"-3.4px"}} className='text-xs  flex justify-center'>{menu.name}</div>              
                  </div>
                </a>
            </div>
         ))}

      </div>
                </div>
              </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-gray-500"></div>
        </>
      ) : null}
    </>
    )
}
export default TicketOptions