import BrandCard from "../components/BrandCard";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className=" py-2 mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <BrandCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className=""
          >
            <BrandCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
