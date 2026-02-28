import React from "react";
import HeroImage from "../../assets/Hero.png";

export default function ServicesHero() {
  return (
    <section
      className="relative flex items-center bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl md:ml-10 lg:ml-20">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#e2e8f0]/95 leading-[1.2] mb-6">
            <span className="block mb-2 text-white">
              Engineering Precision.
            </span>
            Strategic Procurement. Reliable Delivery.
          </h1>

          <p className="text-[20px] text-[#cbd5e1] mb-10 leading-relaxed font-light max-w-2xl">
            Providing end-to-end engineering procurement, technical sourcing,
            and industrial support services with a commitment to safety,
            compliance, and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded transition-all duration-300 shadow hover:shadow-lg text-lg">
              Request a Quote
            </button>
            <button className="px-8 py-3.5 bg-white hover:bg-gray-50 text-[#1a3b5c] font-medium rounded transition-all duration-300 shadow hover:shadow-lg text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
