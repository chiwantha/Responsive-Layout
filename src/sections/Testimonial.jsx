import TestimonialCard from "../components/TestimonialCard";

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="overflow-x-hidden overflow-y-hidden pb-14 mx-4"
    >
      <div className="max-w-7xl  rounded-xl space-y-6 mx-auto">
        <div className="border-cyan-500 border py-4 rounded-lg">
          <h1 className="text-center text-3xl md:text-4xl ktext">
            TESTIMONIAL TITLE
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard delayIn={0} />
          <TestimonialCard delayIn={0.2} />
          <TestimonialCard delayIn={0.4} />
          <TestimonialCard delayIn={0.6} />
          <TestimonialCard delayIn={0.8} />
          <TestimonialCard delayIn={1} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
