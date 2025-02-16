import React from 'react'

import { FaFlagCheckered } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";

const footer: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-6 w-[80%] mx-auto'>
                <div className='col-start-1 col-end-6'>LOGO</div>
                <div className='col-start-7 col-end-12  flex'>
                    <div className='flex h-[40px] border border-stone-500 rounded-md items-center p-2 mx-1'>
                        <FaFlagCheckered className='m-1'/><span>Country</span> <RiArrowDropDownLine />
                    </div>
                    <div className='flex h-[40px] border border-stone-500 rounded-md items-center p-2 mx-1'>
                        <SlGlobe className='m-1' /><span>English</span><RiArrowDropDownLine />
                    </div>
                </div>
            </div>

        </>
    )
}

export default footer;
