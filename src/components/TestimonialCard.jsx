import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ delayIn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delayIn ? delayIn : 0 }}
      className="rounded-xl py-2 overflow-x-hidden overflow-y-hidden"
    >
      <div className="flex flex-col space-y-3 justify-center">
        <div className="bg-slate-500 w-full py-2 rounded-lg">
          <h1 className="text-center text-2xl ktext">TITLE</h1>
        </div>
        <div className="bg-blue-700/50 space-y-2 rounded-lg">
          <p className="text-center text-2xl ktext py-10">TEXT</p>
        </div>
        <div className="w-full flex gap-3 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-green-500 aspect-square rounded-full w-14"
          ></motion.div>

          <div className="flex flex-col">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white font-bold text-xl"
            >
              Persone Name
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white font-light text-sm"
            >
              Designamtion / Other
            </motion.h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
