import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Target,
  Lightbulb,
  ShieldCheck,
  ClipboardCheck,
  Briefcase,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";
import img1 from "../assets/img11.webp";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const About = () => {
  const coreValues = [
    {
      title: "Integrity",
      desc: "We prioritize honesty, transparent communication, and ethical accountability in all actions and business decisions.",
      icon: logo1,
    },
    {
      title: "Accountability",
      desc: "We implement structured tracking, monitoring, and communication processes to maintain clear and timely responsibility.",
      icon: logo2,
    },
    {
      title: "Professionalism",
      desc: "We maintain organized workflows and standardized communication in all our engagements.",
      icon: logo3,
    },
    {
      title: "Quality Focus",
      desc: "We emphasize alignment with technical specifications and support assembly standards.",
      icon: logo4,
    },
    {
      title: "Reliability",
      desc: "We are committed to delivering on terms and delivery promises consistently and professionally.",
      icon: logo5,
    },
    {
      title: "Continuous Improvement",
      desc: "We are committed to refining our processes and expanding our operational capabilities.",
      icon: logo6,
    },
  ];

  const approachList = [
    "Requirement Assessment",
    "Documentation & Process Management",
    "Supplier Identification and Coordination",
    "Delivery Monitoring & Reporting",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-4 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#555555] font-bold tracking-widest text-sm uppercase mb-4">
              About EKM
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-2xl font-medium text-[#1a3b5c] leading-tight mb-6 mt-1">
              Engineering Procurement and Industrial Support Solutions
            </h1>
            <p className="text-[#555555] text-base md:text-lg leading-relaxed mb-8 max-w-[850px] font-normal">
              EKM Engineering Services Limited is a procurement-focused
              engineering support company established to deliver organized,
              transparent, and process-driven industrial supply solutions. We
              are structured to support engineering, construction, and
              energy-related projects through coordinated sourcing and
              operational support services.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#1a3b5c] text-white text-[15px] font-medium rounded hover:bg-[#122a42] transition-colors duration-300 shadow-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white px-2 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-semibold text-[#1a3b5c] mb-5">
              Who We Are
            </h2>
            <div className="space-y-5 text-[#555555] text-[17px] leading-[1.3]">
              <p>
                EKM Engineering Services Limited was established with a clear
                objective to provide structured procurement and engineering
                support services tailored to industrial and project-based
                environments.
              </p>
              <p>
                Our approach is centered on organization, supplier coordination,
                documentation management, and delivery monitoring. We are
                building a procurement framework designed to support
                transparency, accountability, and operational efficiency across
                all service engagements.
              </p>
              <p>
                As a growing company, our focus is on developing strong supplier
                relationships, implementing structured workflows, and
                positioning ourselves as support compliance-aligned procurement
                practices within regulated industries.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={img1}
              alt="Warehouse with shelves"
              className="w-full max-w-[500px] h-auto  shadow-sm object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f8fafc] rounded-md p-6 sm:p-8 border border-gray-200 flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-11 h-11 bg-[#153b61] rounded-full flex items-center justify-center mb-5">
              <Target
                className="w-[22px] h-[22px] text-white"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-[26px] font-medium text-[#153b61] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 text-[16px] leading-[1.8]">
              To deliver reliable, organized, and process-driven procurement and
              engineering support services that contribute to efficient project
              execution and operational stability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f8fafc] rounded-md p-6 sm:p-8 border border-gray-200 flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-11 h-11 bg-[#153b61] rounded-full flex items-center justify-center mb-5">
              <Lightbulb
                className="w-[22px] h-[22px] text-white"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-[26px] font-medium text-[#153b61] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-500 text-[16px] leading-[1.8]">
              To become a trusted procurement-focused engineering support
              company recognized for structure, transparency, and professional
              service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="bg-[#cbd5e1] px-10 py-3.5 rounded-full">
            <h2 className="text-[22px] font-semibold text-[#1a3b5c]">
              Our Core Values
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f8fafc] rounded-md p-6 sm:p-8 border border-gray-200 flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-12 h-12 object-contain mb-5"
              />
              <h3 className="text-[24px] font-medium text-[#153b61] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-[1.8]">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1a3b5c] mb-6 leading-tight">
              Our Approach to Procurement and Engineering Support
            </h2>
            <p className="text-[#2b4c6e] text-[16px] leading-[1.8]">
              EKM operates with a structured service framework designed to
              ensure clarity from requirement identification to final delivery
              coordination. Our approach emphasizes planning, supplier
              engagement, documentation control, and transparent communication.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pl-10 lg:border-l lg:border-[#e2e8f0]"
          >
            {approachList.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Check
                  className="w-[18px] h-[18px] text-[#1a3b5c]"
                  strokeWidth={2.5}
                />
                <span className="text-[#2b4c6e] text-[16px] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] font-semibold text-[#1a3b5c] mb-4">
            Partner With EKM
          </h2>
          <p className="text-[#2b4c6e] text-[16px] mb-8 max-w-[500px] mx-auto leading-relaxed">
            We welcome discussions with clients seeking organized procurement
            and engineering support solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#1a3b5c] text-white text-[15px] font-medium rounded hover:bg-[#122a42] transition-colors duration-300 shadow-sm"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
