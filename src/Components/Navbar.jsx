import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/devhype (2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEIGHT KAM */}
        <div className="flex justify-between items-center h-14">

          {/* LOGO BARA */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="DevHype Logo"
              className="h-24 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-700 font-medium transition hover:text-blue-600
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-500
              hover:from-blue-700 hover:to-cyan-600 text-white font-semibold
              px-6 py-2 rounded-xl shadow-lg shadow-blue-500/30
              hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 font-medium
                hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="px-6 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r
                from-blue-600 to-cyan-500 text-white font-semibold
                py-3 rounded-xl shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
