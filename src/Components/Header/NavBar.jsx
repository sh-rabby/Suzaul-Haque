import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";




const NavBar = () => {

  return (
    <div className='bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] shadow-lg sticky top-0 w-full z-50'>
      <div className='w-9/12 py-2 mx-auto'>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-6 lg:hidden">
                <CgMenuLeftAlt className='text-2xl text-blue-600' />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gradient-to-r from-[#e3e9ed]  to-[#fcfcfd]  text-[#3C3E41] mt-7 md:mt-8 w-75 h-screen px-8  md:px-10 py-6 -ml-18 md:-ml-32 shadow-md gap-2 ">
                <Link className='py-2 border-gray-300 border-b-1 hover:text-blue-600' to="/">Home</Link>
                <Link className='py-2 border-gray-300 border-b-1 hover:text-blue-600' to="/about">About</Link>
                <Link className='py-2 border-gray-300 border-b-1 hover:text-blue-600' to="/projects">Projects</Link>
                <Link className='py-2 border-gray-300 border-b-1 hover:text-blue-600' to="/contact">Contact</Link>

                <div className='flex items-center justify-center gap-4 py-4 text-2xl'>
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

                <div className='py-4'>
                  <a href="tel:+8801685981149">
                    <div className='flex items-center gap-4 py-2 font-medium justify-baseline '>
                      <FaWhatsapp className='text-blue-600' />
                      <p className='hover:text-blue-600' >+8801685981149</p>
                    </div>
                  </a>
                  <div className='flex items-center gap-4 py-4 font-medium justify-baseline '>
                    <MdOutlineEmail className='text-blue-600' />
                    <a href="mailto:rabby193@gmail.com">
                      <p className='hover:text-blue-600'>rabby193@gmail.com</p>
                    </a>
                  </div>
                </div>

              </ul>
            </div>
            <div className='flex items-center justify-center gap-8'>
              <Link to="/"><img src="/logo.png" alt="Logo" className="w-32 " /></Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex gap-6 text-[#3C3E41] font-bold">
            <Link className='hover:text-blue-600' to="/">Home</Link>
            <Link className='hover:text-blue-600' to="/about">About</Link>
            <Link className='hover:text-blue-600' to="/projects">Projects</Link>
            <Link className='hover:text-blue-600' to="/contact">Contact</Link>
          </div>
          <div className="gap-6 navbar-end">
            <button
              onClick={() => window.open("https://wa.me/8801685981149?text=Hi%20Suzaul%2C%20I%20would%20like%20to%20hire%20you.", "_blank")}
              className="text-white bg-blue-600 border-none rounded-lg shadow-lg cursor-pointer btn md:btn-md lg:btn-lg xl:btn-lg font-poppins hover:transition hover:scale-105"
            >
              Hire Me
            </button>
          </div>


        </div>
      </div>
    </div >
  );
};

export default NavBar;