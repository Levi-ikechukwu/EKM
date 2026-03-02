import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
    agreeToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual access key from web3forms.com
          name: formData.fullName,
          company: formData.companyName,
          phone: formData.phoneNumber,
          email: formData.emailAddress,
          message: formData.message,
          subject: "New Contact Form Submission - EKM Website",
          from_name: "EKM Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          phoneNumber: "",
          emailAddress: "",
          message: "",
          agreeToPrivacy: false,
        });
        setTimeout(() => setSubmitStatus(null), 5000); // clear success message after 5 seconds
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#153B61] font-bold tracking-widest text-sm uppercase mb-4">
              CONTACT
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-[32px] font-semibold text-[#1a3b5c] leading-tight mb-4 mt-1">
              Let's Discuss Your Procurement and Engineering Requirements
            </h1>
            <p className="text-[#2b4c6e] text-base md:text-[16px] leading-[1.8] max-w-2xl font-normal">
              Connect with our team to request structured sourcing,
              <br className="hidden sm:block" />
              industrial support, or project coordination services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-[28px] font-semibold text-[#1a3b5c] mb-2">
            Request a Project Consultation
          </h2>
          <p className="text-[#2b4c6e] text-[15px]">
            Request a Project Consultation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a3b5c] rounded-md p-8 sm:p-12 mb-20 max-w-5xl mx-auto shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#bf714a]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#bf714a]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#bf714a]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#bf714a]"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="7"
                className="w-full px-5 py-4 rounded bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#bf714a] resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center space-x-3 pt-2 pb-4">
              <input
                type="checkbox"
                name="agreeToPrivacy"
                id="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleChange}
                className="w-[18px] h-[18px] text-[#1a3b5c] border-gray-300 rounded focus:ring-[#bf714a] bg-white cursor-pointer"
                required
              />
              <label
                htmlFor="agreeToPrivacy"
                className="text-white text-[15px] cursor-pointer tracking-wide"
              >
                I agree to the{" "}
                <Link
                  to="/privacy-policy"
                  className="hover:underline transition-all"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-10 py-3.5 bg-white text-[#1a3b5c] font-bold rounded hover:bg-gray-100 transition-colors duration-300 text-lg shadow-sm ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitStatus === "success" && (
                <p className="mt-4 text-green-300 font-medium tracking-wide">
                  Message sent successfully! We will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-300 font-medium tracking-wide">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Contact Info Lower Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-10">
            <p className="text-[#1a3b5c] text-[16px] md:text-[17px] mb-1 font-medium">
              Prefer Direct Communication?
            </p>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px]">
              You may also contact our team directly via email or phone for
              urgent project discussions.
            </p>
          </div>

          <h3 className="text-[22px] font-semibold text-[#1a3b5c] mb-6">
            Contact Information
          </h3>

          <ul className="space-y-5 text-[#2b4c6e] text-[15px] md:text-[16px] font-medium">
            <li className="flex items-center">
              <MapPin
                className="w-5 h-5 mr-3 shrink-0 text-red-500"
                strokeWidth={2.5}
              />
              <span className="leading-relaxed">
                20 Rumuevuorlu Road, Off Mini Road Ada George, Port Harcourt,
                Nigeria
              </span>
            </li>
            <li className="flex items-center">
              <Mail
                className="w-5 h-5 mr-3 shrink-0 text-black"
                strokeWidth={2.2}
              />
              <a
                href="mailto:info@ekmengineeringservices.com"
                className="hover:text-[#1a3b5c] transition-colors"
              >
                info@ekmengineeringservices.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone
                className="w-5 h-5 mr-3 shrink-0 text-black"
                strokeWidth={2.2}
              />
              <a
                href="tel:+2349037494528"
                className="hover:text-[#1a3b5c] transition-colors"
              >
                +2349037494528
              </a>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
