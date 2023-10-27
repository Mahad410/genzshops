import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export default function ProductCarousel({ productData }) {
  const images = productData?.data[0]?.attributes?.productImages?.data;

  return (
    <div className='w-[640px] h-[480px]'>
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
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className='mySwiper w-[640px] h-[480px]'
        >
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index} className='w-[640px] h-[480px]'>
                <Image
                  src={image?.attributes?.url}
                  alt={images?.attributes?.name}
                  width={640}
                  height={480}
                />
              </SwiperSlide>
            );
          })}

          <div class='swiper-button-prev'>
            <ArrowCircleLeftTwoToneIcon />
          </div>
          <div class='swiper-button-next'>
            <ArrowCircleRightTwoToneIcon />
          </div>
        </Swiper>
    </div>
  );
}