import React from "react";


const CardItems = ({items}) =>{
    const number = Math.floor(Math.random() * 1001)
    return(
        <>
        <div className="card rounded-b-lg bg-white mt-4 	 shadow-md">
            <div className="img">
                <img className="img-main rounded-t-lg" src={items.img}/>
            </div>

            <div style={{}} className=" h-36  ">
                <div className="px-2 flex ">
                    <div className="w-12 h-12 my-2 "><img  src={items.logo}/></div>
                    <div className="text-sm text-black justify-center items-center flex px-2" >{items.textType}</div>
                </div>
                <div className="px-2 flex ">
                    <div className="w-4 h-4s mt-0.5"><img  src="https://jek.snapp.ir/Loyalty/loyaltygem.png"/></div>
                    <div style={{background:"rgb(245, 246, 247)"}} className=" flex justify-center items-center p-1 rounded-lg" >
                        <p className="text-xs text-gray-500 ">
                            امتیاز مورد نیاز: {items.desiredScore}
                        </p>
                    </div> 
                </div>
                <div  className="mt-3 border border-solid border-gray-100"></div>
                <div className="flex pt-4 justify-between px-2 items-center">
                    <div className="text-xs"> {number} امتیاز دیگر برای دریافت این تخفیف نیاز است</div>
                    <p className=" " style={{fontSize:"11.9px",color:"rgb(34, 170, 88) "}}>مشاهده</p>

                </div>
            </div>
           
        </div>
        </>
    )
}
export default CardItems