import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";

const nav: React.FC = () => {
    return (
        <div className="grid grid-cols-12 h-22 w-screen justify-start items-center p-2">
            <div className='flex items-center col-span-4 p-1 place-content-around'>
                <div className="text-4xl font-bold">LOGO</div>
                <div className=''>
                    <div className='text-[18px] font-bold'>Delivery in 10 minutes</div>
                    <div className='flex text-[14px] font-medium items-center'>Kolkata, West Bengal, India <span className='ml-1 text-[18px]'><IoMdArrowDropdown /></span></div>
                </div>
            </div>
            <div className='flex col-span-5 items-center p-2 w-130 rounded-[10px] bg-stone-200 border border-stone-400'>
                <div><search><span className='text-[20px]'><FiSearch /></span></search></div>
                <div className=''><input className='h-10 ms-2 border-none outline-none' type="text" placeholder='Search your Grocery' /></div>
            </div>
            <div className='flex items-center col-span-3 p-1 place-content-around'>
                <div className='flex items-center justify-center h-15 w-full rounded-l-[10px] bg-amber-500 text-lg font-semibold'><span className='text-[20px] mr-[5px]'><CgProfile /></span>Login</div>
                <div className='h-15 w-2'></div>
                <div className='flex items-center justify-center h-15 w-full rounded-r-[10px] text-white bg-green-700 text-lg font-semibold'><span className='text-[20px] mr-[5px] '><HiOutlineShoppingCart /></span>My Cart</div>
            </div>
        </div>
    )
};

export default nav;
