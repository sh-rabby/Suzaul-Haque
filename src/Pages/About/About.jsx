import React from 'react';
import AboutTop from './About Components/AboutTop';
import AboutTab from './About Components/AboutTab';

const About = () => {
    return (
        <div  className="py-16">
            <div className="text-center">
                <h3 className="text-[#fc2164] font-medium">ABOUT ME</h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">Learn More About Me</h1>
            </div>
            <AboutTop></AboutTop>
            <AboutTab></AboutTab>
        </div>
    );
};

export default About;