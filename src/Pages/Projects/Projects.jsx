import React from 'react';
import MyPortfolio from '../Home/Home Componemts/MyPortfolio';
import WebPorojects from './ProjectComponents/WebPorojects';

const Projects = () => {
    return (
        <div  className="w-11/12 py-16 mx-auto md:w-10/12 lg:w-8/12">
            <div className="text-center">
                <h3 className="font-bold text-blue-600">SEE MY PROJECTS </h3>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">My Projects</h1>
            </div>
            <div>
                <WebPorojects></WebPorojects>
            </div>
        </div>
    );
};

export default Projects;