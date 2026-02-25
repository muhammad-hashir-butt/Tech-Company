// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, url: "#", label: "Facebook" },
    { Icon: Twitter, url: "#", label: "Twitter" },
    { Icon: Linkedin, url: "#", label: "LinkedIn" },
    { Icon: Instagram, url: "#", label: "Instagram" },
    { Icon: Github, url: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "DevOps",
    "QA & Testing",
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand (bigger on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-2">
              <img
                src={logo}
                alt="HashirSoft Logo"
                className="
                  h-28 sm:h-32 md:h-36 lg:h-44
                  w-auto
                  max-w-none
                  object-contain
                  drop-shadow-[0_14px_35px_rgba(0,0,0,0.65)]
                  hover:scale-[1.03] transition-transform duration-300
                "
                style={{ maxWidth: "620px" }}
                loading="lazy"
              />
            </div>

            <p className="text-sm leading-relaxed mb-4 max-w-xl">
              Building digital excellence through innovative software solutions.
              We transform ideas into powerful digital experiences that drive business growth.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="p-2 bg-gray-800/80 hover:bg-blue-600 rounded-lg transition-colors
                             ring-1 ring-gray-700/60 hover:ring-blue-500/60"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="hover:text-white cursor-pointer transition">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (full width bar) */}
          <div className="md:col-span-2 lg:col-span-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div className="lg:col-span-1">
                <h3 className="text-white font-bold text-lg mb-2">Newsletter</h3>
                <p className="text-sm">
                  Subscribe to get updates on our latest projects and tech insights.
                </p>
              </div>

              <form className="lg:col-span-2 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-600/60 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="sm:w-44 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition
                             ring-1 ring-blue-500/30 hover:ring-blue-400/40"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-sm text-center md:text-left">
            © {year} <span className="text-white font-semibold">HashirSoft</span>. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;