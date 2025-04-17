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
    <div className="bg-gradient-to-r from-[#e3e9ed] via-[#fcfcfd] to-[#e3e9ed] text-gray-600 text-sm">
      <div className="border-gray-200 border-t">
        <div className="w-11/12 py-12 mx-auto md:w-10/12 lg:w-9/12">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex flex-col w-full gap-6 md:w-100">
              <div>
                <Link to="/"><img src="/logo.png" alt="Logo" className="w-32 " /></Link>
              </div>
              <p className="text-justify text-gray-500">
                I specialize in crafting modern, responsive websites that bring ideas to life. From sleek designs to functional development, I turn your vision into a powerful online presence. </p>
            </div>

            <div className="w-full md:w-50">
              <h3 className="pb-2 mb-4 text-lg font-semibold text-blue-600 border-b border-gray-200">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="transition hover:text-blue-600">
                  About us
                </Link>
                <Link
                  to="/projects"
                  className="transition hover:text-blue-600"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="w-full md:w-50">
              <h3 className="pb-2 mb-4 text-lg font-semibold text-blue-600 border-b border-gray-200">
                More Information
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="transition hover:text-blue-600">
                  Contact Me
                </Link>
                <Link to="/faq" className="transition hover:text-blue-600">
                  FAQs
                </Link>

              </div>
            </div>

            <div>
              <h3 className="pb-2 mb-4 text-lg font-semibold text-blue-600 border-b border-gray-200">
                Contact Me
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <SlLocationPin className="text-xl text-blue-600" />
                  <p>South Banasree, Khilgoan, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-lg text-blue-600" />
                  <Link
                    to="tel:+8801685981149"
                    className="transition hover:text-blue-600"
                  >
                    +8801685981149
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MdMailOutline className="text-lg text-blue-600" />
                  <Link
                    to="mailto:rabby193@gmail.com"
                    className="transition hover:text-blue-600"
                  >
                    rabby193@gmail.com
                  </Link>
                </div>

                <div className="mt-2">
                  <h4 className="mb-2 font-semibold text-blue-600">Follow Me</h4>
                  <div className="flex gap-4">
                    <Link
                      to="https://www.facebook.com/"
                      className="text-gray-500 transition hover:text-blue-600"
                    >
                      <FaFacebook className="text-xl" />
                    </Link>
                    <Link
                      to="https://x.com/"
                      className="text-gray-500 transition hover:text-blue-600"
                    >
                      <FaTwitter className="text-xl" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/"
                      className="text-gray-500 transition hover:text-blue-600"
                    >
                      <FaInstagram className="text-xl" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/"
                      className="text-gray-500 transition hover:text-blue-600"
                    >
                      <FaLinkedin className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 border-t border-gray-200">
          <div className="w-11/12 py-4 mx-auto md:w-10/12 lg:w-9/12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <p className="text-xs text-white lg:text-sm">
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
