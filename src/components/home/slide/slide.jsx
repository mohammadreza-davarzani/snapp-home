import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import slideData from "./slideData.json"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css";
import "swiper/css";


const Slide = () => {
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
        {slideData.slideData.map((slide)=>(
        <SwiperSlide key={slide.key} >
          <a target="_blanck" href={slide.to}>
            <img src={slide.src} alt={slide.alt} />
          </a>
          </SwiperSlide>

        ))}
        
      </Swiper>
    </>
  );
}
export default Slide