import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="mx-4 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mb-10 mt-36 mx-auto m-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 flex flex-col p-2 bg-neutral-100 rounded-xl"
          >
            <div className="grid grid-cols-1 mb-2 gap-2 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-yellow-300 py-32 rounded-lg"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-green-500 py-32 rounded-lg"
              ></motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-red-400 py-32 rounded-lg"
            >
              <h1 className="text-center text-4xl ktext">HERO CONTENT</h1>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 py-64 bg-blue-600 rounded-xl"
          >
            <h1 className="text-center text-4xl ktext">HERO IMAGE</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
