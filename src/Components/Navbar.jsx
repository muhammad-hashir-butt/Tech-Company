import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/devhype (2).png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} className="h-20" alt="DevHype Logo" />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-blue-600 focus:outline-none"
              >
                Services <ChevronDown size={16} className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white shadow-xl rounded-xl w-64 p-4 space-y-3 z-50"
                  >
                    <Link to="/services/web-development" className="block hover:text-blue-600">Web Development</Link>
                    <Link to="/services/mobile-apps" className="block hover:text-blue-600">Mobile Apps</Link>
                    <Link to="/services/ui-ux-design" className="block hover:text-blue-600">UI / UX Design</Link>
                    <Link to="/services/cloud-solutions" className="block hover:text-blue-600">Cloud Solutions</Link>
                    <Link to="/services/cyber-security" className="block hover:text-blue-600">Cyber Security</Link>
                    <Link to="/services/database-management" className="block hover:text-blue-600">Database Management</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/projects">Projects</Link>
            <Link to="/careers">Careers</Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-xl"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 space-y-2 bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-lg overflow-hidden"
            >
              <Link to="/" className="block py-2 px-3 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block py-2 px-3 hover:text-blue-600">About</Link>

              {/* MOBILE SERVICES */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between w-full py-2 px-3 hover:text-blue-600 items-center"
                >
                  Services <ChevronDown size={16} className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                      <Link to="/services/web-development" className="block py-1 px-2 hover:text-blue-600">Web Development</Link>
                      <Link to="/services/mobile-apps" className="block py-1 px-2 hover:text-blue-600">Mobile Apps</Link>
                      <Link to="/services/ui-ux-design" className="block py-1 px-2 hover:text-blue-600">UI / UX Design</Link>
                      <Link to="/services/cloud-solutions" className="block py-1 px-2 hover:text-blue-600">Cloud Solutions</Link>
                      <Link to="/services/cyber-security" className="block py-1 px-2 hover:text-blue-600">Cyber Security</Link>
                      <Link to="/services/database-management" className="block py-1 px-2 hover:text-blue-600">Database Management</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/projects" className="block py-2 px-3 hover:text-blue-600">Projects</Link>
              <Link to="/careers" className="block py-2 px-3 hover:text-blue-600">Careers</Link>
              <Link to="/contact" className="block py-2 px-3 bg-blue-600 text-white rounded-lg text-center">Get Started</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
