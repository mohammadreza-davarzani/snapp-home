import HistoryPoint from "./historyPoint/historyPoint";
import ClubOffers from "./clubOffers/clubOffers";
import NavbarClub from "./nabvarClub/nvbarClub";
import { useSelector } from "react-redux";
import React from "react";
import './club.css'


const Club = () =>{
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    return(
        <>
            <NavbarClub/>
            <div  className={theme ? "scrollbar bg-gray-100 " : "scrollbar bg-gray-900"} id="target">
                <div className="force-overflow">
                    <HistoryPoint/>
                    <ClubOffers/>
                    
                  

                </div>
            </div>
        </>
    )
}

export default Club;