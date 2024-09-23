import Navbar from "./components/Navbar";
import About from "./sections/About";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
// import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <div className="antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div
            className="absolute bottom-0 left-0 right-0 top-0
             bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
              bg-[size:14px_24px]
       [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          ></div>
        </div>
      </div>

      {/* <div className="fixed top-0 w-full">
        <motion.div
          className="progress-bar bg-white blur-sm h-2"
          style={{
            scaleX,
            transformOrigin: "0%", // Ensures scaling happens from the left (0%) to the right (100%)
          }}
        />
      </div> */}

      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <About />
    </div>
  );
}

export default App;
