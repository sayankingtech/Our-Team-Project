import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Nav: React.FC = () => {
    return (
        <>
            <div className="md:h-18 xs:h-10 w-[94%] mx-auto md:w-[98%] justify-start items-center px-[px] grid lg:grid-cols-12 md:grid-cols-12 xs:grid-cols-12">
                <div className='flex items-center lg:col-span-4 md:col-span-6 xs:col-span-6 place-content-around'>
                    <div className="lg:text-4xl md:text-[30px] font-bold">LOGO</div>
                    <div className=''>
                        <div className='lg:text-[18px] md:text-[12px] xs:text-[8px] font-bold'>Delivery in 10 minutes</div>
                        <div className='flex lg:text-[14px] md:text-[12px] xs:text-[6px] font-medium items-center'>Kolkata, West Bengal, India <span className='ml-1 xs:text-[10px] text-[18px]'><IoMdArrowDropdown /></span></div>
                    </div>
                </div>
                <div className="lg:flex lg:col-span-5 md:hidden xs:hidden items-center p-3 w-full max-w-lg rounded-lg bg-stone-200 border border-stone-400">
                    <FiSearch className="text-lg text-gray-600" />
                    <input className="lg:h-8 ms-2 w-full border-none outline-none bg-transparent text-gray-800 placeholder-gray-500" type="text" placeholder="Search your Grocery" />
                </div>
                <div className='flex items-center lg:col-span-3 md:col-span-6 xs:col-span-6 place-content-around md:w-[98%] xs:w-[98%]'>
                    <div className='flex items-center justify-center xs:h-6 md:h-11 lg:h-15 w-full md:rounded-l-[10px] xs:rounded-l-[6px]  bg-amber-500 xs:text-[15px] text-lg font-semibold'><span className='md:text-[20px] xs:text-[15px] mr-[5px]'><CgProfile /></span>
                        <span className='xs:hidden md:flex'>
                            Login</span></div>
                    <div className='md:w-2 xs:w-1'></div>
                    <div className='flex items-center justify-center xs:h-6 md:h-11 lg:h-15 w-full xs:rounded-r-[6px] md:rounded-r-[10px] text-white bg-green-700 xs:text-[15px] text-lg font-semibold'>
                        <span className='md:text-[20px] xs:text-[15px] mr-[5px]'><HiOutlineShoppingCart /></span>
                        <span className='xs:hidden md:flex'>
                            My Cart
                        </span>
                    </div>
                </div>
            </div>
            <div className="lg:hidden w-full xs:mt-1 md:mt-2 px-4">
                <div className="flex items-center xs:p-2 md:p-3 w-full mx-auto xs:rounded-md md:rounded-lg bg-stone-200 border border-stone-400">
                    <FiSearch className="xs:text-[10px] md:text-lg text-gray-600" />
                    <input className="h-4 ms-2 w-full xs:text-[10px] border-none outline-none bg-transparent text-gray-800 placeholder-gray-500" type="text" placeholder="Search your Grocery" />
                </div>
            </div>
        </>

    )
};

export default Nav;
