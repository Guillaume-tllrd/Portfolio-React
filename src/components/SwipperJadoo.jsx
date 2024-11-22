import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/zoom'; 

const SwipperJadoo = () => {
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
                        <img src="/JadooHome.png" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="/Jadoo2.png" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="/jadoo3.png" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="/Jadoo4.png" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="/Jadoo5.png" alt="imageSite" />
                    </div>
                </SwiperSlide>
               
        </Swiper>
      </>
    );
};
export default SwipperJadoo;

