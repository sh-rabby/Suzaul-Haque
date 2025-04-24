import React from 'react';

// ✅ Step 1: Dynamic Web Projects Data with Live Links
const webProjects = [
    {
        id: 1,
        image: "/pixelcrafter.png",
        category: "Digital Agency Websites",
        description: "The services provide for a digital agency.",
        liveLink: "https://pixelcrafter1.netlify.app/",
    },
    {
        id: 2,
        image: "/liza-car.png",
        category: "E-commerce Website",
        description: "The services provide for a car shop.",
        liveLink: "https://lizacar.netlify.app/",
    },
    {
        id: 3,
        image: "/grabit-shop.png",
        category: "E-commerce Website",
        description: "The services provide for an E-commerce shop.",
        liveLink: "https://grabit-shop.netlify.app/",
    },
    {
        id: 4,
        image: "/udvash-edu.png",
        category: "LMS Website",
        description: "The services provide for a learning platform.",
        liveLink: "https://udvash-edu.netlify.app/",
    },
];

const WebProjects = () => {
    return (
        <div>
            {/* Section: Dynamic Web Projects */}
            <div className="grid grid-cols-1 gap-12 py-10 pb-20 lg:grid-cols-3 md:grid-cols-2">
                {webProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6"
                    >
                        {/* Project Image */}
                        <img
                            className="border border-gray-400 rounded-xl hover:transition hover:scale-105"
                            src={project.image}
                            alt={project.category}
                        />

                        {/* Category */}
                        <div className="flex justify-between py-5">
                            <p className="text-sm font-bold text-[#3C3E41] font-poppins">
                                {project.category}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="py-0 text-[#3C3E41] text-md">
                            {project.description}
                        </p>

                        {/* ✅ View Live Project Button */}
                        <div className="mt-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 text-sm font-semibold  text-white rounded-lg bg-blue-600  shadow-md cursor-pointer font-poppins hover:transition hover:scale-105"
                            >
                                View Live Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebProjects;
