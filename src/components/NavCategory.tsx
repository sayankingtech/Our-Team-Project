import React from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";


const NavCategory: React.FC = () => {
    return (
        <>
            <div className='shadow-md'>
                <ul className='flex gap-4 mx-27 font-medium py-4'>
                    <li className='hover:text-green-700'>Vegetables & Fruits</li>
                    <li className='hover:text-green-700'>Dairy & Breakfast</li>
                    <li className='hover:text-green-700'>Munchies</li>
                    <li className='hover:text-green-700'>Cold Drinks & Juices</li>
                    <li className='hover:text-green-700'>Instant & Frozen Food</li>
                    <li className='hover:text-green-700'>Tea, Coffee & Health Drinks</li>
                    <li className='hover:text-green-700'>Bakery & Biscuits</li>
                    <li className='flex items-center hover:text-green-700'>More<div className='text-[20px]'><RiArrowDropDownLine /></div></li>
                </ul>
            </div >
        </>
    )
}

export default NavCategory;