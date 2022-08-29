import { Link ,  useLocation} from 'react-router-dom';
import React, {useState , useEffect} from "react";
import market from '../../assets/Market.png';
import { useSelector } from "react-redux";
import food from '../../assets/Food.png';
import box from '../../assets/Box2.png';
import cab from '../../assets/cab.png';

import './footer.css'
const FooterBar = () => {

    useEffect(() => {
        if (location && location.pathname) {
          const key =location.pathname.replace("/", "");
          setCurrent(key === "" ? menus[0].key : key);
        }
      });
    const location = useLocation();

    const isTheme = useSelector(state => state.theme)

    const menus = [
   
        {
          to: "/snapp",
          key:"snapp",
          name:'اسنپ',

          isActive:false,
          icon: <img src={cab} className="mb-1"  width={48} height={48} />,
        },
        {
            to: "/food",
            name:'غذا',

            key:"food",
            isActive:false,
            icon: <img src={food} className="mb-1" width={48} height={48} />,
          },
          {
            to: "/superMarket",
            name:'سوپرمارکت',

            key:"superMarket",
            isActive:false,
            icon: <img src={market} className="mb-1" width={48} height={48} />,
          },
          {
            to: "/snappBox",
            name:'اسنپ باکس',
            key:"snappBox",
            isActive:false,
            icon: <img src={box} className="mb-1"  width={48} height={48} />,
          },
          
         
        
        
      ];
      const [current, setCurrent] = useState(menus[0].key);

    
    const menuElement = menus.map((menu) => {
        return( 
        
            <div className='justify-between' >
                <Link to={menu.to}>
                    {menu.icon}
                </Link>
                <div className={isTheme === false ?'text-center flex justify-center items-center font-light text-xs' : 'flex justify-center items-center text-center font-light text-xs text-white'}>{menu.name}</div>
            </div>
    ) 
        
    })
     return (
        <>        

          <div className={isTheme === false ? 'background z' : "background2 z"}>
          <div className='footeri justify-center '>
            <div className='justify-center'>
              <div dir='rtl'  className={isTheme === false ? 'navbar justify-between w  mb-4 bg-white drop-shadow-lg text-neutral-content rounded-lg ' : "navbar justify-between w  mb-4  bg-neutral-800 drop-shadow-lg text-neutral-content rounded-lg "}>

                {menuElement}
              </div>
            </div>
          </div>
          </div>
        </>

    );
    }

export default FooterBar;
