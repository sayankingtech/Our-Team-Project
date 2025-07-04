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
        <div className='rounded-md xs:mx-2 lg:mx-1 xs:my-1 overflow-hidden'>
            <Swiper
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
                className="mySwiper !m-0"
            >
                <SwiperSlide className='xs:mb-[15px] md:mb-[15px] lg:mb-[10px]'>
                    <div className=''>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='lg:h-[250px] w-[100%]' src={image} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;