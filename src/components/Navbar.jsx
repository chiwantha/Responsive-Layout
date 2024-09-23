import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 ">
      <div className="mx-4">
        <div className="max-w-7xl backdrop-blur-md mx-auto rounded-xl py-5 px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-4xl ktext">NAVBAR</h1>

            <div className="hidden md:flex items-center justify-center gap-5 text-xl text-neutral-400">
              <a
                className="hover:text-neutral-300 hover:ml-2 hover:border-b border-neutral-300"
                href="#"
              >
                Home
              </a>
              <a
                className="hover:text-neutral-300 hover:ml-2 hover:border-b border-neutral-300"
                href="#"
              >
                Services
              </a>
              <a
                className="hover:text-neutral-300 hover:ml-2 hover:border-b border-neutral-300"
                href="#"
              >
                About
              </a>
              <a
                className="hover:text-neutral-300 hover:ml-2 hover:border-b border-neutral-300"
                href="#"
              >
                Contact Us
              </a>
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
                  <a
                    className="hover:text-neutral-400 hover:ml-2 hover:border-b border-neutral-400"
                    href="#"
                  >
                    Home
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  <a
                    className="hover:text-neutral-400 hover:ml-2 hover:border-b border-neutral-400"
                    href="#"
                  >
                    Services
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >
                  <a
                    className="hover:text-neutral-400 hover:ml-2 hover:border-b border-neutral-400"
                    href="#"
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                >
                  <a
                    className="hover:text-neutral-400 hover:ml-2 hover:border-b border-neutral-400"
                    href="#"
                  >
                    Contact Us
                  </a>
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
