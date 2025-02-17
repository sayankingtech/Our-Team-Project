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

const categoryHighlight: React.FC = () => {
    return (
        <>
            <div className='text-green-500 m-4 text-2xl font-semibold'>
                Dairy, Bread & Eggs
            </div>
            <div style={{
                backgroundImage: `url(${bg_highlight})`,
                width: '100%',
            }}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper`}
                >
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image1} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                <div className='text-stone-600 text-sm mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹28</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image2} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Kwality Special White Bread</div>
                                <div className='text-stone-600 text-sm mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹40</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image3} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Amul Salted Butter</div>
                                <div className='text-stone-600 text-sm mb-2'>100 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹60</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image4} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Amul Musti Curd</div>
                                <div className='text-stone-600 text-sm mb-2'>200 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹23</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image5} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Kwality Brown Bread</div>
                                <div className='text-stone-600 text-sm mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹50</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image6} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Gokul Full Cream Fresh Milk</div>
                                <div className='text-stone-600 text-sm mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹36</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image7} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Yojona Poultry Power White Eggs</div>
                                <div className='text-stone-600 text-sm mb-2'>12 Pieces</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹106</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image1} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                <div className='text-stone-600 text-sm mb-2'>500 ml</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹28</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-3'>
                        <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px]'>
                            <div className='items-center'>
                                <img src={image2} className='' alt="" />
                            </div>
                            <div className='p-2'>
                                <div className='text-sm font-medium mb-2 h-[40px]'>Kwality Special White Bread</div>
                                <div className='text-stone-600 text-sm mb-2'>400 gm</div>
                                <div className='flex place-content-between'>
                                    <div className='font-medium'>₹40</div>
                                    <div className='border border-green-800 rounded-md flex'>
                                        <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
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

export default categoryHighlight
