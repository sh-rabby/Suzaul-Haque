import React from 'react';

const MySkills = () => {
    return (
        <div>
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-6 ">
                <div className="text-center">
                    <p className="text-[#fc2164] font-medium">4 YEARS OF EXPRIENCES</p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">My Skills</h1>
                </div>
            </div>

            <div className="md:flex md:justify-between md:items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto gap-10  border-b border-gray-200 ">

                {/* Design Skills */}
                <div className="text-start py-16 md:w-6/12">
                    <p className="text-[#fc2164] font-medium">Features</p>
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#3C3E41] py-6">My Design Skill</h1>

                    {[
                        { name: 'PHOTOSHOP', percent: 100 },
                        { name: 'FIGMA', percent: 95 },
                        { name: 'ADOBE XD', percent: 60 },
                        { name: 'ADOBE ILLUSTRATOR', percent: 70 },
                        { name: 'DESIGN', percent: 90 },
                    ].map((skill, idx) => (
                        <div key={idx} className="py-2">
                            <div className="flex justify-between">
                                <p>{skill.name}</p>
                                <p>{skill.percent}%</p>
                            </div>
                            <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-300 to-[#fc2164]"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Development Skills */}
                <div className="text-start py-16 md:w-6/12">
                    <p className="text-[#fc2164] font-medium">Features</p>
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#3C3E41] py-6">My Development Skill</h1>

                    {[
                        { name: 'HTML', percent: 100 },
                        { name: 'CSS', percent: 90 },
                        { name: 'JAVASCRIPT', percent: 85 },
                        { name: 'REACT', percent: 85 },
                        { name: 'WORDPRESS', percent: 90 },
                    ].map((skill, idx) => (
                        <div key={idx} className="py-2">
                            <div className="flex justify-between">
                                <p>{skill.name}</p>
                                <p>{skill.percent}%</p>
                            </div>
                            <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden ">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-300 to-[#fc2164]"
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