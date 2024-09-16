import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const SwipperAV = () => {
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
          <SwiperSlide><img  src="./AV1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./AV2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./AV3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./AV4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./AV5.png" alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperAV;
