import React from 'react'

import categoryPageImage1 from '../assets/Images/milk category page.webp'
import image1 from '../assets/Images/5ee4441d-9109-48fa-9343-f5ce82b905a6.avif'
import image2 from '../assets/Images/d5c1a66f-7e5e-481c-a825-a599d18298e4.avif'
import image3 from '../assets/Images/0be0d49a-4dae-408a-8786-afae1dd05cb1.avif'
import image4 from '../assets/Images/73bcc2db-0799-4014-ab75-029bfcdb8375.avif'
import image5 from '../assets/Images/870feefb-878e-45f8-92e5-55acf38cdbd2.avif'
import image6 from '../assets/Images/899ef50a-0a25-46fc-b0af-07f9e6f8cd1d.avif'
import image7 from '../assets/Images/58c3cbbf-bac3-4f79-aaa8-825a857ccd84.avif'
import NavCategory from './NavCategory'


import { WithHeaderFooter } from '../HOC/HeaderAndFooter'

const CategoryPage: React.FC = () => {
    return (
        <>
            <NavCategory />
            <div className='w-[90%] mx-auto bg-stone-200 drop-shadow-md'>
                <div className='grid grid-cols-12 w-[100%] h-[100vh]'>
                    <div className='col-span-3 overflow-auto'>
                        <div className=''>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center p-[12px] my-[1px] ms-[1px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                            <div className='flex bg-white gap-2 items-center my-[1px] ms-[1px] p-[12px] cursor-pointer hover:bg-green-100 transition-all duration-300'>
                                <div className=' '>
                                    <img className='w-[50px] h-[60px] ' src={categoryPageImage1} alt="" />
                                </div>
                                <div>MILk</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-9 overflow-auto p-[1px]'>
                        <div className='flex bg-white w-[100%] h-[50px] justify-between items-center overflow-hidden px-[10px]'>
                            <div className='font-stretch'>Buy Milk Online</div>
                            <div className='flex items-center gap-x-1'>
                                <div className="">
                                    <span className="text-sm">Sort By</span>
                                </div>
                                <div className=''>
                                    <select className='h-[30px] w-[175px] text-green-800 text-sm rounded-sm focus:outline-none border border-stone-500' name="" id="">
                                        <option value="">Relevance</option>
                                        <option value="">Price: Low to High</option>
                                        <option value="">Price: High to Low</option>
                                        <option value="">Newest Arrivals</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-5 m-1 gap-[5px]'>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image2} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image2} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image2} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image2} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image2} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image3} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image4} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image5} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image6} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image7} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
                                    <div className='flex place-content-between'>
                                        <div className='font-medium'>₹28</div>
                                        <div className='border border-green-800 rounded-md flex'>
                                            <button className='justify-center items-center px-[18px] py-[4px] text-sm text-green-800'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg overflow-hidden '>
                                <div className='items-center'>
                                    <img src={image1} className='' alt="" />
                                </div>
                                <div className='p-2'>
                                    <div className='text-sm font-medium mb-2 h-[40px]'>Amul Taaze Toned Fresh Milk</div>
                                    <div className='bg-white text-sm mb-2'>500 ml</div>
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
                </div>
                <div className='bg-white m-[1px]'>
                    <div className='w-[95%] mx-auto'>
                        <h1 className='text-2xl py-1 pt-5'>MILK</h1>
                        <p>The richness of milk as nature’s perfect food is demonstrated by its high content of essential nutrients, variety in cooking, and most importantly its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals.</p>
                        <h1 className='text-2xl py-1 pt-5'>MILK</h1>
                        <p>The richness of milk as nature’s perfect food is demonstrated by its high content of essential nutrients, variety in cooking, and most importantly its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals.</p>
                        <h1 className='text-2xl py-1 pt-5'>MILK</h1>
                        <p>The richness of milk as nature’s perfect food is demonstrated by its high content of essential nutrients, variety in cooking, and most importantly its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithHeaderFooter(CategoryPage);
