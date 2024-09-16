import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const SwipperCuisine = () => {
    return (
        <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true}}
          parallax={true}
          keyboard={true}
          modules={[Navigation, Pagination, Parallax, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide><img  src="./cook1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./cook2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./cook3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./cook4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./cook5.png" alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperCuisine;

