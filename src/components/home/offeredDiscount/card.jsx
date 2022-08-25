import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import CardItems from "./cardItems";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import axios from "axios";
import React from "react";
import "swiper/css";




const Card = () =>{
    const [data , setData] = React.useState([])
    
    const getData = () =>{
        axios.get('http://localhost:3001/data')
        .then((res) => {
           // handle success
           setData(res.data);
           console.log(res.data)
         })
    }
    React.useEffect(() => {
        getData()
       
    }, [])
    return(
        <>
             <Swiper
                slidesPerView={1.2}
                spaceBetween={30}
                freeMode={true}
               
                modules={[FreeMode, Pagination]}
                className="h-80 "
            >
                {data.map((items)=>(
                    <SwiperSlide key={items.key} className="right-4 left-4"><CardItems key={items.key} items={items}/></SwiperSlide>
                ))}
               
            </Swiper>
            
           

        </>
    )
}

export default Card