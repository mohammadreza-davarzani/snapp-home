import InventoryIncrease from "../home/inventoryIncrease/inventoryIncrease";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWallet } from '@fortawesome/free-solid-svg-icons'
import Typography from '@mui/material/Typography';
import React , {useState} from "react";
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
    const [value, setValue] = React.useState(0);
    const img =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/green-home.svg"/></div><div className="text-xs mr-1 mt-1">خانه</div></div> ;
    const img2 =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="https://passenger-pwa-cdn.snapp.ir/images/super-app/club.svg"/></div><div className="text-xs mr-1 mt-1">۰ امتیاز</div></div> ;
    const img3 =<div className="flex justify-between text-center items-center"><div className="relative p-1 flex bg-white rounded-full shadow-md "><img width={15} height={15} src="	https://passenger-pwa-cdn.snapp.ir/images/super-app/green-voucher.svg"/></div><div className="text-xs mr-1 mt-1">تخفیف‌ها</div></div> ;
  
    return(
  
        <>
            <InventoryIncrease set={() => setShowModal(false)} visible={showModal}/>
        <header dir="rtl" className="bg-white  shadow-md w-full " style={{height:"90px",}}>
            <div className="flex flex-row justify-between items-center  w-full px-4 pt-4 pb-1 ">
                <div>
                    <img src="https://passenger-pwa-cdn.snapp.ir//logos/snapp-green.svg" width="75" height="27" className="object-contain" alt="logo" />
                </div>
                <button onClick={() => setShowModal(true)} className="bg-whit rounded-full shadow-md">
                    <FontAwesomeIcon icon={faWallet} className='mx-auto text-gray-500' width={25} height={25} />
                </button>
            </div>
            <Tabs  textColor="inherit" variant="fullWidth"  TabIndicatorProps={{style: {backgroundColor: "rgb(34, 170, 88)",}}}  value={value} onChange={(event, newValue) => { setValue(newValue); console.log(newValue)}} >
                <Tab  label={img}  />
                <Tab  label={img2}  />
                <Tab  label={img3}  />
            </Tabs>
            <TabPanel value={value} index={0}>
            <div  className="scrollbar2  " id="target">
              <div className="force-overflow">
                <Home/>
              </div>
            </div>
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