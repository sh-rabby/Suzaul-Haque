import React, { useState } from 'react';

const AboutTab = () => {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-16'>
            {/* Tabs Section */}
            <div className=" mt-10">
                <div className="flex space-x-4 justify-center pb-8">
                    {["experience", "skills", "education"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`capitalize py-5 px-8 font-bold text-xl rounded-lg w-11/12 md:w-10/12 lg:w-8/12 mx-auto gap-2 ${activeTab === tab
                                ? " bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd]  text-[#fc2164] shadow-xl"
                                : " bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] text-gray-500 hover:text-[#fc2164] shadow-lg hover:transition hover:scale-105"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="">
                    {activeTab === "experience" && (
                        <div>
                            <div className=' py-16'>
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical  before:!bg-[#fc2164]">
                                    {[
                                        {
                                            year: "In 2025",
                                            title: "Senior Frontend Developer",
                                            description: "Progressed to a Senior Frontend Developer role, taking on leadership responsibilities in larger projects while mentoring junior developers. I specialized in optimizing website performance, enhancing the overall user experience, and ensuring scalability, all while collaborating with cross-functional teams to deliver high-quality results."
                                        },
                                        {
                                            year: "In 2024",
                                            title: "React Developer",
                                            description: " Made a shift to React development, embracing the power of component-based architecture to build dynamic, interactive web applications. My experience with React allowed me to work on more complex projects, creating seamless user experiences and improving website performance for clients across various industries."
                                        },
                                        {
                                            year: "In 2022",
                                            title: "Junior Web Developer",
                                            description: "Began my professional career as a Junior Web Developer, focusing on creating and maintaining simple, yet effective websites. During this time, I learned the fundamentals of front-end development, working with HTML, CSS, and JavaScript on real-world projects, and honing my problem-solving skills."
                                        }
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            {idx !== 0 && <hr />}
                                            <div className="timeline-middle text-[#fc2164]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="h-5 w-5">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className={`${idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end  "} mb-10`}>
                                                <time className="text-[#fc2164] font-medium p-2 ">{item.year}</time>
                                                <div className='bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] px-12 py-6 rounded-lg shadow-xl hover:transition hover:scale-105'>
                                                    <div className="text-2xl lg:text-3xl font-bold text-[#3C3E41]">{item.title}</div>
                                                    <p className=" font-poppins text-[#707376]  text-justify pt-6 text-[16px]">{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {activeTab === "skills" && (
                        <div>
                            <div className="md:flex md:justify-between md:items-center gap-10 ">

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
                                            <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
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
                    )}
                    {activeTab === "education" && (
                        <div>
                            <div className=' py-16 justify-center lg:w-8/12 lg:mx-auto'>
                                <ul className="timeline timeline-vertical before:!bg-[#fc2164] timeline-snap-icon timeline-compact">
                                    {[
                                        {
                                            year: "2010",
                                            title: "SSC",
                                            description: "I completed my Secondary School Certificate (SSC) with a focus on commerce, where I developed a strong foundation in business, economics, and analytical thinking. This academic background helped me understand the principles of management and finance, which later proved useful in my career, especially in handling projects with a strategic mindset."
                                        },
                                        {
                                            year: "2012",
                                            title: "HSC",
                                            description: "During my Higher Secondary Certificate (HSC), I specialized in commerce, deepening my understanding of business studies, accounting, and economics. This period further nurtured my logical and problem-solving abilities, which I later applied in my tech career, balancing creativity and structured thinking in development projects."
                                        },
                                        {
                                            year: "2020",
                                            title: "BA",
                                            description: "I completed my Bachelor’s degree, which provided a well-rounded education without a specific major, allowing me to explore diverse subjects. This flexible academic journey helped me gain a broad perspective on various fields, fostering critical thinking and adaptability, which were crucial in shaping my approach to web development."
                                        },
                                        {
                                            year: "2024",
                                            title: "MA",
                                            description: "Currently, I am pursuing a Master’s degree in Islamic History and Culture, which is expanding my knowledge of historical and cultural studies. This program is enhancing my research skills and ability to think deeply about complex subjects, further contributing to my personal growth and intellectual breadth."
                                        }

                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            {idx !== 0 && <hr className="!border-[#fc2164]" />}
                                            <div className="timeline-start text-[#fc2164] ">{item.year}</div>
                                            <div className="timeline-middle text-[#fc2164]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="timeline-end timeline-box border bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd]  hover:transition hover:scale-105 p-4 rounded-lg mb-10  px-12 py-6 shadow-xl">
                                                <div>
                                                    <div className="text-2xl lg:text-3xl font-bold text-[#3C3E41]">{item.title}</div>
                                                    <p className="font-poppins text-[#707376]  text-justify pt-6 text-[16px]">{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutTab;
