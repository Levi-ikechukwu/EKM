import HeroImage from "../../assets/Hero.png";
import { motion } from "framer-motion";

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <motion.div
          className="max-w-4xl md:ml-10 lg:ml-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#e2e8f0]/85 leading-[1.2] mb-6"
          >
            <span className="block mb-2">Engineering Precision.</span>
            Strategic Procurement Reliable Delivery.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[20px] text-[#cbd5e1] mb-10 leading-relaxed font-light max-w-2xl"
          >
            Providing end-to-end engineering procurement, technical sourcing,
            and industrial support services with a commitment to safety,
            compliance, and operational excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-[#1a3b5c] hover:bg-[#122a42] text-white font-medium rounded transition-colors duration-300 shadow hover:shadow-lg text-lg"
            >
              Request a Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white hover:bg-gray-50 text-[#1a3b5c] font-medium rounded transition-colors duration-300 shadow hover:shadow-lg text-lg"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
