import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const SwipperTL = () => {
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
          <SwiperSlide><img  src="./TL1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./TL2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./TL3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./TL4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./TL5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./TL6.png" alt="" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};
export default SwipperTL;

