import AboutImage from "../../assets/About.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const points = [
    "Vendor Sourcing & Evaluation",
    "Industrial Procurement",
    "Project Supply Chain Support",
    "Quality & Compliance Assurance",
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 w-full bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5 xl:gap-6 items-stretch">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-center h-full py-2"
          >
            <h3 className="text-gray-500 font-medium tracking-widest text-[11px] uppercase mb-2">
              About EKM
            </h3>

            <h2 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-[#1a3b5c] leading-[1.3] mb-4 whitespace-nowrap lg:tracking-normal">
              Engineering Procurement and
              <br />
              Industrial Support Solutions
              <br />
              You Can Rely On
            </h2>

            <p className="text-gray-500 text-[13.5px] md:text-[14.5px] leading-relaxed mb-6 pr-4 lg:pr-8">
              EKM Engineering Services Limited was incorporated in Nigeria (RC
              1822379) with the objective of providing organized engineering
              procurement and industrial support services for companies
              operating in project-based and industrial sectors. The company was
              founded in response to the growing need for reliable procurement
              coordination within engineering and construction environments.
              Many projects experience delays or cost overruns due to fragmented
              sourcing systems and inadequate documentation control. EKM bridges
              this gap by providing a structured equipment procurement support
              framework that improves efficiency and accountability. From its
              inception, the company has focused on developing systems that
              enable transparency while ensuring materials and technical
              supplies meet required international standards.
            </p>

            {/* Checkmarks Grid */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-8"
            >
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2 text-[#333333] shrink-0 font-bold"
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
                  <span className="text-[#1a3b5c] font-medium text-[13px] sm:text-[13.5px]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/services"
                  className="inline-block px-6 py-2.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded transition-colors duration-300 shadow hover:shadow-lg text-[13px]"
                >
                  View Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-2 xl:col-span-2 w-full h-full lg:max-w-none flex items-stretch justify-end"
          >
            <div className="relative w-full h-full min-h-[350px] lg:min-h-0">
              <img
                src={AboutImage}
                alt="Engineering and Industrial Support"
                className="absolute inset-0 w-full h-full object-cover rounded shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
