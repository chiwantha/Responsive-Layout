import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mx-4 pb-14 overflow-x-hidden">
      <div className="bg-blue-300/20 max-w-7xl mx-auto mt-3 space-y-2 rounded-xl p-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-500 py-4 rounded-lg"
        >
          <h1 className="text-center text-4xl ktext">ABOUT TITLE</h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="order-1 md:order-0 space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 py-44 rounded-lg"
            >
              <h1 className="text-center text-4xl ktext">TEXT</h1>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-orange-500 py-8 rounded-lg"
              >
                <h1 className="text-center text-4xl ktext">LOGO</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-red-400 py-8 rounded-lg"
              >
                <h1 className="text-center text-4xl ktext">BTN</h1>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-0 md:order-1 bg-green-500 py-56 rounded-lg"
          >
            <h1 className="text-center text-4xl ktext">IMAGE</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
