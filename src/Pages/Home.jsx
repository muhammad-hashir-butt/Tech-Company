import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPalette, 
  FaCloud, 
  FaServer, 
  FaLock 
} from "react-icons/fa";

const services = [
  { title: "Web Development", icon: <FaLaptopCode size={28} />, color: "text-blue-400" },
  { title: "Mobile Apps", icon: <FaMobileAlt size={28} />, color: "text-green-400" },
  { title: "UI/UX Design", icon: <FaPalette size={28} />, color: "text-purple-400" },
  { title: "Cloud Solutions", icon: <FaCloud size={28} />, color: "text-orange-400" },
  { title: "Database Management", icon: <FaServer size={28} />, color: "text-yellow-400" },
  { title: "Cyber Security", icon: <FaLock size={28} />, color: "text-red-400" },
];

const Home = () => {
  return (
    <section className="text-white bg-black">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.9) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm"
        >
          <span className="text-blue-300 text-sm font-medium">🚀 Innovative Tech Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
        >
          Building{" "}
          <span className="gradient-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-200 max-w-lg mx-auto mb-6"
        >
          We turn ideas into powerful digital experiences with web, mobile, and cloud solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center"
        >
          <Link
            to="/contact"
            className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-6 py-2 rounded-lg text-white font-semibold text-base shadow-md transition-transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Start Project
          </Link>
          <Link
            to="/projects"
            className="group border-2 border-white/20 hover:border-white/40 px-6 py-2 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition w-full sm:w-auto text-center"
          >
            Our Work
          </Link>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4"
        >
          About Our Company
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          DevHyper Solutions is a technology-driven company delivering innovative web, mobile, and cloud solutions. Our mission is to empower businesses with cutting-edge technology and design.
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400"
            rows={4}
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Services Slider */}
      <section className="py-12 relative">
        <motion.div
          className="flex gap-4 px-4 sm:px-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate services array twice for smooth infinite loop */}
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="min-w-[200px] flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition"
            >
              <div className={`mb-2 ${service.color} flex justify-center`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{service.title}</h3>
            </div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

export default Home;
