import InventoryIncrease from "../home/inventoryIncrease/inventoryIncrease";
import {faWallet , faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector , useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";
import {type} from '../../actions'
import React , {useContext} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from "../home/home"

import "./navbar.css"
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
    const [showModal, setShowModal] = React.useState(false);
    const isTheme = useSelector(state => state.theme)
    const [value, setValue] = React.useState(0);
    const location = useLocation()
    const dispatch = useDispatch();

    const home =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/green-home.svg"/></div><div className="text-xs mr-1 mt-1">خانه</div></div> ;
    const offers =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/club.svg"/></div><div className="text-xs mr-1 mt-1">۰ امتیاز</div></div> ;
    const listOffers =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="	https://passenger-pwa-cdn.snapp.ir/images/super-app/green-voucher.svg"/></div><div className="text-xs mr-1 mt-1">تخفیف‌ها</div></div> ;
  
    return(
  
        <>
            <InventoryIncrease set={() => setShowModal(false)} visible={showModal}/>
        <header dir="rtl" className="bg-white  shadow-md w-full " style={{height:"90px",}}>
            <div className="flex flex-row justify-between items-center  w-full px-4 pt-4 pb-1 ">
                <div>
                    <img src="https://passenger-pwa-cdn.snapp.ir//logos/snapp-green.svg" width="75" height="27" className="object-contain" alt="logo" />
                </div>
                <div>
                    {isTheme == false ? console.log("false") : console.log("true")}
                    <button onClick={()=>dispatch(type())}  className="bg-whit rounded-full shadow-md">
                        <FontAwesomeIcon icon={faMoon} className='mx-auto text-gray-500' width={25} height={25} />
                    </button>
                    <button onClick={() => setShowModal(true)} className="bg-whit rounded-full shadow-md">
                        <FontAwesomeIcon icon={faWallet} className='mx-auto text-gray-500' width={25} height={25} />
                    </button>
                </div>
                
            </div>
            <Tabs  textColor="inherit" variant="fullWidth"  TabIndicatorProps={{style: {backgroundColor: "rgb(34, 170, 88)",}}}  value={value} onChange={(event, newValue) => { setValue(newValue); console.log(newValue)}} >
                <Tab  label={home}  />
                <Tab  label={offers}  />
                <Tab  label={listOffers}  />
            </Tabs>
            <TabPanel value={value} index={0}>
                {location.pathname === "/" ? <Home/> : null}
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </header>
        </> 
       
    )

}

export default Navbar;