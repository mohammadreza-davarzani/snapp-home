import InventoryIncrease from "../home/inventoryIncrease/inventoryIncrease";
import {faWallet , faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector , useDispatch } from "react-redux";
  import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";
import OffersTab from "../offersTab/offersTab";
import React , {useContext} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {type} from '../../actions';
import Home from "../home/home";

import "./navbar.css"
import Club from "../club/club";
function TabPanel(props) {
    const { children, value, index,  } = props;
    return (
       
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
      

    );
  }
const Navbar = () =>{
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    const [value, setValue] = React.useState(0);

    const listOffers =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="	https://passenger-pwa-cdn.snapp.ir/images/super-app/green-voucher.svg"/></div><div className={theme ? "text-xs mr-1 mt-1 text-black" : "text-xs mr-1 mt-1 text-white"}>تخفیف‌ها</div></div> ;
    const offers =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/club.svg"/></div><div className={theme ? "text-xs mr-1 mt-1 text-black" : "text-xs mr-1 mt-1 text-white"}>{value === 1 ? "اسنپ کلاب" : " امتیاز ۰"}</div></div> ;
    const home =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/green-home.svg"/></div><div className={theme ? "text-xs mr-1 mt-1 text-black" : "text-xs mr-1 mt-1 text-white"}>خانه</div></div> ;
   
    const [showModal, setShowModal] = React.useState(false);
    const location = useLocation()
    const dispatch = useDispatch();
  
    return(
  
        <>
            <InventoryIncrease set={() => setShowModal(false)} visible={showModal}/>
        <header dir="rtl" className={theme ? "bg-white  shadow-md w-full":" bg-neutral-800  shadow-xl w-full"} style={{height:"95px",}}>
            <div className="flex flex-row justify-between items-center  w-full px-4 pt-4 pb-1 ">
                <div>
                    <img src="https://passenger-pwa-cdn.snapp.ir//logos/snapp-green.svg" width="75" height="27" className="object-contain" alt="logo" />
                </div>
                <div>
                    
                    <button onClick={()=>dispatch(type())}  className={theme ?"bg-white rounded-full shadow-md ml-2 pt-0.5" : "pt-0.5 bg-green-500 rounded-full shadow-md ml-2"}>
                        <FontAwesomeIcon icon={faMoon} className={theme ?'mx-auto  text-gray-500' : 'mx-auto  text-gray-50'} width={25} height={25} />
                    </button>
                    <button onClick={() => setShowModal(true)} className={theme ?"bg-white rounded-full shadow-md pt-0.5" : "bg-green-500 rounded-full shadow-md pt-0.5 "}>
                        <FontAwesomeIcon icon={faWallet} className={theme ?'mx-auto  text-gray-500' : 'mx-auto  text-gray-50'} width={25} height={25} />
                    </button>
                </div>
                
            </div>
            <Tabs   variant="fullWidth"  TabIndicatorProps={{style: {backgroundColor: "rgb(34, 170, 88)",}}}  value={value} onChange={(event, newValue) => { setValue(newValue); console.log(newValue)}} >
                <Tab label={home}  />
                <Tab   label={offers}  />
                <Tab  label={listOffers}  />
            </Tabs>
            <TabPanel value={value} index={0}>
                {location.pathname === "/" ? <Home/> : null}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Club/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <OffersTab/>
            </TabPanel>
        </header>
        </> 
       
    )

}

export default Navbar;