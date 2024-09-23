const Hero = () => {
  return (
    <div className="mx-4">
      <div className="max-w-7xl mb-10 mt-36 mx-auto m-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col p-2 bg-neutral-100 rounded-xl">
            <div className="grid grid-cols-1 mb-2 gap-2 md:grid-cols-2">
              <div className="bg-yellow-300 py-32 rounded-lg"></div>
              <div className="bg-green-500 py-32 rounded-lg"></div>
            </div>
            <div className="bg-red-400 py-32 rounded-lg">
              <h1 className="text-center text-4xl ktext">HERO CONTENT</h1>
            </div>
          </div>
          <div className="order-1 md:order-2 py-64 bg-blue-600 rounded-xl">
            <h1 className="text-center text-4xl ktext">HERO IMAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
