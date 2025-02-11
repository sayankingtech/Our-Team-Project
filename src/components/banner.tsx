import { Swiper, SwiperSlide } from 'swiper/react';
import image from "../assets/Images/Group-33704.webp"
import "../App.css"

//@ts-ignore
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper
            // spaceBetween={50}
            // slidesPerView={3}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='mb-[15px]'>
                <div className=''>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={image} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};