import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


const Features = () => {
    return (
        <div>
            <div className="w-11/12 py-6 pb-20 mx-auto md:w-10/12 lg:w-8/12 ">
                <div className="py-6 text-center">
                    <h3 className="font-bold text-blue-600 ">FEATURES</h3>
                    <h1 className="py-6 text-4xl font-bold text-[#3C3E41] lg:text-5xl">What I Do</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 py-10 pb-20 border-b  border-gray-200 text-[#3C3E41]">
                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaCode className="text-4xl text-blue-600 fa-solid fa-code" />

                        <h1 className="py-6 text-3xl font-semibold">Web Design</h1>
                        <p className="text-[#707376] font-poppins text-justify">I create visually appealing and user-focused website layouts. Every design is crafted to enhance engagement and brand identity. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaFigma className="text-4xl text-blue-600 fa-brands fa-figma" />
                        <h1 className="py-6 text-3xl font-semibold">Figma to HTML</h1>
                        <p className="text-[#707376] font-poppins  text-justify">I convert Figma designs into clean, responsive HTML code. Your design stays just as sharp on screen as it was in the prototype. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg  py-12 px-8  hover:transition hover:scale-105">
                        <AiOutlineHtml5 className="text-4xl text-blue-600 fa-brands fa-html5" />
                        <h1 className="py-6 text-3xl font-semibold">PSD to HTML</h1>
                        <p className="text-[#707376] font-poppins  text-justify">I take static PSD files and turn them into fully functional web pages. Precision and responsiveness are always top priorities. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaWordpressSimple className="text-4xl text-blue-600 fa-brands fa-wordpress-simple" />
                        <h1 className="py-6 text-3xl font-semibold">Wordpress</h1>
                        <p className="text-[#707376] font-poppins  text-justify">I develop custom WordPress solutions tailored to your needs. From themes to plugins, everything is built for easy control. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaReact className="text-4xl text-blue-600 fa-brands fa-laravel" />
                        <h1 className="py-6 text-3xl font-semibold">ReactJs</h1>
                        <p className="text-[#707376] font-poppins  text-justify">I build dynamic and high-performing web apps using React.js. Fast, interactive, and scalable—just the way modern apps should be. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <DiPhotoshop className="text-4xl text-blue-600 fa-solid fa-pen-nib" />
                        <h1 className="py-6 text-3xl font-semibold">Photoshop</h1>
                        <p className="text-[#707376] font-poppins  text-justify">I design stunning visuals and assets using Adobe Photoshop. Whether it’s for web or branding, quality and creativity lead the way. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;