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
                        <img lazy="loading" src="/AV1.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading"  src="/AV2.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/AV3.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/AV4.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img lazy="loading" src="/AV5.webp" alt="imageSite" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwipperAV;
