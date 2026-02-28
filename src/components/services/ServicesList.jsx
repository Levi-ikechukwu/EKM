import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import imgAbout from "../../assets/About.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img55 from "../../assets/img55.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesList() {
  const servicesData = [
    {
      img: img1,
      title: "Technical Sourcing and Industrial Procurement",
      desc: "We provide structured sourcing and technical supply solutions that guarantee aligned delivery with technical specifications and project requirements.",
      deliverList: [
        "Needs and specifications review",
        "Identification of suitable suppliers",
        "Manufacturer and supplier RFQ coordination",
        "Technical and commercial evaluation",
        "Procurement documentation and follow-up",
      ],
      scopeList: [
        "Mechanical components",
        "Electrical materials",
        "Industrial consumables",
        "Structural materials",
      ],
    },
    {
      img: img2,
      title: "Local and International Sourcing",
      desc: "We coordinate sourcing activities on both a local and international level to ensure proper supply availability and cost-efficiency.",
      deliverList: [
        "Market research and vendor identification",
        "Supplier communication and negotiation",
        "Cost comparison analysis",
        "Order format sourcing coordination",
        "Liaison with logistics partners",
      ],
    },
    {
      img: imgAbout,
      title: "Materials Expediting and Logistics Coordination",
      desc: "We coordinate routing and tracking of materials and equipment, and materials to ensure proper project scheduling and efficiency.",
      deliverList: [
        "Procurement/vendor supplier coordination",
        "Freight and transportation management",
        "Customs part analysis",
        "Cross-border handling coordination",
        "Last-mile delivery coordination",
      ],
    },
    {
      img: img3,
      title: "Project Supply Chain Management",
      desc: "We monitor procurement timelines and routines to ensure projects follow upon project schedules.",
      deliverList: [
        "Order tracking",
        "Supplier production monitoring",
        "Delivery scheduling",
        "Documentation coordination",
        "Logistics follow-up",
      ],
    },
    {
      img: img4,
      title: "Construction and Industrial Materials Supply",
      desc: "We coordinate the supply of construction and industrial materials to align with project schedules and needs.",
      deliverList: [
        "Material requirement assessment",
        "Supplier sourcing",
        "Quality inspection",
        "Delivery coordination",
        "Procurement process management",
      ],
    },
    {
      img: img55,
      title: "Procurement Process Management",
      desc: "We maintain accountability over our businesses aligned to cost management, process integrity, and predictability.",
      deliverList: [
        "Purchase manager coordination",
        "RFQ management",
        "Supplier documentations auditing",
        "Internal procurement record management",
        "Commercial invoice schedule",
      ],
    },
    {
      img: img4, // Reused as per user instruction
      title: "Industrial Maintenance Support",
      desc: "EKM provides continuous support for industrial maintenance requirements across mechanical and operational systems.",
      deliverList: [
        "Maintenance requirement review",
        "Supplier & technician coordination",
        "Materials sourcing for maintenance activities",
        "Service scheduling support",
        "Documentation and reporting coordination",
      ],
    },
    {
      img: img55, // Reused as per user instruction
      title: "General Engineering Services",
      desc: "We provide engineering support services aligned with project designs scenarios and operational requirements.",
      deliverList: [
        "Technical consultation support",
        "Engineering coordination",
        "Equipment sourcing assistance",
        "Project -based engineering assistance",
        "Structural documentation support",
      ],
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1a3b5c]"
      >
        <h3 className="text-[#bf714a] font-bold tracking-widest text-sm uppercase mb-3">
          Our Services
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-tight mb-8">
          Engineering Procurement and Industrial Support Services
        </h2>
        <p className="text-base md:text-lg leading-relaxed max-w-5xl mx-auto text-[#2b4c6e]">
          EKM Engineering Services Limited provides absolute procurement and
          industrial support, efficiently tailored to engineering, construction,
          and energy sector requirements. Our services are designed to link
          organizations with reliability and operational efficiency. EKM
          Engineering provides customized overall structured procurement and
          robust supply chain solutions for both engineering, construction and
          energy sector requirements. Our services are designed around
          organization, accountability, and operational efficiency.
        </p>
      </motion.section>

      {/* Services Grid Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-16"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col group"
            >
              <div className="overflow-hidden rounded shadow-sm mb-6 group-hover:shadow-md transition-shadow duration-300">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[300px] object-cover cursor-pointer"
                />
              </div>
              <h4 className="text-[22px] md:text-2xl font-semibold text-[#1a3b5c] mb-3 group-hover:text-[#2b4c6e] transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-relaxed mb-6">
                {service.desc}
              </p>

              <div>
                <h5 className="font-semibold text-[#1a3b5c] mb-2">
                  How We Deliver:
                </h5>
                <ul className="list-disc pl-5 text-[#2b4c6e] text-[15px] md:text-[16px] space-y-1 mb-6">
                  {service.deliverList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {service.scopeList && (
                <div>
                  <h5 className="font-semibold text-[#1a3b5c] mb-2">
                    Scope Includes:
                  </h5>
                  <ul className="list-disc pl-5 text-[#2b4c6e] text-[15px] md:text-[16px] space-y-1">
                    {service.scopeList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-[#bf714a] font-bold tracking-widest text-lg sm:text-xl md:text-2xl mb-4">
          Let's Support Your Next Project
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a3b5c] leading-tight mb-8">
          Speak with our team to discuss your procurement and engineering
          support requirements.
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded shadow hover:shadow-lg text-lg transition-colors duration-300"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
