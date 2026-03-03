import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen pt-4 md:pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <h3 className="text-[#153B61] font-bold tracking-widest text-sm uppercase mb-4">
              LEGAL
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#1a3b5c] leading-tight mb-6 mt-1">
              Privacy Policy
            </h1>
            <p className="text-[#2b4c6e] text-[15px] md:text-[16px] leading-[1.8]">
              EKM Engineering Services Limited ("EKM", "we", "our", or "us")
              respects your privacy and is committed to protecting any personal
              information collected through our website.
              <br className="hidden sm:block" />
              This Privacy Policy explains how we collect, use, and safeguard
              information provided to us when you visit our website.
            </p>
          </div>

          <div className="space-y-10 text-[#2b4c6e] text-[15px] md:text-[16px] leading-[1.8]">
            {/* Information We Collect */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>

              <div className="mb-4">
                <p className="font-medium mb-1">A) Personal Information</p>
                <p className="mb-2">
                  When you contact us through our website forms, we may collect:
                </p>
                <ul className="list-none pl-4 space-y-1">
                  <li>- Full name</li>
                  <li>- Email address</li>
                  <li>- Phone number</li>
                  <li>- Company name</li>
                  <li>- Message details</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-1">B) Technical Information</p>
                <p className="mb-2">
                  When you browse our website, certain non-personal data may be
                  collected automatically, including:
                </p>
                <ul className="list-none pl-4 space-y-1 mb-3">
                  <li>- IP address</li>
                  <li>- Browser type</li>
                  <li>- Device type</li>
                  <li>- Pages visited</li>
                  <li>- Date and time of visit</li>
                </ul>
                <p>
                  This information helps us improve website performance and user
                  experience.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-2">We may use collected information to:</p>
              <ul className="list-none pl-4 space-y-1 mb-4">
                <li>- Respond to inquiries</li>
                <li>- Provide requested information</li>
                <li>- Improve our website and services</li>
                <li>- Communicate relevant updates</li>
                <li>- Maintain website security</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information.</p>
            </section>

            {/* Data Protection & Security */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Data Protection & Security
              </h2>
              <p className="mb-2">
                We implement reasonable technical and organizational measures to
                safeguard personal information from unauthorized access,
                disclosure, alteration, or destruction.
              </p>
              <p>
                While we strive to protect your information, no online
                transmission is completely secure.
              </p>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Cookies & Tracking Technologies
              </h2>
              <p className="mb-2">
                Our website may use cookies or similar technologies to:
              </p>
              <ul className="list-none pl-4 space-y-1 mb-4">
                <li>- Improve functionality</li>
                <li>- Analyze traffic</li>
                <li>- Enhance user experience</li>
              </ul>
              <p>
                You may disable cookies through your browser settings if
                preferred.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Third-Party Services
              </h2>
              <p className="mb-2">We may use third-party tools such as:</p>
              <ul className="list-none pl-4 space-y-1 mb-4">
                <li>- Website hosting providers</li>
                <li>- Analytics services</li>
              </ul>
              <p>
                These service providers may process limited data solely for
                operational purposes and are expected to maintain
                confidentiality.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to
                respond to inquiries or fulfill operational purposes, unless
                longer retention is required by law.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Your Rights
              </h2>
              <p className="mb-2">
                Depending on applicable data protection laws, you may have the
                right to:
              </p>
              <ul className="list-none pl-4 space-y-1 mb-4">
                <li>- Request access to your personal data</li>
                <li>- Request correction of inaccurate data</li>
                <li>- Request deletion of personal data</li>
                <li>- Withdraw consent (where applicable)</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details
                below.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any updates will
                be posted on this page with a revised effective date.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-[20px] font-semibold text-[#1a3b5c] mb-3">
                Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions regarding this Privacy Policy, please
                contact:
              </p>
              <div className="space-y-1">
                <p>EKM Engineering Services Limited</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@ekmengineeringservices.com"
                    className="hover:underline transition-all"
                  >
                    info@ekmengineeringservices.com
                  </a>
                </p>
                <p>Phone: +23490494578</p>
                <p>
                  Address: 7C Rumuovuori Road, Off Mini Road Ada George, Port
                  Harcourt, Rivers State.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
