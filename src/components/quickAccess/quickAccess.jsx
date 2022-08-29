import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import TicketOptions from './ticketOptions';
import PanelOptions from './panelOptions';
import { useSelector } from "react-redux";
import React from 'react';
const QuickAccess = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const isTheme = useSelector(state => state.theme)
  const theme = isTheme == false ;
    const menus = [
   
        {
          key:"1",
          name:'بلیط سفر',
          isActive:false,
          icon: <button onClick={() => setShowModal(true)} className='relative' style={{width:"46px"}}> 
                    <div className='flex absolute h-4 p-0.5  justify-center items-center z-10' style={{fontSize:"15px", backgroundColor:"rgb(255, 67, 64)",left:"-15px",bottom:"1px", borderRadius:"9px", border:theme ? "3px solid rgb(255,255,255)":"3px solid rgb(17 ,24 ,39 )"}}><FontAwesomeIcon className='text-white' icon={faEllipsis}/></div>
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Trip/Trip.png" className="mb-1"  width={50} height={50} />
                </button>,
        },
        {
            to: "https://pwa.snapp.doctor/store/",
            name:'داروخانه',
            key:"2",
            isActive:false,
            icon:<button className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Edited%20icons/Pharmacy2.png" className="mb-1"  width={50} height={50} />
                 </button>,
                },
          {
            to: "https://m.snappshop.ir/services?token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_campaign=snapp&utm_medium=superapp&utm_source=pwa&app_version=v14.2.2s",
            name:'فروشگاه',
            key:"3",
            isActive:false,
            icon:<button className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Shop.png" className="mb-1"  width={50} height={50} />
                </button>,
                },
          {
            to: "https://app.snpb.ir/orders/ongoing?client=jek-pwa&serviceId=11&app_version=v14.2.2&initial=1",
            name:'وانت',
            key:"4",
            isActive:false, 
            icon:<button className='relative' style={{width:"46px"}}> 
                    <img src="	https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/van.png" className="mb-1"  width={50} height={50} />
                </button>
        },
        {
            to: "https://pwa.snapptrip.com/launcher?ispwa=true&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&app_version=v14.2.2",
            key:"5",
            name:'هتل',
            isActive:false,
            icon: <button className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Edited%20icons/Hotel2.png" className="mb-1"  width={50} height={50} />
                  </button>,
          },
          {
              to: "https://pwa.snapp.doctor/",
              name:'پزشک و مشاور',
              key:"6",
              isActive:false,
              icon:<button className='relative' style={{width:"46px"}}> 
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Doctor.png" className="mb-1 mr-2"  width={50} height={50} />
                   </button>,
                  },
            {
              to: "https://app.snpb.ir/orders/ongoing?client=jek-pwa&serviceId=34&app_version=v14.2.2&initial=1",
              name:'اسباب کشی',
              key:"7",
              isActive:false,
              icon:<button className='relative' style={{width:"46px"}}> 
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Edited%20icons/Moving1%202.png" className="mb-1"  width={50} height={50} />
                  </button>,
                  },
            {
              to: "https://digitalsignup.snapp.ir/?token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_campaign=bigprize-june2022&utm_medium=icon&utm_source=jek_pwa",
              name:'ثبت نام رانندگان',
              key:"8",
              isActive:false, 
              icon:<button className='relative' style={{width:"46px"}}> 
               <div className='flex absolute text-white  justify-center items-center z-10' 
                    style=
                    {{fontSize:"10px", backgroundColor:"rgb(255, 67, 64)",right:"45px",bottom:"38px", borderRadius:"11px", border:theme ? "3px solid rgb(255,255,255)":"3px solid rgb(17 ,24 ,39 )",padding:"0px 4px 1px"}}>ویژه</div>
                      <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Driver.png" className="mb-1 mr-3"  width={50} height={50} />
                  </button>
          },
          {
            to: "https://snappticket.com/?app_version=v9.2.0&client=superapp-pwa&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_campaign=snapp&utm_medium=icon&utm_source=superapp-pwa&app_version=v14.2.2",
            name:'گیشه',
            key:"9",
            isActive:false,
            icon:<button className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/gishe.png" className="mb-1"  width={50} height={50} />
                </button>,
          },
          {
            to: "https://pl.snapp.ir/register?openedVia=snappSuperAppPWA&token=DL.q7ifQ-Gb%3Az13V6Eo9yF82JtaHGzcVuy4EA9XEnYj-VItD_pLYFzdy5qJKTh-IOw3CXio6sexnqpvx0fJfvbfvTQ&utm_campaign=PWA&utm_medium=CreditIcon&utm_source=SuperApp&app_version=v14.2.2",
            name:'سرویس اعتباری',
            key:"10",
            isActive:false,
            icon:<button className='relative' style={{width:"46px"}}> 
                    <img src="https://jek.snapp.ir/Redesign-Icons/Design%20system-New%20icons/Edited%20icons/Credit2.png" className="mb-1 mr-3"  width={50} height={50} />
                </button>,
          },
          {
            name:'پنل سازمانی',
            key:"11",
            isActive:false,
            icon:<button onClick={() => setShowModal2(true)} className='relative' style={{width:"46px"}}> 
                    <div className='flex absolute h-4 p-0.5  justify-center items-center z-10' style={{fontSize:"15px", backgroundColor:"rgb(0, 209, 112)",left:"-15px",bottom:"1px", borderRadius:"9px", border:theme ? "3px solid rgb(255,255,255)":"3px solid rgb(17 ,24 ,39 )"}}><FontAwesomeIcon className='text-white' icon={faEllipsis}/></div>
                    <img src="https://jek.snapp.ir/Redesign-Icons/corporate/Corporate.png" className="mb-1"  width={50} height={50} />
                </button>,
          },
          
         
        
        
      ];
    return (
      <>
      <PanelOptions sets={() => setShowModal2(false)} visibles={showModal2}/>
      <TicketOptions set={() => setShowModal(false)} visible={showModal}/>
      <div dir='rtl' className='mx-4 mt-9 grid grid-cols-4  	 '>
        { menus.map((menu) => (
            <div key={menu.key} className='mb-5  mx-auto justify-center items-center relative'>
                <a target="_blanck" href={menu.to}>
                  <div className='items-center  my-0 mx-auto'>
                      {menu.icon} 
                      <div style={{wordSpacing:"-3.4px"}} className={theme ?'text-xs  flex justify-center' : 'text-xs  flex justify-center text-white'}>{menu.name}</div>              
                  </div>
                </a>
            </div>
         ))}

      </div>
      </>
    )
}

export default QuickAccess