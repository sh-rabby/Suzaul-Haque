import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const HeaderTop = () => {
    return (
        <div>
            <div className='hidden bg-blue-600 lg:block xl:block'>
                <div className='w-9/12 mx-auto'>
                    <div className='flex items-center justify-between py-2'>
                        <Link to="tel:+8801685981149">
                            <div className='flex items-center gap-3 font-semibold text-white text-sm'>
                                <FaHome />
                                <p>+880 1685 981149</p>
                            </div>
                        </Link>
                        <Link to="mailto:rabby193@gmail.com">
                            <div className='flex items-center gap-3 font-semibold text-white text-sm'>
                                <MdEmail />
                                <p>rabby193@gmail.com</p>
                            </div></Link>


                        <div className='flex items-center gap-3 font-semibold text-[#3C3E41]' >
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className='w-7 h-7 p-2 bg-white rounded-full hover:transition hover:scale-110 hover:text-blue-600' /> </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='w-7 h-7 p-2 bg-white rounded-full hover:transition hover:scale-110 hover:text-blue-600' /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='w-7 h-7 p-2 bg-white rounded-full hover:transition hover:scale-110 hover:text-blue-600' /></a>

                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <RiLinkedinFill className='w-7 h-7 p-2 bg-white rounded-full hover:transition hover:scale-110 hover:text-blue-600' /></a>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;