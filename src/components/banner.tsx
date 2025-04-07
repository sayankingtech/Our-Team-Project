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

const Banner: React.FC = () => {
    return (
        <div className='my-1 mx-2 rounded-md overflow-hidden border'>
            <Swiper
                // spaceBetween={50}
                // slidesPerView={3}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper !m-0"
            >
                <SwiperSlide className='mb-[15px]'>
                    <div className='mt-[15]'>
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
        </div>
    );
};

export default Banner;