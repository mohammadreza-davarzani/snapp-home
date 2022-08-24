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
            to:"https://jek.snapp.market/split-screen/?token=DL.q7ifQ-Gb%3AFhhBr2kdHv4l5MiG963wMsIxT5d-AnyrlyAvUc0gIHqD-Gg39Aw3wSZJuNKJ4B1EqzvyfgJuSKcOZQ&utm_campaign=marketparty-aug22&utm_medium=slider-pwa&utm_source=Jek&app_version=v14.2.2",
            key:"img1",
            alt:"img1",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/marketparty-aug22/marketparty%20fa.jpg"
        },
        {
            to:"https://m.snapp.express/?source=pwa-superapp-splitter&token=XP.2pHUhTxs%3ABye7ickKFWNXX6l3lso2qDT6gpRIf3oXDdRnLDPtiUGHDqR_qRistd_nm7GAZdVBeo0jJTBjBlggSg&utm_campaign=splitscreen-aug2022&utm_medium=jek-pwa&utm_source=snappmarket&app_version=v14.2.2",
            key:"img2",
            alt:"img2",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/express/Aug22/ex%20fa.jpg"
        },
        {
            to:"https://jek.snapp.market/?token=DL.q7ifQ-Gb%3AFhhBr2kdHv4l5MiG963wMsIxT5d-AnyrlyAvUc0gIHqD-Gg39Aw3wSZJuNKJ4B1EqzvyfgJuSKcOZQ&utm_campaign=hyperstar&utm_content=aug22&utm_medium=slider-pwa&utm_source=Jek&app_version=v14.2.2",
            key:"img3",
            alt:"img3",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/market-hyper%20star-aug22/Superapp_general_688x448_SM_edit-4.jpg"
        },
        {
            to:"https://snappticket.com/?token=DL.q7ifQ-Gb%3AFhhBr2kdHv4l5MiG963wMsIxT5d-AnyrlyAvUc0gIHqD-Gg39Aw3wSZJuNKJ4B1EqzvyfgJuSKcOZQ&utm_campaign=generalbanner&utm_content=aug22&utm_medium=slider-pwa&utm_source=jek&app_version=v14.2.2",
            key:"img4",
            alt:"img4",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/gishe-aug22/gishe%20fa.jpg"
        },
        
        {
            to:"https://pwa.snapp.doctor/api/redirect?path=https%3A%2F%2Fpwa.snapp.doctor%2Fprescription%3Fsource%3Dpharmacy_jek&token=DR.fLvkz53y%3AtmmRtMOqJGYdc_7nU6wshA7DJBnIYP2p2bkGxhot2FdkmnePh1_9KhF7trGFJT8det_NLUP0d5g-kw&utm_campaign=daro300-may22&utm_medium=slider&utm_source=jekPWA&app_version=v14.2.2",
            key:"img5",
            alt:"img5",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/Pharmacy-jan2022%2860k%29/delivery-service_Large-FA_2.jpg"
        },
        {
            to:"https://snapp.ir/blog/intercity-phase-one/?token=DL.q7ifQ-Gb%3AFhhBr2kdHv4l5MiG963wMsIxT5d-AnyrlyAvUc0gIHqD-Gg39Aw3wSZJuNKJ4B1EqzvyfgJuSKcOZQ&utm_campaign=intercity-aug22&utm_medium=slider&utm_source=jek-pwa&app_version=v14.2.2",
            key:"img6",
            alt:"img6",
            src:"https://jek.snapp.ir/Redesign-Banners/Sliders/intercity-aug22/trip%20fa.jpg"
        },
        {
          to:"https://app.snpb.ir/orders/ongoing?client=jek&initial=1&serviceId=34&token=DL.q7ifQ-Gb:FhhBr2kdHv4l5MiG963wMsIxT5d-AnyrlyAvUc0gIHqD-Gg39Aw3wSZJuNKJ4B1EqzvyfgJuSKcOZQ&utm_campaign=launchahvaz&utm_content=aug22&utm_medium=slider-pwa&utm_source=snapp&app_version=v14.2.2",
          key:"img7",
          alt:"img7",
          src:"https://jek.snapp.ir/Redesign-Banners/Sliders/truck-launch%20ahvaz-aug22/Inapp-334X224-Fa%20%286%29.jpg"
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
        {img.map((slide)=>(
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