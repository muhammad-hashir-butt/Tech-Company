import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaProjectDiagram, FaSmile, FaGlobe, FaStar, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    { 
      category: "web", 
      title: "E-Commerce Platform", 
      client: "FashionHub", 
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      desc: "Full-featured online store with real-time inventory, payment integration, and advanced analytics dashboard",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      stats: { revenue: "+250%", users: "50K+" }
    },
    { 
      category: "mobile", 
      title: "Fitness Tracker App", 
      client: "FitLife", 
      tech: ["React Native", "Firebase", "TensorFlow"],
      desc: "AI-powered fitness companion with personalized workout plans and nutrition tracking",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      stats: { downloads: "100K+", rating: "4.8★" }
    },
    { 
      category: "web", 
      title: "Enterprise CRM System", 
      client: "SalesPro", 
      tech: ["Next.js", "PostgreSQL", "GraphQL"],
      desc: "Comprehensive customer relationship management platform with advanced analytics and automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      stats: { efficiency: "+180%", clients: "200+" }
    },
    { 
      category: "design", 
      title: "Banking UI/UX Redesign", 
      client: "TrustBank", 
      tech: ["Figma", "Adobe XD", "Protopie"],
      desc: "Modern, accessible banking interface with focus on user experience and security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      stats: { satisfaction: "95%", time: "-40%" }
    },
    { 
      category: "mobile", 
      title: "Food Delivery Platform", 
      client: "QuickBite", 
      tech: ["Flutter", "Node.js", "Socket.io"],
      desc: "Real-time food ordering with live tracking, smart recommendations, and instant notifications",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      stats: { orders: "500K+", speed: "25min avg" }
    },
    { 
      category: "web", 
      title: "Learning Management System", 
      client: "EduTech Inc", 
      tech: ["Vue.js", "Laravel", "WebRTC"],
      desc: "Interactive online education platform with live classes, assessments, and progress tracking",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      stats: { students: "75K+", completion: "89%" }
    },
    { 
      category: "web", 
      title: "Real Estate Marketplace", 
      client: "HomeFind", 
      tech: ["React", "Django", "MapBox"],
      desc: "Property listing platform with virtual tours, mortgage calculator, and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      stats: { listings: "10K+", deals: "2K+" }
    },
    { 
      category: "mobile", 
      title: "Healthcare Management App", 
      client: "MediCare Plus", 
      tech: ["Swift", "Kotlin", "AWS"],
      desc: "Comprehensive health tracking with appointment booking, telemedicine, and prescription management",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      stats: { users: "150K+", rating: "4.9★" }
    },
    { 
      category: "design", 
      title: "SaaS Dashboard Redesign", 
      client: "CloudMetrics", 
      tech: ["Sketch", "InVision", "Principle"],
      desc: "Data visualization dashboard with customizable widgets and real-time analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      stats: { engagement: "+220%", retention: "92%" }
    }
  ];

  const filters = ["all", "web", "mobile", "design"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      
      {/* PARALLAX ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: scrollY * 0.5
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER WITH SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Our Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into exceptional digital experiences. 
            <span className="block mt-2 text-blue-600 font-semibold">
              High-impact solutions trusted by global brands
            </span>
          </p>
        </motion.div>

        {/* FILTERS WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, y: -2 }}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group relative px-8 py-3 rounded-full font-bold capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/50"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg"
              }`}
            >
              <span className="relative z-10">
                {filter === "all" ? "All Projects" : filter}
              </span>
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                  style={{ zIndex: 0 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* PROJECT GRID WITH STAGGER ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100"
              >
                {/* PROJECT IMAGE WITH OVERLAY */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide text-gray-800 shadow-lg">
                    {project.category}
                  </div>

                  {/* Stats Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-4"
                  >
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-2 text-center">
                        <div className="text-blue-600 font-bold text-sm">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FaCheckCircle className="text-green-500" />
                    <span className="font-medium">Client: {project.client}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg border border-blue-100"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-600 hover:to-cyan-500 text-gray-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>View Case Study</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-full" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* STATS SECTION WITH SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-2xl mb-20"
        >
          {/* Animated Background Pattern */}
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "30px 30px"
            }}
          />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "250+", label: "Projects Delivered", icon: <FaProjectDiagram className="mx-auto mb-3 text-4xl" /> },
              { value: "120+", label: "Happy Clients", icon: <FaSmile className="mx-auto mb-3 text-4xl" /> },
              { value: "25+", label: "Countries Served", icon: <FaGlobe className="mx-auto mb-3 text-4xl" /> },
              { value: "99.5%", label: "Success Rate", icon: <FaStar className="mx-auto mb-3 text-4xl" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                {stat.icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl font-extrabold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TRUSTED BRANDS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-12"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Trusted by Leading Brands Worldwide
          </motion.h3>
          
          <div className="relative overflow-hidden">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
            
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-10 px-6"
            >
              {[...["Apple", "Google", "Microsoft", "Netflix", "Tesla", "Amazon", "Meta", "Spotify", "Adobe", "Stripe"], 
                ...["Apple", "Google", "Microsoft", "Netflix", "Tesla", "Amazon", "Meta", "Spotify", "Adobe", "Stripe"]].map((client, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-2xl flex items-center justify-center font-bold text-xl text-gray-700 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
                >
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {client}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
          
          <h3 className="text-4xl font-bold text-white mb-4 relative z-10">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 text-lg mb-8 relative z-10">
            Let's create something extraordinary together
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>Get Started Today</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;