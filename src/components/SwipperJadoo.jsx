import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const SwipperJadoo = () => {
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
          <SwiperSlide><img  src="./JadooHome.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./Jadoo2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./Jadoo3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./Jadoo4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./Jadoo5.png" alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperJadoo;

