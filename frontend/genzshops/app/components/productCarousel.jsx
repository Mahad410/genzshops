'use client';
import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Keyboard, } from 'swiper/modules';

export default function ProductCarousel({ productData }) {
  const images = productData?.data[0]?.attributes?.productImages?.data;
  return (
    <div className='w-[592px] h-[592px]'>
        <Swiper
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}          
          direction={'horizontal'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className='mySwiper2 w-[592px] h-[592px]'
        >
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index} className='w-[592px] h-[592px]'>
                <Image
                  src={image?.attributes?.url}
                  alt={image?.attributes?.name}
                  width={592}
                  height={592}
                />
              </SwiperSlide>
            );
          })}

          <div className='swiper-button-prev'>
            <ArrowCircleLeftTwoToneIcon />
          </div>
          <div className='swiper-button-next'>
            <ArrowCircleRightTwoToneIcon />
          </div>
        </Swiper>
    </div>
  );
}