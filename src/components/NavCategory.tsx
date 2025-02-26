import React from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";


const NavCategory: React.FC = () => {
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
                    <li className='flex items-center'>More<RiArrowDropDownLine /></li>
                </ul>
            </div >
        </>
    )
}

export default NavCategory;