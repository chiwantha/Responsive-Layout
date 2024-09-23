import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen
       w-screen bg-neutral-950 
       bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        />
      </div>

      <Navbar />
      <Hero />
      <Brands />
    </div>
  );
}

export default App;
