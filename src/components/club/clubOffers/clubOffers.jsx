import ClubOffersCard from "./clubOffersCard";
import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";

const ClubOffers = () =>{
    const isTheme = useSelector(state => state.theme)
    const[data , setData] = React.useState([])
    const theme = isTheme == false ;

    const getData = () =>{
        axios.get('http://localhost:3004/data')
        .then((res) => {
           // handle success
           setData(res.data);
         })
    }
    React.useEffect(() => {
        getData()
       
    }, [])
    return(
        <>
            <div className="pt-4 mx-4 mb-32">
                <div className="mb-2 ">
                    <img className="rounded-md" src="https://jek.snapp.ir/Loyalty/%20Banners/club-no_cti-new.jpg" alt=""  />
                    <span style={{width:"25%", height:"32px", bottom:"53px" , right:"7%", borderRadius:"32px",fontSize:"11px"}} className={theme ? " relative flex justify-center items-center bg-white" : "relative flex justify-center items-center bg-green-500 text-white"}>
                        <p>جایزه بگیرید</p>
                    </span>
                </div>
                {data.map((items)=>(
                    <ClubOffersCard items={items} theme={theme}/>
                ))}
            </div>
           
        
        </>
    )
}

export default ClubOffers