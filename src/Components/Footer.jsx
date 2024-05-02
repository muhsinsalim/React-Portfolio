import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="mb-4 md:mb-0">
          <span className=" text-3xl font-semibold text-fuchsia-800 py-2 uppercase"></span>
          <p className="text-[16px] my-14">
            2024 muhsin Portfolio. All rights reserved
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className=" my-2">Web Design</li>
            <li className=" my-2">Web Development</li>
            <li className=" my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: muhsinsalim6928@gmail.com</p>
          <p className="text-[16px] my-4">Mobile no: 9995563577</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className=" flex space-x-4">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://github.com/muhsinsalim"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/muhsin-pm-3126a7234"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://twitter.com/MuhsinPm882097"
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/_muhsin_salim_/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
