import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="mx-4 py-4 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto border-neutral-800 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <motion.div
            initial={{ oapcity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center px-5 py-16 bg-gray-600/90 rounded-t-xl md:rounded-none md:rounded-l-xl justify-center"
          >
            <h1 className="text-center text-3xl md:text-4xl ktext">
              MOBILE CONTACT
            </h1>
          </motion.div>
          <motion.div
            initial={{ oapcity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center px-5 py-24 bg-gray-600/30 justify-center"
          >
            <h1 className="text-center text-3xl md:text-4xl ktext">
              WEB CONTACT
            </h1>
          </motion.div>
          <motion.div
            initial={{ oapcity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center px-5 py-16 bg-gray-600/100 rounded-b-lg md:rounded-none md:rounded-r-xl justify-center"
          >
            <h1 className="text-center text-3xl md:text-4xl ktext">
              SOCIAL CONTACT
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
