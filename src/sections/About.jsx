const About = () => {
  return (
    <div className="mx-4 pb-20">
      <div className="bg-white max-w-7xl mx-auto mt-3 space-y-2 rounded-xl p-2">
        <div className="bg-red-500 py-4 rounded-lg">
          <h1 className="text-center text-4xl ktext">TITLE</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="order-1 md:order-0 space-y-2">
            <div className="bg-red-600 py-44 rounded-lg">
              <h1 className="text-center text-4xl ktext">TEXT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-red-300 py-8 rounded-lg">
                <h1 className="text-center text-4xl ktext">LOGO</h1>
              </div>
              <div className="bg-red-400 py-8 rounded-lg">
                <h1 className="text-center text-4xl ktext">BTN</h1>
              </div>
            </div>
          </div>
          <div className="order-0 md:order-1 bg-red-800 py-56 rounded-lg">
            <h1 className="text-center text-4xl ktext">IMAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
