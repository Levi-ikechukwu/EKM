import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-[#bf714a] font-bold tracking-widest text-lg sm:text-xl uppercase mb-6">
            Why Choose EKM
          </h2>
          <p className="text-gray-600 text-base md:text-[17px] leading-relaxed mx-auto max-w-3xl">
            At EKM Engineering Services Limited, our procurement operations are
            structured around <br className="hidden md:block" />
            discipline, traceability, and vendor reliability. We implement
            controlled sourcing processes to <br className="hidden md:block" />
            support cost efficiency, timely delivery, and transparent project
            execution.
          </p>
        </motion.div>

        {/* Rest of the content will go here */}
      </div>
    </section>
  );
}
