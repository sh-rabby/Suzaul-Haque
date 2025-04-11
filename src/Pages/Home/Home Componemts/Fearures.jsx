import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

const Fearures = () => {
    return (
        <div>
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-6 pb-20 ">
                <div className="text-center py-6">
                    <h3 className="text-[#fc2164] font-medium ">FEARURES</h3>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">What I Do</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 py-10 pb-20 border-b  border-gray-200 ">
                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaCode className="fa-solid fa-code text-[#fc2164] text-4xl" />

                        <h1 className="text-3xl font-semibold py-6">Web Design</h1>
                        <p className="text-[#707376] font-poppins">I create visually appealing and user-focused website layouts. Every design is crafted to enhance engagement and brand identity. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaFigma className="fa-brands fa-figma text-[#fc2164] text-4xl" />
                        <h1 className="text-3xl font-semibold py-6">Figma to HTML</h1>
                        <p className="text-[#707376] font-poppins">I convert Figma designs into clean, responsive HTML code. Your design stays just as sharp on screen as it was in the prototype. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg  py-12 px-8  hover:transition hover:scale-105">
                        <AiOutlineHtml5 className="fa-brands fa-html5 text-[#fc2164] text-4xl" />
                        <h1 className="text-3xl font-semibold py-6">PSD to HTML</h1>
                        <p className="text-[#707376] font-poppins">I take static PSD files and turn them into fully functional web pages. Precision and responsiveness are always top priorities. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaWordpressSimple className="fa-brands fa-wordpress-simple text-[#fc2164] text-4xl" />
                        <h1 className="text-3xl font-semibold py-6">Wordpress</h1>
                        <p className="text-[#707376] font-poppins">I develop custom WordPress solutions tailored to your needs. From themes to plugins, everything is built for easy control. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <FaReact className="fa-brands fa-laravel text-[#fc2164] text-4xl" />
                        <h1 className="text-3xl font-semibold py-6">ReactJs</h1>
                        <p className="text-[#707376] font-poppins">I build dynamic and high-performing web apps using React.js. Fast, interactive, and scalable—just the way modern apps should be. </p>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-12 px-8  hover:transition hover:scale-105">
                        <DiPhotoshop className="fa-solid fa-pen-nib text-[#fc2164] text-4xl" />
                        <h1 className="text-3xl font-semibold py-6">Photoshop</h1>
                        <p className="text-[#707376] font-poppins">I design stunning visuals and assets using Adobe Photoshop. Whether it’s for web or branding, quality and creativity lead the way. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fearures;