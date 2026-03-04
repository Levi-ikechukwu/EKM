import HeroImage from "../../assets/Hero.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative flex items-center bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-16 md:pt-40 md:pb-16 overflow-hidden">
        <motion.div
          className="w-full md:ml-10 lg:ml-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-none md:leading-none mb-3 md:mb-4 max-w-5xl"
          >
            <span className="block text-white">Engineering Precision.</span>
            Strategic Procurement Reliable Delivery.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[16px] sm:text-[18px] md:text-[19px] text-[#cbd5e1] mb-8 md:mb-10 leading-snug font-light max-w-2xl"
          >
            Providing end-to-end engineering procurement, technical sourcing,
            and industrial support services with a commitment to safety,
            compliance, and operational excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded transition-colors duration-300 shadow hover:shadow-lg text-base md:text-lg w-full sm:w-auto text-center"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
