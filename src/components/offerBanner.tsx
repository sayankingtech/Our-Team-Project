import React from 'react';

import image1 from "../assets/Images/Pet-Care_WEB.avif"
import image2 from "../assets/Images/babycare-WEB.avif"
import image3 from "../assets/Images/pharmacy-WEB.avif"

import { Swiper, SwiperSlide } from 'swiper/react'

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/scrollbar';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

import '../App.css'

import { Keyboard, Autoplay } from 'swiper/modules';

const OfferBanner: React.FC = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                      },
                      480: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                      },
                      640: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                      },
                      1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                      },
                      1280: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                      }
                }}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Autoplay]}
                className="mySwiper offerBanner"
            >
                <SwiperSlide className='xs:mb-[5px] md:xs:mb-[5px] p-2'>
                    <div className='mt-[1px]'>
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='xs:mb-[5px] md:mb-[20px] p-2'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default OfferBanner
