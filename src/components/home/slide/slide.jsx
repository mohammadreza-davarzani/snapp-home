import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slide.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slide = () => {
    const img = [
        {
            key:"img1",
            alt:"img1",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/food-aug22/Inapp-334X224-Fa%20%285%29.jpg"
        },
        {
            key:"img2",
            alt:"img2",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/food-aug22/Inapp-334X224-Fa%20%285%29.jpg"
        },
        {
            key:"img3",
            alt:"img3",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/market-hyper%20star-aug22/Superapp_general_688x448_SM_edit-4.jpg"
        },
        {
            key:"img4",
            alt:"img4",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/gishe-aug22/gishe%20fa.jpg"
        },
        {
            key:"img5",
            alt:"img5",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/express/Aug22/ex%20fa.jpg"
        },
        {
            key:"img6",
            alt:"img6",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/Pharmacy-jan2022%2860k%29/delivery-service_Large-FA_2.jpg"
        },
        
        
    ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-lg "
        style={{margin:"5px 18px 0"}}
      >
        {img.map((img)=>(
        <SwiperSlide ><img src={img.src} alt={img.alt} /></SwiperSlide>

        ))}
        
      </Swiper>
    </>
  );
}
export default Slide