import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/zoom'; 

const SwipperTL = () => {
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
                        <img src="./TL1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./TL2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./TL3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./TL4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./TL5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./TL6.png" alt="" />
                    </div>
                </SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperTL;

