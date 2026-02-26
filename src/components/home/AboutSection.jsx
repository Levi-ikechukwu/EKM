import AboutImage from "../../assets/About.png";

export default function AboutSection() {
  const points = [
    "Vendor Sourcing & Evaluation",
    "Industrial Procurement",
    "Project Supply Chain Support",
    "Quality & Compliance Assurance",
  ];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 flex flex-col md:ml-8 lg:ml-12">
            <h3 className="text-gray-500 font-semibold tracking-widest text-[13px] uppercase mb-4">
              About EKM
            </h3>

            <h2 className="text-2xl md:text-4xl lg:text-[38px] font-bold text-[#1a3b5c] leading-[1.2] mb-6">
              Engineering Procurement and
              <br className="hidden lg:block" />
              Industrial Support Solutions
              <br className="hidden lg:block" />
              You Can Rely On
            </h2>

            <p className="text-gray-600 text-base md:text-[17px] leading-relaxed mb-8 max-w-xl">
              EKM Engineering Services Limited is a procurement-driven
              engineering firm providing end-to-end supply chain, vendor
              sourcing, and technical support solutions for industrial and
              energy sectors. We are committed to compliance, operational
              excellence, and delivering quality on every project.
            </p>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-[#333333] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#1a3b5c] font-medium text-[15px] sm:text-[16px]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <button className="px-8 py-3.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded transition-all duration-300 shadow hover:shadow-lg text-[15px]">
                View Our Services
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 w-full flex items-center justify-center lg:justify-end">
            <img
              src={AboutImage}
              alt="Engineering and Industrial Support"
              className="w-full max-w-[550px] aspect-3/2 object-cover object-center rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
