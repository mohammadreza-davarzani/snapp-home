import { useSelector } from "react-redux";
import React from "react";



const NavbarClub = () =>{
    const iconAddress = "https://web-cdn.snapp.ir/club/gem.svg";
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    return(
        <>
            <header dir="rtl" className={theme ? "bg-white   w-full":" bg-neutral-800  shadow-xl w-full"} >
                <div className="flex justify-center items-center p-4 ">
                    <div style={{backgroundColor:"rgb(255, 221, 0) ", borderColor:"rgb(204, 177, 0)"}} className="flex justify-between items-center rounded-xl px-2 ">
                        <img src={iconAddress} alt="icon"/>
                        <p className="text-lg ml-1">887</p>
                        <p className="text-xs ml-1">امتیاز</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarClub;