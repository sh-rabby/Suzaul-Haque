import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactAddress = () => {
    return (
        <div className="">
            <h1 className='text-[#707376] text-xl'>Contact Information</h1>
            <div className='py-4 text-[#707376]'>
                <div className="flex items-center gap-3">
                    <SlLocationPin className="text-2xl text-blue-600"/>
                    <p>South Banasree, Khilgoan, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3 py-4">
                    <FaWhatsapp className="text-2xl text-blue-600" />
                    <Link
                        to="tel:+8801685981149"
                        className="transition hover:text-blue-600"
                    >
                        +8801685981149
                    </Link>
                </div>
                <div className="flex items-center gap-3 ">
                    <MdMailOutline className="text-2xl text-blue-600" />
                    <Link
                        to="mailto:suzaul193@gmail.com"
                        className="transition hover:text-blue-600"
                    >
                        rabby193@gmail.com
                    </Link>
                </div>
            </div>
            <div className='py-6'>
                <h1 className='text-[#707376] text-xl'>Visit my social profile and get connected</h1>
                <div className='flex items-center justify-start gap-4 py-6 text-2xl'>
                    <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-lg text-gray-600 hover:text-blue-600'><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook />
                    </a></button>
                    <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-lg text-gray-600  hover:text-blue-600'><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare />
                    </a></button>
                    <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-lg text-gray-600  hover:text-blue-600'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare />
                    </a></button>

                    <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-lg text-gray-600  hover:text-blue-600'><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a></button>
                </div>
            </div>

        </div>
    );
};

export default ContactAddress;