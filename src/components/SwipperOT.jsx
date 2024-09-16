import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const SwipperOT = () => {
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
          <SwiperSlide><img  src="./OT1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./OT2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./OT3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./OT4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./OT5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img  src="./OT6.png" alt="" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};
export default SwipperOT;

