import React from "react";
import { useSelector } from "react-redux";

const OffersTab = () =>{
    const isTheme = useSelector(state => state.theme)
    const theme = isTheme == false ;
    return(
        <>
        
            <main style={{height:"89vh"}} className={theme? "flex grow bg-gray-100  " : "flex grow bg-gray-900" }>
                <div className="flex h-full justify-center items-center">
                    <div className="p-6 text-center">
                        <div className="flex justify-center items-center mb-6">
                            <img src="https://passenger-pwa-cdn.snapp.ir//backgrounds/percent.svg"/>
                        </div>
                        <p className={theme ? "text-center pb-2 px-4" : "text-center text-white pb-2 px-4"}>شما در حال حاضر تخفیفی ندارید.</p>
                        <p className={theme ? "text-center pb-2 px-4 text-sm text-gray-400" : "text-center text-sm text-gray-400 pb-2 px-4"}>اینجا میتوانید تمام تخفیف‌های خود را ببینید و آنها را کپی کنید</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default OffersTab