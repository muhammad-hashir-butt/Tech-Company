import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPalette, 
  FaCloud, 
  FaServer, 
  FaLock,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";
import { 
  Facebook, Twitter, Instagram, Github, Linkedin,
  Zap, Target, Award, TrendingUp, Code, Smartphone
} from "lucide-react";

const services = [
  { 
    title: "Web Development", 
    icon: <FaLaptopCode size={32} />, 
    color: "from-blue-400 to-blue-600",
    desc: "Scalable web applications with modern frameworks",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80"
  },
  { 
    title: "Mobile Apps", 
    icon: <FaMobileAlt size={32} />, 
    color: "from-green-400 to-emerald-600",
    desc: "Native & cross-platform mobile solutions",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
  },
  { 
    title: "UI/UX Design", 
    icon: <FaPalette size={32} />, 
    color: "from-purple-400 to-pink-600",
    desc: "Beautiful interfaces that users love",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
  },
  { 
    title: "Cloud Solutions", 
    icon: <FaCloud size={32} />, 
    color: "from-orange-400 to-red-600",
    desc: "Reliable cloud infrastructure & migration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
  },
  { 
    title: "Database", 
    icon: <FaServer size={32} />, 
    color: "from-yellow-400 to-orange-600",
    desc: "Optimized data storage & management",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80"
  },
  { 
    title: "Cyber Security", 
    icon: <FaLock size={32} />, 
    color: "from-red-400 to-rose-600",
    desc: "Enterprise-grade security solutions",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
  },
];

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: <FaRocket className="w-8 h-8" />, value: "500+", label: "Projects Completed" },
    { icon: <FaUsers className="w-8 h-8" />, value: "200+", label: "Happy Clients" },
    { icon: <FaTrophy className="w-8 h-8" />, value: "50+", label: "Awards Won" },
    { icon: <FaStar className="w-8 h-8" />, value: "99%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      text: "HashirSoft transformed our digital presence completely. Their team's expertise and dedication are unmatched!"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      text: "Working with HashirSoft was a game-changer. They delivered beyond our expectations with exceptional quality."
    },
    {
      name: "Emily Davis",
      role: "CTO, InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      text: "Professional, creative, and reliable. HashirSoft is our go-to partner for all digital projects!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: scrollY * 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Technology background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
          >
            <span className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap size={16} />
              Next-Gen Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
          >
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We transform complex ideas into seamless digital experiences through expert 
            <span className="text-blue-400 font-semibold"> web, mobile, and cloud engineering</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/50 flex items-center justify-center gap-3"
            >
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-2xl font-bold text-lg transition-all hover:border-blue-400"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="mt-20"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden"
      >
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="text-white mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-extrabold mb-2 text-white">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
              Our <span className="text-blue-400">Specializations</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className={`absolute top-4 right-4 p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-bold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
              Why Choose <span className="text-blue-400">HashirSoft</span>?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We are a team of dedicated developers, designers, and innovators focused on pushing 
              the boundaries of what's possible in the digital realm. Our mission is to deliver 
              exceptional solutions that drive real business results.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <Code size={24} />, title: 'Expert Engineering', desc: 'Certified developers with 10+ years experience' },
                { icon: <Smartphone size={24} />, title: 'Modern Tech Stack', desc: 'Latest frameworks and cutting-edge tools' },
                { icon: <Award size={24} />, title: 'Client-Centric Approach', desc: 'Your success is our top priority' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-blue-400 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              <span>Learn More About Us</span>
              <FaArrowRight />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-white">Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-white">Team Members</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-gradient-to-b from-blue-900/20 to-black/50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-16"></div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto"
            >
              <FaQuoteLeft className="text-blue-400 text-4xl mb-6 mx-auto" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-blue-400"
                />
                <div className="text-left">
                  <div className="font-bold text-white text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex gap-3 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get In <span className="text-blue-400">Touch</span>
              </h2>
              <p className="text-gray-300 text-lg">Ready to start your digital journey? Drop us a message.</p>
            </div>
            
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/20 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Email Address</label>
                <input
                  type="email"
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/20 focus:border-blue-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-300">Project Details</label>
                <textarea
                  rows={5}
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/20 focus:border-blue-500 outline-none transition resize-none text-white placeholder-gray-500"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold text-lg shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <FaArrowRight />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Hashir<span className="text-blue-500">Soft</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6">
                Building digital excellence through innovative software solutions. 
                We transform ideas into powerful digital experiences that drive business growth.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={20} />, label: "Facebook" },
                  { icon: <Twitter size={20} />, label: "Twitter" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn" },
                  { icon: <Instagram size={20} />, label: "Instagram" },
                  { icon: <Github size={20} />, label: "GitHub" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Projects", "Careers", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Cloud Solutions",
                  "DevOps",
                  "QA & Testing"
                ].map((service) => (
                  <li key={service}>
                    <span className="hover:text-white cursor-pointer transition">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to get updates on our latest projects and tech insights.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">HashirSoft</span>. 
              All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;