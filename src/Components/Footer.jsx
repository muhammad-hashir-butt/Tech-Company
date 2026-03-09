import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, Twitter, Instagram, Github, Linkedin, 
  Mail, Phone, MapPin, Send 
} from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020617] py-10 px-4 md:px-10">
      
      {/* Floating Container - Balanced Height */}
      <div className="max-w-7xl mx-auto bg-[#0a0a0c] border border-white/10 rounded-[50px] px-10 py-12 shadow-2xl relative">
        
        {/* Main Content Grid - items-center used for balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          
          {/* 1. Brand Section - Large but controlled Logo */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <img
                src={logo}
                alt="TechAz Logo"
                className="h-32 md:h-40 lg:h-60 w-auto object-contain brightness-110 drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)]"
                /* 
                   h-44: Logo ko bada dikhayega lekin height ko control mein rakhega.
                */
              />
            </div>
            
            <div className="max-w-sm">
              <p className="text-gray-400 leading-relaxed text-base italic border-l-4 border-blue-600 pl-4 py-1">
                "Empowering businesses with cutting-edge digital solutions. From concept to code, we bring your vision to life."
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, index) => (
                <a key={index} href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all duration-300">
                  <Icon className="h-5 w-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Links Section (Company & Services combined in 4 cols for better space) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> Company
              </h3>
              <ul className="space-y-4 text-gray-400">
                {["Home", "About Us", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}><Link to="#" className="hover:text-blue-500 transition-all">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> Services
              </h3>
              <ul className="space-y-4 text-gray-400">
                {["Web Dev", "Mobile Apps", "UI/UX", "Cloud", "DevOps"].map((item) => (
                  <li key={item} className="hover:text-blue-500 cursor-pointer transition-all">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Get In Touch Card - Centered vertically with logo */}
          <div className="lg:col-span-3">
            <div className="bg-[#111114] border border-white/5 p-8 rounded-[40px] shadow-xl">
              <h3 className="text-white font-bold mb-6 text-xl">Get In Touch</h3>
              <div className="space-y-6 text-[14px]">
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-blue-600/10 rounded-xl"><Mail className="h-5 w-5 text-blue-500" /></div>
                  <span className="text-gray-300">info@hashirsoft.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-blue-600/10 rounded-xl"><Phone className="h-5 w-5 text-blue-500" /></div>
                  <span className="text-gray-300">+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-blue-600/10 rounded-xl"><MapPin className="h-5 w-5 text-blue-500" /></div>
                  <span className="text-gray-300">Phase 8, Karachi, PK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;