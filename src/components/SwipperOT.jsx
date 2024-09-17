import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/zoom'; 

const SwipperOT = () => {
    return (
        <>
        <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                parallax={true}
                keyboard={true}
                zoom={true}
                modules={[Navigation, Pagination, Parallax, Keyboard, Zoom]}
                className="mySwiper"
            >
          <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./OT1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src=".OT2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./OT3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./OT4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./OT5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./OT6.png" alt="" />
                    </div>
                </SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperOT;

