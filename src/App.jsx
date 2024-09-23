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
        <div
          className="absolute top-0 z-[-2] h-screen
       w-screen bg-neutral-950 
       bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        />
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
