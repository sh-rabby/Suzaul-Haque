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
                <div className="hero-content flex-col lg:flex-row-reverse  border-b border-gray-200 pb-10">
                    <img src="/banner-03.png"
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] max-w-sm rounded-lg shadow-lg w-full py-6 px-6 hover:transition hover:scale-105" />
                    <div className="">
                        <p className="font-poppins text-[16px] py-4 uppercase text-[#3c3e41]">Welcome To Web Design and Development
                            World</p>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-relaxed">Hi, I'm <span
                            className="text-[#fc2164]">Suzaul Haque</span> <span className="text-[#fc2164]"> a</span> Web
                            Developer</h1>
                        <p className="font-poppinslg:w-9/12 py-6 text-[#707376]">
                            I specialize in crafting modern, responsive websites that bring ideas to life. From sleek designs to functional development, I turn your vision into a powerful online presence.
                        </p>
                        <div>
                            <h1 className='text-2xl  py-6 uppercase text-[#3c3e41] font-poppins'>Best Skill On</h1>
                            <div className='flex gap-4 py-4 '>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><FaHtml5 /></button>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><FaCss3Alt /></button>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><SiTailwindcss /></button>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><LuFigma /></button>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><IoLogoJavascript /></button>
                                <button className='p-4 shadow-md bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl text-2xl text-[#fc2164]  hover:transition hover:scale-105'><FaReact /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;