'use client';
import Image from 'next/image';
import { Navigation, Pagination, EffectCube, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import styles from './CustomSwiper.module.css';

const CustomSwiper = () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className={`${styles.container} w-full px-4 py-9`}
    >
      <SwiperSlide className="h-full w-full">
        <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="test" fill={true} />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <Image src="https://swiperjs.com/demos/images/nature-2.jpg" alt="test" fill={true} />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="test" fill={true} />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <Image src="https://swiperjs.com/demos/images/nature-4.jpg" alt="test" fill={true} />
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
