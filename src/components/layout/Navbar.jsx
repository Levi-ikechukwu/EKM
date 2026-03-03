import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide on scroll down logic
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      if (isOpen) setIsOpen(false); // Close mobile menu if open
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[68px] sm:h-[76px] items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src={Logo}
                alt="EKM Engineering Services Limited"
                className="h-12 sm:h-14 w-auto transform transition-transform duration-300"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.name}
                  className="relative flex flex-col items-start"
                >
                  <Link
                    to={link.path}
                    className={`text-[15px] font-semibold tracking-wide transition-colors duration-200 py-2 ${
                      isActive
                        ? "text-[#153B61]"
                        : "text-gray-700 hover:text-[#153B61]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* The exact animated dot/line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-[60%] h-[3px] rounded-full bg-[#153B61]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a] p-2 rounded-md transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Close (X) Icon */
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (location.pathname === "/" && link.path === "/");
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#1e3a8a]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
