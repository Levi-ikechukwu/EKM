import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import imgAbout from "../../assets/About.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img55 from "../../assets/img55.png";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[#bf714a] font-bold tracking-widest text-lg sm:text-xl md:text-2xl uppercase mb-4">
            Our Core Service Areas
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#1a3b5c] leading-tight">
            Comprehensive Engineering Procurement{" "}
            <br className="hidden md:block" />
            and Industrial Support Services
          </h3>
          <p className="mt-6 text-[#1a3b5c] text-base md:text-[18px] max-w-3xl mx-auto leading-relaxed">
            We deliver structured procurement, vendor management, and supply
            chain <br className="hidden md:block" />
            solutions tailored to industrial, construction, and energy sector
            projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 md:gap-y-16 md:gap-x-14">
          {/* Card 1 */}
          <div className="flex flex-col text-center">
            <img
              src={img1}
              alt="Technical Sourcing and Industrial Procurement"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Technical Sourcing and Industrial Procurement
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              Strategic sourcing of mechanical, electrical, and civil materials
              in line with project specifications and regulatory standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col text-center">
            <img
              src={img2}
              alt="Local and International Sourcing"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Local and International Sourcing
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              Local and global supplier network coordination ensuring
              competitive pricing, quality assurance, and regulatory conformity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col text-center">
            <img
              src={imgAbout}
              alt="Materials Expediting and Logistics Coordination"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Materials Expediting and Logistics Coordination
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              Active tracking, inspection coordination, and delivery scheduling
              to ensure timely project execution.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col text-center">
            <img
              src={img3}
              alt="Project Supply Chain Management"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Project Supply Chain Management
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              End-to-end procurement lifecycle management from sourcing through
              delivery and documentation closure.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col text-center">
            <img
              src={img4}
              alt="Construction and Industrial Materials Supply"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Construction and Industrial Materials Supply
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              Supply of certified construction materials and industrial
              components meeting local and international standards.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col text-center">
            <img
              src={img55}
              alt="Procurement Process Management"
              className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover mb-6"
            />
            <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2">
              Procurement Process Management
            </h4>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
              End-to-end management of procurement workflows from requisition to
              delivery, ensuring transparency, accountability, and operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
