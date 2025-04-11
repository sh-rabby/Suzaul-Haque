import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#ecf0f3] text-gray-600 text-sm">
      <div className="border-y border-gray-200">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex flex-col gap-6 w-full md:w-100">
              <div>
                <Link to="/"><img src="/logo.png" alt="Logo" className="w-32 " /></Link>
              </div>
              <p className="text-gray-500">
                I specialize in crafting modern, responsive websites that bring ideas to life. From sleek designs to functional development, I turn your vision into a powerful online presence. </p>
            </div>

            <div className="w-full md:w-50">
              <h3 className="font-semibold text-lg text-[#fc2164] mb-4 pb-2 border-b border-gray-200">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="hover:text-[#fc2164] transition">
                  About us
                </Link>
                <Link
                  to="/projects"
                  className="hover:text-[#fc2164] transition"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="w-full md:w-50">
              <h3 className="font-semibold text-lg text-[#fc2164] mb-4 pb-2 border-b border-gray-200">
                More Information
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="hover:text-[#fc2164] transition">
                  Contact Me
                </Link>
                <Link to="/faq" className="hover:text-[#fc2164] transition">
                  FAQs
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#fc2164] mb-4 pb-2 border-b border-gray-200">
                Contact Me
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <SlLocationPin className="text-[#fc2164] text-xl" />
                  <p>South Banasree, Khilgoan, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-[#fc2164] text-lg" />
                  <Link
                    to="tel:+8801685981149"
                    className="hover:text-[#fc2164] transition"
                  >
                    +8801685981149
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MdMailOutline className="text-[#fc2164] text-lg" />
                  <Link
                    to="mailto:suzaul193@gmail.com"
                    className="hover:text-[#fc2164] transition"
                  >
                    suzaul193@gmail.com
                  </Link>
                </div>

                <div className="mt-2">
                  <h4 className="font-medium text-[#fc2164] mb-2">Follow Me</h4>
                  <div className="flex gap-4">
                    <Link
                      to="https://www.facebook.com/"
                      className="text-gray-500 hover:text-[#fc2164] transition"
                    >
                      <FaFacebook className="text-xl" />
                    </Link>
                    <Link
                      to="https://x.com/"
                      className="text-gray-500 hover:text-[#fc2164] transition"
                    >
                      <FaTwitter className="text-xl" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/"
                      className="text-gray-500 hover:text-[#fc2164] transition"
                    >
                      <FaInstagram className="text-xl" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/"
                      className="text-gray-500 hover:text-[#fc2164] transition"
                    >
                      <FaLinkedin className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed]">
          <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <p className="text-xs lg:text-sm text-[#fc2164]">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by Suzaul Haque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
