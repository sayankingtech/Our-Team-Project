import React from 'react';

import image1 from '../assets/Images/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif'
import image2 from '../assets/Images/d5c1a66f-7e5e-481c-a825-a599d18298e4.avif'
import image3 from '../assets/Images/0be0d49a-4dae-408a-8786-afae1dd05cb1.avif'
import image4 from '../assets/Images/73bcc2db-0799-4014-ab75-029bfcdb8375.avif'
import image5 from '../assets/Images/870feefb-878e-45f8-92e5-55acf38cdbd2.avif'
import image6 from '../assets/Images/899ef50a-0a25-46fc-b0af-07f9e6f8cd1d.avif'
import image7 from '../assets/Images/58c3cbbf-bac3-4f79-aaa8-825a857ccd84.avif'
import bg_highlight from '../assets/Images/banner.jpg'

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

const CategoryHighlight: React.FC = () => {
    return (
        <>
            <div className='text-green-500 m-4 lg:text-2xl xs:text-lg font-semibold'>
                Dairy, Bread & Eggs
            </div>
            <div style={{
                backgroundImage: `url(${bg_highlight})`,
                width: '100%',
            }}>
                <Swiper
                    breakpoints={{
                        320:{
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 7,
                        },
                    }}
                    spaceBetween={20}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper`}
                >
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image1} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹28</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image2} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Kwality Special White Bread</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹40</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image3} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Amul Salted Butter</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>100 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹60</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image4} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Amul Musti Curd</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>200 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹23</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image5} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Kwality Brown Bread</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹50</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image6} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Gokul Full Cream Fresh Milk</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹36</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image7} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Yojona Poultry Power White Eggs</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>12 Pieces</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹106</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image1} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹28</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden xs:h-[200px] xs:w-[90px] md:h-[250px] md:w-[130px] lg:h-[300px] lg:w-[175px]'>
                            <div className='items-center'>
                                <img src={image2} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='lg:text-sm xs:text-[10px] md:text-[13px] lg:font-medium mb-2 h-[40px]'>Kwality Special White Bread</div>
                                <div className='text-stone-600 lg:text-sm xs:text-[8px] md:text-[12px] mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='lg:font-medium lg:text-sm xs:text-[12px] md:text-[16px]'>₹40</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center lg:px-[18px] xs:px-[10px] md:px-[16px] lg:py-[4px] xs:py-[2px] md:py-[3px] lg:text-sm xs:text-[10px] md:text-[12px] text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default CategoryHighlight;
