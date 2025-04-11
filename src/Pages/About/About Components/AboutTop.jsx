import React from 'react';

const AboutTop = () => {


    return (
        <div>
            <div className="hero w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16">
                <div className="hero-content flex-col lg:flex-row-reverse  border-b border-gray-200 pb-10">
                    <img src="/banner-03.jpg"
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] max-w-sm rounded-lg shadow-lg w-full py-6 px-6 hover:transition hover:scale-105" />
                    <div className="py-6">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-relaxed py-4">Hi, I'm <span
                            className="text-[#fc2164]">Suzaul Haque</span> <span className="text-[#fc2164]"> </span> </h1>
                        <p className="font-poppins lg:w-9/12 text-[#707376] py-2">
                            I’m Suzaul Haque, a passionate web developer working professionally form the years. From freelance gigs to full-scale client projects, I’ve been helping brands bring their ideas online with purpose and precision. Every interaction I design is driven by detail, creativity, and a deep love for what I do.
                        </p>
                        <p className="font-poppins lg:w-9/12 text-[#707376] py-2">
                        I build websites that blend clean design with smart functionality, creating digital spaces that feel simple, smooth, and intuitive. It’s not just about code—it’s about crafting experiences that connect with people.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTop;
