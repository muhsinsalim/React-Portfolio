import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/muhsin.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col just lg:items-start items-center text-white">
        <h1 className=" text-[52px] font-semibold mb-8 leading-normal uppercase">
          I am <span className=" text-fuchsia-500">Muhsin Salim</span>
        </h1>
        <p>
          I am thrilled to stand before you today to officially present my
          website, a culmination of passion, dedication, and creativity. Before
          we dive into the digital realm, I want to express my gratitude for
          your presence here.
        </p>
        <div className="flext mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/muhsinsalim"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhsin-pm-3126a7234/"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href="https://twitter.com/MuhsinPm882097"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FiTwitter className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/_muhsin_salim_/"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
