import React from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Step 1: Portfolio Data with Live Links
const portfolioItems = [
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
        image: "/dental-care.png",
        category: "Dental Website",
        description: "The services provide for a dental Clinic.",
        liveLink: "https://dentalcare-bd.netlify.app/",
    },
    {
        id: 4,
        image: "/grabit-shop.png",
        category: "E-commerce Website",
        description: "The services provide for an E-commerce shop.",
        liveLink: "https://grabit-shop.netlify.app/",
    },
    {
        id: 5,
        image: "/udvash-edu.png",
        category: "LMS Website",
        description: "The services provide for a learning platform.",
        liveLink: "https://udvash-edu.netlify.app/",
    },
];

const MyPortfolio = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="w-11/12 py-6 pb-20 mx-auto md:w-10/12 lg:w-8/12">
                {/* Heading Section */}
                <div className="text-center lg:text-center">
                    <p className="font-bold text-blue-600 medium">
                        VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">
                        My Portfolio
                    </h1>
                </div>

                {/* ✅ Dynamic Portfolio Cards */}
                <div className="grid grid-cols-1 gap-12 py-10 pb-20 lg:grid-cols-3 md:grid-cols-2">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6"
                        >
                            <img
                                className="border border-gray-400 rounded-xl hover:transition hover:scale-105"
                                src={item.image}
                                alt={item.category}
                            />
                            <div className="flex justify-between py-5">
                                <p className="text-sm font-bold text-[#3C3E41] font-poppins">
                                    {item.category}
                                </p>
                            </div>
                            <p className="py-0 text-[#3C3E41] text-md">
                                {item.description}
                            </p>

                            {/* ✅ View Live Project Button */}
                            <div className="mt-4">
                                <a
                                    href={item.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600  shadow-md cursor-pointer font-poppins hover:transition hover:scale-105"
                                >
                                    View Live Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ View More Button */}
                <div className="flex justify-center pb-20 border-b border-gray-200">
                    <button
                        onClick={() => navigate("/projects")}
                        className="px-8 py-3 font-semibold text-white bg-blue-600 border-none rounded-lg shadow-md cursor-pointer font-poppins hover:transition hover:scale-105"
                    >
                        View My More Projects
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
