import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Compliance", path: "/compliance" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="EKM Engineering Services Limited"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (location.pathname === "/" && link.path === "/");
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#1e3a8a]" // A deep blue that usually matches enterprise logos
                      : "text-gray-700 hover:text-[#1e3a8a]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button could go here */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
