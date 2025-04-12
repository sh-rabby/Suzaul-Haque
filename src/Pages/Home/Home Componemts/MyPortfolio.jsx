import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPortfolio = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-6 pb-20 ">
                    <div className="text-center lg:text-center">
                        <p className="text-[#fc2164] font-medium ">VISIT MY PORTFOLIO & KEEP YOUR FEEDBACK</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">My Portfolio</h1>
                    </div>

                    <div className="py-10 gap-12 pb-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-01.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-poppins font-medium text-sm ">E-Commerce Website</p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41] text-xl font-bold">The services provide for an e-commerce shop </h1>
                        </div>

                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-02.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-medium font-poppins text-sm ">LMS Website </p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41]  text-xl font-bold">The services provide for a learning platform </h1>
                        </div>

                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-03.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-medium font-poppins text-sm ">Traveling Website </p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41] 0 text-xl font-bold">The services provide for a travel agency  </h1>
                        </div>

                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-04.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-medium font-poppins text-sm ">Event Management Website</p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41]  text-xl font-bold">The services provide for an event management company  </h1>
                        </div>

                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-05.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-medium font-poppins text-sm ">Blog Weisite</p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41]  text-xl font-bold">The services provide for a blog content provider  </h1>
                        </div>

                        <div className="bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] rounded-xl shadow-lg py-6 px-6">
                            <img className="rounded-xl hover:transition hover:scale-105" src="/portfolio-06.jpg" alt="" />
                            <div className="flex justify-between py-5">
                                <p className="text-[#fc2164] font-medium font-poppins text-sm ">News Website</p>
                            </div>
                            <h1 className="py-0 text-[#3C3E41] text-xl font-bold">The services provide for a news company  </h1>
                        </div>
                    </div>
                    <div className='flex justify-center  border-b border-gray-200   pb-20 '>
                        <button onClick={() => navigate("/projects")} className="text-[#fc2164] bg-gradient-to-r from-[#e3e9ed] to-[#fcfcfd] py-3 px-8 rounded-lg shadow-md font-poppins font-semibold hover:transition hover:scale-105 cursor-pointer">View My More Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;