const Hero = () => {
  return (
    <div className="mx-4">
      <div className="max-w-7xl mb-10 mt-28 mx-auto m-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col p-2 bg-neutral-100 rounded-xl">
            <div className="grid grid-cols-1 mb-2 gap-2 md:grid-cols-2">
              <div className="bg-yellow-300 py-20 rounded-lg"></div>
              <div className="bg-green-500 py-20 rounded-lg"></div>
            </div>
            <div className="bg-red-400 py-20 rounded-lg"></div>
          </div>
          <div className="order-1 md:order-2 py-40 bg-blue-600 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
