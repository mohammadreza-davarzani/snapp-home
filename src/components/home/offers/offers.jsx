import "swiper/css";
import axios from "axios";
import React from "react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import OffersItems from "./offersItems";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Offers = () =>{
    const [data , setData] = React.useState([])
    const [data2 , setData2] = React.useState([])
    const [data3 , setData3] = React.useState([])
    const [data4 , setData4] = React.useState([])
    const [data5 , setData5] = React.useState([])
    const [data6 , setData6] = React.useState([])


    
    const getData = () =>{
       
        axios.get('http://localhost:3003/data')
        .then((res) => {
           // handle success
           setData(res.data);
           console.log(res.data)
         })
         axios.get('http://localhost:3003/data2')
         .then((res) => {
            // handle success
            setData2(res.data);
            console.log("data2:",res.data)
          })
          axios.get('http://localhost:3003/data3')
          .then((res) => {
             // handle success
             setData3(res.data);
             console.log("data3:",res.data)
           })
          axios.get('http://localhost:3003/data4')
          .then((res) => {
             // handle success
             setData4(res.data);
             console.log("data4:",res.data)
           })
    }
    React.useEffect(() => {
        getData()
       
    }, [])
    return(
        <>
        <div dir="rtl" className="flex -z-0 flex-col px-4 justify-between items-center">
                <div className="flex flex-row justify-between w-full mt-8 ">
                    <div className="mb-3 flex items-center">
                        <div className="ml-2 " style={{backgroundColor:"rgb(255, 0, 164)" ,borderRadius:"1.5px", width:"10px", height:"10px"}}></div>
                        <p  style={{fontSize:"17.08px"}}>از بین محصولات متنوع انتخاب کنید</p>
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={30}
                freeMode={true}
               
                modules={[FreeMode, Pagination]}
                className=" h-40 "
            >
                {data.map((items)=>(
                    <SwiperSlide className="right-4 left-4"><OffersItems items={items}/></SwiperSlide>
                ))}
               
            </Swiper>
            <div dir="rtl" className="flex -z-0 flex-col px-4 justify-between items-center">
                <div className="flex flex-row justify-between w-full mt-8 ">
                    <div className="mb-3 flex items-center">
                        <div className="ml-2 " style={{backgroundColor:"rgb(88, 192, 249)" ,borderRadius:"1.5px", width:"10px", height:"10px"}}></div>
                        <p  style={{fontSize:"17.08px"}}>از بهترین متخصصان مشاوره بگیرید !</p>
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={30}
                freeMode={true}
               
                modules={[FreeMode, Pagination]}
                className="h-40 "
            >
                {data2.map((items)=>(
                    <SwiperSlide className="right-4 left-4"><OffersItems items={items}/></SwiperSlide>
                ))}
               
            </Swiper>
            <div dir="rtl" className="flex -z-0 flex-col px-4 justify-between items-center">
                <div className="flex flex-row justify-between w-full mt-8 ">
                    <div className="mb-3 flex items-center">
                        <div className="ml-2 " style={{backgroundColor:"rgb(0, 209, 112)" ,borderRadius:"1.5px", width:"10px", height:"10px"}}></div>
                        <p  style={{fontSize:"17.08px"}}>با اسنپ همراه باشید </p>
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="h-40 "
            >
                {data3.map((items)=>(
                    <SwiperSlide className="right-4 left-4"><OffersItems items={items}/></SwiperSlide>
                ))}
               
            </Swiper>
           
         
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>
    )
}
export default Offers

