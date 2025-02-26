import React from 'react'

import { FaFlagCheckered } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <>
            <div className='my-8'>
                <div className='grid grid-cols-2 gap-6 w-[80%] mx-auto py-10'>
                    <div className='col-start-1 col-end-6 text-4xl font-bold'>LOGO</div>
                    <div className='col-start-7 col-end-12  flex'>
                        <div className='flex h-[40px] border border-stone-500 rounded-md items-center p-2 mx-6 font-semibold'>
                            <FaFlagCheckered className='m-1' /><span>Country</span> <RiArrowDropDownLine />
                        </div>
                        <div className='flex h-[40px] border border-stone-500 rounded-md items-center p-2 font-semibold'>
                            <SlGlobe className='m-1' /><span>English</span><RiArrowDropDownLine />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-[20px] mx-auto w-[80%]'>
                    <div className=''>
                        <h3 className='tracking-widest font-medium mb-3'>ABOUT LOGO</h3>
                        <ul className='list-none text-stone-700'>
                            <li>Who We Are</li>
                            <li>Blog</li>
                            <li>Work With Us</li>
                            <li>Investors Relations</li>
                            <li>Report Fraud</li>
                            <li>Press Kit</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='tracking-widest font-medium mb-3'>LOGOVERSE</h3>
                        <ul className='list-none text-stone-700'>
                            <li>Zomato</li>
                            <li>Blinkit</li>
                            <li>District</li>
                            <li>Feeding India</li>
                            <li>Hyperpure</li>
                            <li>Zomato Live</li>
                            <li>Logo Land</li>
                            <li>Weather Union</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='tracking-widest font-medium mb-3'>GROCERY SHOP</h3>
                        <ul className='list-none text-stone-700'>
                            <li>Partner With Us</li>
                            <li>Apps For You</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='tracking-widest font-medium mb-3'>LEARN MORE</h3>
                        <ul className='list-none text-stone-700'>
                            <li>Privacy</li>
                            <li>Security</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='tracking-widest font-medium mb-3'>SOCIAL LINKS</h3>
                        <div className='flex gap-2.5 text-2xl'>
                            <FaLinkedin />
                            <FaInstagramSquare />
                            <FaSquareXTwitter />
                            <FaYoutube />
                            <FaFacebookSquare />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;