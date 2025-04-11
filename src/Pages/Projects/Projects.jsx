import React from 'react';
import MyPortfolio from '../Home/Home Componemts/MyPortfolio';
import WebPorojects from './ProjectComponents/WebPorojects';

const Projects = () => {
    return (
        <div  className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16">
            <div className="text-center">
                <h3 className="text-[#fc2164] font-medium">SEE MY PROJECTS </h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">My Projects</h1>
            </div>
            <div>
                <WebPorojects></WebPorojects>
            </div>
        </div>
    );
};

export default Projects;