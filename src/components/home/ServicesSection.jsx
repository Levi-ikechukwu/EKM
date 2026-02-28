import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import imgAbout from "../../assets/About.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img55 from "../../assets/img55.png";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      img: img1,
      title: "Technical Sourcing and Industrial Procurement",
      desc: "Strategic sourcing of mechanical, electrical, and civil materials in line with project specifications and regulatory standards.",
    },
    {
      img: img2,
      title: "Local and International Sourcing",
      desc: "Local and global supplier network coordination ensuring competitive pricing, quality assurance, and regulatory conformity.",
    },
    {
      img: imgAbout,
      title: "Materials Expediting and Logistics Coordination",
      desc: "Active tracking, inspection coordination, and delivery scheduling to ensure timely project execution.",
    },
    {
      img: img3,
      title: "Project Supply Chain Management",
      desc: "End-to-end procurement lifecycle management from sourcing through delivery and documentation closure.",
    },
    {
      img: img4,
      title: "Construction and Industrial Materials Supply",
      desc: "Supply of certified construction materials and industrial components meeting local and international standards.",
    },
    {
      img: img55,
      title: "Procurement Process Management",
      desc: "End-to-end management of procurement workflows from requisition to delivery, ensuring transparency, accountability, and operational efficiency.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 md:gap-y-16 md:gap-x-14"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col text-center group cursor-pointer"
            >
              <div className="overflow-hidden rounded-md mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
                />
              </div>
              <h4 className="text-[20px] md:text-[22px] font-semibold text-[#1a3b5c] mb-3 md:mb-4 px-2 group-hover:text-[#2b4c6e] transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed px-4 md:px-6">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
