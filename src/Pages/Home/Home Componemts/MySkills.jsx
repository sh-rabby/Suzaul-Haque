import React from 'react';

const MySkills = () => {
    return (
        <div>
            <div className="w-11/12 py-6 mx-auto md:w-10/12 lg:w-8/12 ">
                <div className="text-center">
                    <p className="font-bold text-blue-600">4 YEARS OF EXPRIENCES</p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">My Skills</h1>
                </div>
            </div>

            <div className="w-11/12 gap-10 mx-auto border-b border-gray-200 md:flex md:justify-between md:items-center md:w-10/12 lg:w-8/12 ">

                {/* Design Skills */}
                <div className="py-16 text-start md:w-6/12">
                    <p className="font-bold text-blue-600">Features</p>
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#3C3E41] py-6">My Design Skill</h1>

                    {[
                        { name: 'PHOTOSHOP', percent: 100 },
                        { name: 'FIGMA', percent: 95 },
                        { name: 'ADOBE XD', percent: 60 },
                        { name: 'ADOBE ILLUSTRATOR', percent: 70 },
                        { name: 'DESIGN', percent: 90 },
                    ].map((skill, idx) => (
                        <div key={idx} className="py-2">
                            <div className="flex justify-between text-[#3C3E41]">
                                <p>{skill.name}</p>
                                <p>{skill.percent}%</p>
                            </div>
                            <div className="relative h-4 overflow-hidden bg-gray-300 rounded-full">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-300 to-blue-600"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Development Skills */}
                <div className="py-16 text-start md:w-6/12">
                    <p className="font-bold text-blue-600">Features</p>
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#3C3E41] py-6">My Development Skill</h1>

                    {[
                        { name: 'HTML', percent: 100 },
                        { name: 'CSS', percent: 90 },
                        { name: 'JAVASCRIPT', percent: 85 },
                        { name: 'REACT', percent: 85 },
                        { name: 'WORDPRESS', percent: 90 },
                    ].map((skill, idx) => (
                        <div key={idx} className="py-2">
                            <div className="flex justify-between text-[#3C3E41]">
                                <p>{skill.name}</p>
                                <p>{skill.percent}%</p>
                            </div>
                            <div className="relative h-4 overflow-hidden bg-gray-300 rounded-full ">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-300 to-blue-600"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MySkills;