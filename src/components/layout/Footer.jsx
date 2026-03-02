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
    <footer className="bg-[#153b61] w-full text-white pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Column 1: Company Info & Links */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-semibold mb-6 tracking-wide">
              EKM Engineering Services Limited
            </h4>
            <p className="text-gray-200 text-[13px] leading-relaxed mb-6 max-w-sm pr-4">
              Professional procurement and engineering support solutions across
              industrial and energy sectors.
            </p>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-200">
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
            <h4 className="text-[15px] font-semibold mb-6 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-200">
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
            <h4 className="text-[15px] font-semibold mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-200 mb-8">
              <li className="flex items-start">
                <MapPin
                  className="w-4 h-4 mr-3 shrink-0 text-white mt-0.5"
                  strokeWidth={2}
                />
                <span className="leading-relaxed">
                  20 Rumuevuorlu Road, Off Mini Road
                  <br />
                  Ada George, Port Harcourt, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  className="w-4 h-4 mr-3 shrink-0 text-white"
                  strokeWidth={2}
                />
                <a
                  href="mailto:info@ekmengineeringservices.com"
                  className="hover:text-white transition-colors"
                >
                  info@ekmengineeringservices.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  className="w-4 h-4 mr-3 shrink-0 text-white"
                  strokeWidth={2}
                />
                <a
                  href="tel:+2349037494528"
                  className="hover:text-white transition-colors"
                >
                  +2349037494528
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5">
              {/* Facebook */}
              <a
                href="#"
                className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center text-[#153b61] hover:opacity-80 transition-opacity"
              >
                <Facebook
                  className="w-4 h-4"
                  strokeWidth={0}
                  fill="currentColor"
                />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ekm_engineering_services_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] rounded bg-white p-[5px] flex items-center justify-center text-[#153b61] hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-full h-full" strokeWidth={2.5} />
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/EkmEngineering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] rounded bg-white flex items-center justify-center text-[#153b61] hover:opacity-80 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[15px] h-[15px]"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ekm-engineering-services-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] rounded bg-white flex items-center justify-center text-[#153b61] hover:opacity-80 transition-opacity"
              >
                <Linkedin
                  className="w-4 h-4"
                  strokeWidth={0}
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
