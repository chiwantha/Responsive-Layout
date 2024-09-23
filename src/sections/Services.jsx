import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="py-10 mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
