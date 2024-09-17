import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/zoom'; // Assure-toi d'importer le CSS pour le zoom


const SwipperAV = () => {
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
                        <img src="./AV1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./AV2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./AV3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./AV4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src="./AV5.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwipperAV;
