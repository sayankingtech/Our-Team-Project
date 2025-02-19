import React from 'react'

import categoryPageImage1 from '../assets/Images/milk category page.webp'
import image1 from '../assets/Images/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif'
import image2 from '../assets/Images/d5c1a66f-7e5e-481c-a825-a599d18298e4.avif'
import image3 from '../assets/Images/0be0d49a-4dae-408a-8786-afae1dd05cb1.avif'
import image4 from '../assets/Images/73bcc2db-0799-4014-ab75-029bfcdb8375.avif'
import image5 from '../assets/Images/870feefb-878e-45f8-92e5-55acf38cdbd2.avif'
import image6 from '../assets/Images/899ef50a-0a25-46fc-b0af-07f9e6f8cd1d.avif'
import image7 from '../assets/Images/58c3cbbf-bac3-4f79-aaa8-825a857ccd84.avif'

import { RiArrowDropDownLine } from "react-icons/ri";

const categoryPage: React.FC = () => {
    return (
        <>
            <div className='shadow-md'>
                <ul className='flex gap-4 mx-27 font-medium py-4'>
                    <li>Vegetables & Fruits</li>
                    <li>Dairy & Breakfast</li>
                    <li>Munchies</li>
                    <li>Cold Drinks & Juices</li>
                    <li>Instant & Frozen Food</li>
                    <li>Tea, Coffee & Health Drinks</li>
                    <li>Bakery & Biscuits</li>
                    <li className='flex'>More<RiArrowDropDownLine /></li>
                </ul>
            </div >
            <div className='grid grid-cols-12 py-3 w-[95%] h-[100vh] mx-auto '>
                <div className='col-span-3 overflow-auto'>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                    <div className='flex border-l border-b border-r gap-x-2 items-center  p-[6px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                        <div className=' '>
                            <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                        </div>
                        <div>MILk</div>
                    </div>
                </div>
                <div className='col-span-9 bg-gray-200 grid grid-cols-5 overflow-auto'>
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image2} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image3} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image4} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image5} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image6} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
                        <div className='items-center'>
                            <img src={image7} className='' alt="" />
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
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
                    <div className='bg-white rounded-lg overflow-hidden h-[300px] w-[175px] m-2'>
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
                </div>
            </div>
        </>
    )
}

export default categoryPage;
