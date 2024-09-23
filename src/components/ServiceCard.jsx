const ServiceCard = () => {
  return (
    <div className="bg-neutral-500/40 hover:border border-neutral-300 p-2 rounded-xl space-y-2">
      <div className="bg-orange-400 py-16 rounded-lg">
        <h1 className="text-center text-4xl ktext">IMAGE</h1>
      </div>
      <div className="bg-purple-500 py-4 rounded-lg">
        <h1 className="text-center text-4xl ktext">TITLE</h1>
      </div>
      <div className="bg-pink-600 py-32 rounded-lg">
        <h1 className="text-center text-4xl ktext">TEXT</h1>
      </div>
    </div>
  );
};

export default ServiceCard;
