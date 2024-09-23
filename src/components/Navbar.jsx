import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md">
      <div className="fixed top-0 w-full">
        <motion.div
          className="progress-bar bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 blur-sm h-2 z-51 rounded-full"
          style={{
            scaleX,
            transformOrigin: "0%", // Ensures scaling happens from the left (0%) to the right (100%)
          }}
        />
      </div>

      <div className="mx-4">
        <div className="max-w-7xl mx-auto py-5 px-0">
          <div className="flex justify-between items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-center text-4xl ktext cursor-pointer"
            >
              NAVBAR
            </Link>

            <div className="hidden md:flex items-center justify-center gap-5 text-xl text-neutral-400">
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
            </div>

            <button
              className="text-white text-4xl md:hidden"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <IoCloseOutline /> : <IoIosMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 bg-blue-950/95 flex items-center h-screen" // Full-screen background
            onClick={toggleMenu} // Close menu when background is clicked
          >
            <div
              className="max-w-7xl mx-auto py-5 rounded-xl flex justify-center items-center"
              // onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <ul className="space-y-2 text-white text-center text-2xl">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                >
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                    className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                >
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                    className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                    className="hover:text-neutral-300 hover:border-b active:border-b border-neutral-300 cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
