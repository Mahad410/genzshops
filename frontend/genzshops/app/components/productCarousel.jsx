"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import  Image from 'next/image';
import testImg from 'public/img/intro-img.webp';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function ProductCarousel() {
  return (
    <div className='w-[600px] border-[1px]'>
      <Swiper
       direction={'horizontal'}
       slidesPerView={1}
       spaceBetween={30}
       mousewheel={true}
       pagination={{
         type: 'progressbar',
       }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} className='object-cover' objectFit='cover'/></SwiperSlide>
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} height={600}/></SwiperSlide>
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} height={600}/></SwiperSlide>
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} height={600}/></SwiperSlide>
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} height={600}/></SwiperSlide>
        <SwiperSlide className='w-[600px] h-[100px] bg-red-500'><Image src={testImg} width={600} height={600}/></SwiperSlide>
        <div class="swiper-button-prev">
  <ArrowCircleLeftTwoToneIcon/>
</div>
<div class="swiper-button-next">
   <ArrowCircleRightTwoToneIcon/>
</div>
      </Swiper>
    </div>
  );
}
