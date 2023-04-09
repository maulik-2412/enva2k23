import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderimg from '../assets/images/img.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Particle from '../components/Particle';
export default function App() {
  return (
    <div className="swiperpage">
    <Particle/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
        <SwiperSlide><img src={sliderimg}/></SwiperSlide>
      </Swiper>
    </div>
  );
}