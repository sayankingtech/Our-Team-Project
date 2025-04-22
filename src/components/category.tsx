import React from 'react'

import image1 from "../assets/Images/paan-corner_web.avif"
import image2 from "../assets/Images/Slice-2_10.avif"
import image3 from "../assets/Images/Slice-3_9.avif"
import image4 from "../assets/Images/Slice-4_9.avif"
import image5 from "../assets/Images/Slice-5_4.avif"
import image6 from "../assets/Images/Slice-6_5.avif"
import image7 from "../assets/Images/Slice-7_3.avif"
import image8 from "../assets/Images/Slice-8_4.avif"
import image9 from "../assets/Images/Slice-9_3.avif"
import image10 from "../assets/Images/Slice-10.avif"
import image11 from "../assets/Images/Slice-11.avif"
import image12 from "../assets/Images/Slice-12.avif"
import image13 from "../assets/Images/Slice-13.avif"
import image14 from "../assets/Images/Slice-14.avif"
import image15 from "../assets/Images/Slice-15.avif"
import image16 from "../assets/Images/Slice-16.avif"
import image17 from "../assets/Images/Slice-17.avif"
import image18 from "../assets/Images/Slice-18.avif"
import image19 from "../assets/Images/Slice-19.avif"
import image20 from "../assets/Images/Slice-20.avif"
import { Link } from 'react-router-dom'


const Category: React.FC = () => {
  return (
    <>
      <div className='lg:grid lg:grid-cols-10 md:grid md:grid-cols-5 xs:grid xs:grid-cols-5'>
        <div>
          <Link to='/category'>
            <img src={image1} alt="" />
          </Link>
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
        <div>
          <img src={image7} alt="" />
        </div>
        <div>
          <img src={image8} alt="" />
        </div>
        <div>
          <img src={image9} alt="" />
        </div>
        <div>
          <img src={image10} alt="" />
        </div>
        <div>
          <img src={image11} alt="" />
        </div>
        <div>
          <img src={image12} alt="" />
        </div>
        <div>
          <img src={image13} alt="" />
        </div>
        <div>
          <img src={image14} alt="" />
        </div>
        <div>
          <img src={image15} alt="" />
        </div>
        <div>
          <img src={image16} alt="" />
        </div>
        <div>
          <img src={image17} alt="" />
        </div>
        <div>
          <img src={image18} alt="" />
        </div>
        <div>
          <img src={image19} alt="" />
        </div>
        <div>
          <img src={image20} alt="" />
        </div>
      </div>
    </>
  )
}

export default Category
