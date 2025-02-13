import React from 'react';

import image1 from '../assets/Images/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif'
import image2 from '../assets/Images/d5c1a66f-7e5e-481c-a825-a599d18298e4.avif'
import image3 from '../assets/Images/0be0d49a-4dae-408a-8786-afae1dd05cb1.avif'
import image4 from '../assets/Images/73bcc2db-0799-4014-ab75-029bfcdb8375.avif'
import image5 from '../assets/Images/870feefb-878e-45f8-92e5-55acf38cdbd2.avif'
import image6 from '../assets/Images/899ef50a-0a25-46fc-b0af-07f9e6f8cd1d.avif'
import image7 from '../assets/Images/58c3cbbf-bac3-4f79-aaa8-825a857ccd84.avif'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';

// import './styles.css';

// @ts-ignore
import { Navigation } from 'swiper/modules';

const categoryHighlight: React.FC = () => {
    return (
        <>
            <div className='text-green-500 m-4 text-2xl font-semibold'>
                Dairy, Bread & Eggs
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper bg-stone-200"

            >

                <SwiperSlide className='p-3'>
                    <div className='bg-white'>
                        <div className='items-center'>
                            <img src={image1} className='' alt="" />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image6} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image7} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default categoryHighlight
