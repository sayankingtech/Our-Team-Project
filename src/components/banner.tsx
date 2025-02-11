import React from 'react'

// @ts-ignore
// import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper,SwiperSlide} from 'react-swiper';

// @ts-ignore
import 'swiper/css';

const banner: React.FC = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default banner;
