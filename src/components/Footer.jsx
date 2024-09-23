import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="b-0 border-t-8 border-green-600/50 z-50 bg-blue-950/80 backdrop-blur-md right-0 left-0 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 justify-start rounded-xl p-4 flex flex-col">
              <h1 className=" text-3xl md:text-4xl ktext border-b pb-5 border-neutral-300">
                FOOTER CONTENT
              </h1>
              <p className="text-neutral-400 md:text-lg py-4 border-b border-neutral-300">
                This Layout Learning Template by Kasun Chiwantha offers a simple
                guide to using React.js, Tailwind CSS, and Framer Motion. It
                helps you understand layout structure and design in web
                development with these powerful tools.
              </p>
              <div className="flex text-4xl justify-start items-center space-x-4 pt-4">
                <a
                  href="https://github.com/chiwantha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kasun-chiwantha-5168b4323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-red-500"
                  href="mailto:kasuchiwantha789@gmail.com"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="">
                <h1 className=" text-3xl md:text-2xl ktext border-b pb-5 border-neutral-300">
                  NAV
                </h1>
                <ul className="text-neutral-400 text-2xl py-4 space-y-2">
                  <li>
                    <Link
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-110}
                      duration={500}
                      className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={500}
                      className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={500}
                      className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h1 className=" text-3xl md:text-2xl ktext border-b pb-5 border-neutral-300">
                  About Developer
                </h1>
                <p className="text-neutral-400 md:text-lg py-4">
                  This Layout Learning Template by Kasun Chiwantha offers a
                  simple guide to using React.js, Tailwind CSS, and Framer
                  Motion. It helps you understand layout structure and design in
                  web development with these powerful tools.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap border-t pt-6 border-neutral-700">
            <h4 className="text-green-500 text-lg font-bold">
              Copyright © 2024 K-Chord ( PVT ) LTD ®
            </h4>
            <h4 className="text-green-500 text-lg font-bold">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kasun-chiwantha-5168b4323/"
              >
                Content Dev by Kasun Chiwantha
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
