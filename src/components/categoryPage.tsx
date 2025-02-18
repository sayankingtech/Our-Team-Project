import React from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";

const categoryPage: React.FC = () => {
    return (
        <div className=''>
            <ul className='flex gap-5 my-2 mx-30'>
                <li>Vegetables & Fruits</li>
                <li>Dairy & Breakfast</li>
                <li>Munchies</li>
                <li>Cold Drinks & Juices</li>
                <li>Instant & Frozen Food</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Bakery & Biscuits</li>
                <li>More<RiArrowDropDownLine /></li>
            </ul>
        </div >
    )
}

export default categoryPage;
