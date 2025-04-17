// components/TestimonialSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Jennings",
        image: "/Sarah Jennings.jpg",
        role: "Marketing Manager, GreenGlow Agency",
        message: "Working with Suzaul was a fantastic experience. He delivered a sleek, responsive website that matched our brand perfectly. Communication was smooth, deadlines were met, and the final result exceeded our expectations.",
        project: "Corporate Website Redesign",
        year: "March 2024",
        location: "USA, New York",
    },
    {
        name: "Sheikh Sakibul Hasan",
        image: "/Sheikh Sakibul Hasan.jpg",
        role: "Founder, LocalCart BD",
        message: "Suzaul truly understood our vision and brought it to life. The site works flawlessly across devices and has boosted our online presence. He’s professional, creative, and always quick to respond. Very happy to work with.",
        project: "E-commerce Store Development",
        year: "January 2025",
        location: "Bangladesh, Dhaka",
    },
    {
        name: "Clara Müller",
        image: "/Clara Müller.jpg",
        role: "Creative Director, StudioLoom",
        message: "Suzaul has an eye for detail and a great sense of design. He turned our ideas into a beautiful, functional site that our clients love. I highly recommend him for any web-related project. Perfect working partner",
        project: "Portfolio Website Design",
        year: "December 2024",
        location: "Germany, Berlin",
    },
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <div className="w-11/12 py-6 pb-16 mx-auto md:w-10/12 lg:w-8/12">
            <div className="py-6 text-center">
                <p className="pt-16 font-bold text-blue-600">TESTIMONIAL</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3E41] py-6">What Clients Say</h1>
            </div>

            <div className="pb-16 rounded-2xl bg-gray-200 shadow-xl">
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-col items-center p-8 rounded-2xl ">
                                <div className="flex flex-col items-center justify-between w-full gap-6 lg:flex-row">
                                    {/* Left Box: Image and Name  */}
                                    <div className="bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] p-6 rounded-lg shadow-xl lg:w-4/12 w-full mb-6 lg:mb-0">
                                        {/* Centered Image */}
                                        <img className="object-cover mx-auto mb-6 w-fit rounded-xl" src={item.image} alt={item.name} />

                                        {/* Centered Name and Role */}
                                        <div className="text-[#3C3E41] text-center">
                                            <h4 className="text-lg font-semibold">{item.name}</h4>
                                            <span className="text-lg">{item.role}</span>
                                        </div>
                                    </div>

                                    {/* Right Box: Project/Message */}
                                    <div className="bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] p-8 rounded-lg shadow-xl lg:w-8/12 lg:h-96 items-center">
                                        <h1 className="text-2xl font-bold text-[#3C3E41] text-start">{item.project}</h1>
                                        <h1 className="text-lg py-2 text-[#3C3E41] text-start">{item.location}</h1>
                                        <h1 className="text-blue-600 text-md text-start ">{item.year}</h1>
                                        <p className="text-md text-[#707376] pt-6  text-justify ">“{item.message}”</p>
                                        <div className="flex justify-start gap-2 pt-6 text-2xl text-blue-600">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div >

    );
};

export default TestimonialSlider;
