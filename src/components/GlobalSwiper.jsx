"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; 
import "swiper/css"; // Core Swiper styles

// Register the modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const GlobalSwiper = ({
  slidesData = [], 
  slidesPerView = 1,
  spaceBetween = 20,
  navigation = true, 
  pagination = true, 
  autoplay = false, 
  breakpoints = {}, 
  customSlide = (data) => (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-bold">{data.title}</h3>
      <p className="text-gray-600 mt-2">{data.description}</p>
    </div>
  ),
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination && { clickable: true }}
      autoplay={autoplay && { delay: 3000, disableOnInteraction: false }}
      breakpoints={breakpoints}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          {customSlide(slide)} {/* Render each slide */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GlobalSwiper;
