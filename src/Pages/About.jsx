import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, Target, Award, Globe, 
  Zap, TrendingUp, Heart, Coffee,
  Code, Smartphone, Shield, Rocket,
  Facebook, Twitter, Instagram, Github, Linkedin,
  CheckCircle, ArrowRight, Star, Clock
} from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      desc: "To deliver innovative software solutions that empower businesses and drive digital transformation.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      desc: "A passionate team of full-stack developers and designers crafting scalable digital products.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Values",
      desc: "Innovation, transparency, quality, and long-term partnerships with our clients.",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      desc: "Serving startups and enterprises worldwide with remote-first collaboration.",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80"
    },
  ];

  const stats = [
    { icon: <Rocket className="w-10 h-10" />, value: "500+", label: "Projects Completed", color: "text-blue-500" },
    { icon: <Users className="w-10 h-10" />, value: "200+", label: "Happy Clients", color: "text-purple-500" },
    { icon: <Award className="w-10 h-10" />, value: "50+", label: "Awards Won", color: "text-green-500" },
    { icon: <Star className="w-10 h-10" />, value: "15+", label: "Years Experience", color: "text-orange-500" }
  ];

  const values = [
    { icon: <Code className="w-6 h-6" />, title: "Quality Code", desc: "Clean, maintainable, and scalable" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Agile methodology for quick results" },
    { icon: <Shield className="w-6 h-6" />, title: "Security First", desc: "Enterprise-grade security standards" },
    { icon: <Heart className="w-6 h-6" />, title: "Client Focus", desc: "Your success is our priority" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", desc: "Latest tech and best practices" },
    { icon: <Coffee className="w-6 h-6" />, title: "Passion", desc: "We love what we do" }
  ];

  const timeline = [
    { year: "2010", title: "Founded", desc: "Started with a vision to transform digital experiences" },
    { year: "2015", title: "Expansion", desc: "Grew to 50+ team members across multiple countries" },
    { year: "2020", title: "Innovation", desc: "Launched AI-powered development solutions" },
    { year: "2025", title: "Leading", desc: "Now serving 200+ clients with 500+ successful projects" }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
      
      {/* PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')",
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
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl"
        />
      </div>

      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HERO HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
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
                About Us
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              About <span className="text-blue-600">HashirSoft</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a modern software company building high-performance, scalable, 
              and visually stunning digital products for the future.
              <span className="block mt-2 text-blue-600 font-semibold">
                Transforming ideas into powerful digital experiences since 2010
              </span>
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-4xl font-bold mb-3">Building Tomorrow's Technology Today</h3>
              <p className="text-xl">Passionate team of 50+ professionals delivering excellence</p>
            </div>
          </motion.div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

            {/* LEFT - TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Engineering Digital Products
                <span className="text-blue-600"> That Scale</span>
              </h3>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At HashirSoft, we combine clean code, modern UI, and business strategy
                to create products that actually perform in the real world.
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From startups to established brands, we've delivered impactful
                solutions across web platforms, mobile apps, cloud infrastructure, and SaaS products.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "15+ years of industry experience",
                  "500+ successful projects delivered",
                  "99% client satisfaction rate",
                  "Award-winning design & development"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span>Work With Us</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* RIGHT - FEATURES GRID */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* STATS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32 p-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl shadow-2xl relative overflow-hidden"
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

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* OUR VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our Core <span className="text-blue-600">Values</span>
              </h3>
              <p className="text-gray-600 text-lg">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TIMELINE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-blue-600">Journey</span>
              </h3>
              <p className="text-gray-600 text-lg">From humble beginnings to industry leaders</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12" />
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LEADERSHIP TEAM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-32"
          >
            <motion.div
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Our <span className="text-blue-600">Leadership</span>
              </h3>
              <p className="text-gray-600 text-lg">Visionaries driving innovation</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  name: "Muhammad Hashir",
                  role: "Co-Founder & CEO",
                  exp: "Full-Stack Web Developer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                  gradient: "from-blue-600 to-cyan-400"
                },
                {
                  name: "Sarmad Masood",
                  role: "Co-Founder & CTO",
                  exp: "Full-Stack Web Developer",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
                  gradient: "from-purple-600 to-pink-400"
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  {/* Profile Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Social Links on Hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[Linkedin, Twitter, Github].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition"
                        >
                          <Icon size={18} className="text-white" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="font-bold text-3xl mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>

                    <p className={`text-lg font-semibold mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>

                    <p className="text-gray-600 mb-4">
                      {member.exp}
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <span>View Profile</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${member.gradient} opacity-20 rounded-br-full`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
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

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Let's turn your vision into reality with our expert team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-gray-900 to-black text-gray-300 rounded-t-3xl"
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

export default About;