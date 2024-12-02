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
                        <img lazy="loading" src="/TL1.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/TL2.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/TL3.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/TL4.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/TL5.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/TL6.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
        </Swiper>
      </>
    );
};
export default SwipperTL;

