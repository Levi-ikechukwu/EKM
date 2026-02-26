import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a3b5c] w-full text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Company Info & Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">
              EKM Engineering Services Limited
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Professional procurement and engineering support solutions across
              industrial and energy sectors.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Core Services
                </Link>
              </li>
              <li>
                <Link
                  to="/choose"
                  className="hover:text-white transition-colors"
                >
                  Why Choose EKM
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Technical Sourcing and Industrial Procurement
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Local and International Sourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Materials Expediting and Logistics Coordination
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Project Supply Chain Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Construction and Industrial Materials Supply
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Procurement Process Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Industrial Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  General Engineering Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-300 mb-8">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 shrink-0 text-white mt-0.5" />
                <span className="leading-relaxed">
                  20 Rumuevuorlu Road, Off Mini Road
                  <br />
                  Ada George, Port Harcourt, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 shrink-0 text-white" />
                <a
                  href="mailto:info@ekmengineeringservices.com"
                  className="hover:text-white transition-colors"
                >
                  info@ekmengineeringservices.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 shrink-0 text-white" />
                <a
                  href="tel:+2349037494528"
                  className="hover:text-white transition-colors"
                >
                  +2349037494528
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1a3b5c] hover:opacity-80 transition-opacity"
              >
                <Facebook
                  className="w-5 h-5"
                  strokeWidth={0}
                  fill="currentColor"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1a3b5c] hover:opacity-80 transition-opacity"
              >
                {/* SVG for Instagram as a filled circle with inverse icon is trickier with Lucide, we can use a custom approach or standard */}
                <div className="bg-white rounded-full p-1.5 w-full h-full flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1a3b5c] hover:opacity-80 transition-opacity"
              >
                {/* Custom X SVG to match the image precisely */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1a3b5c] hover:opacity-80 transition-opacity"
              >
                <Linkedin
                  className="w-5 h-5"
                  strokeWidth={0}
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="w-full bg-[#7a8b99] py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-100 text-[14px] md:text-[15px] font-light tracking-wide">
            &copy; 2026 EKM Engineering Services Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
