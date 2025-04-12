import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";


const Hero = () => {
    return (
        <div>
            <div className="hero w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16">
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center border-b border-gray-200 pb-10 gap-10 lg:gap-40">

                    {/* Image on top for small screens, right for large */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/banner-03.png"
                            alt="Banner"
                            className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm py-6 px-6 hover:transition hover:scale-105"
                        />
                    </div>

                    {/* Text on bottom for small screens, left for large */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="font-poppins text-[16px] py-4 uppercase text-[#3c3e41]">
                            Welcome To Web Design and Development World
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed text-[#3C3E41]">
                            Hi, I'm <span className="text-[#fc2164]">Suzaul Haque</span>
                            <span className="text-[#fc2164]"> a</span> Web Developer
                        </h1>
                        <p className="font-poppins py-6 text-[#707376]">
                            I specialize in crafting modern, responsive websites that bring ideas to life. From sleek designs to functional development, I turn your vision into a powerful online presence.
                        </p>

                        <h2 className="text-2xl py-6 uppercase text-[#3c3e41] font-poppins">Best Skill On</h2>
                        <div className="grid grid-cols-3 gap-4 place-items-center md:flex md:flex-wrap md:justify-center lg:flex lg:flex-wrap lg:justify-start">
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><FaHtml5 /></button>
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><FaCss3Alt /></button>
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><SiTailwindcss /></button>
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><LuFigma /></button>
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><IoLogoJavascript /></button>
                            <button className="w-16 h-16 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164] flex items-center justify-center hover:transition hover:scale-105"><FaReact /></button>
                        </div>
                    </div>
                </div>
            </div>
            F
        </div>

    );
};

export default Hero;