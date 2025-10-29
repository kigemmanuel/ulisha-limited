export default function ServicesCarousel({ Services }) {
  return (
    <div
      className="relative overflow-hidden whitespace-nowrap py-4"
      data-aos="fade-in"
      data-aos-delay="200"
    >
      {/* Left shadow/fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right shadow/fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div
        className="inline-block animate-scroll px-4"
        style={{ minWidth: "max-content" }}
      >
        {Services.map((service, index) => (
          <span
            key={index}
            className="inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-2 rounded-lg font-semibold text-sm select-none"
          >
            {service}
          </span>
        ))}
      </div>
      <div
        className="inline-block animate-scroll px-4"
        style={{ minWidth: "max-content" }}
      >
        {Services.map((service, index) => (
          <span
            key={index}
            className="inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-2 rounded-lg font-semibold text-sm select-none"
          >
            {service}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}