// src/pages/About.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  TrendingUp,
  Heart,
  Coffee,
  Code,
  Smartphone,
  Shield,
  Rocket,
  Twitter,
  Github,
  Linkedin,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      desc: "A passionate team of full-stack developers and designers crafting scalable digital products.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Values",
      desc: "Innovation, transparency, quality, and long-term partnerships with our clients.",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      desc: "Serving startups and enterprises worldwide with remote-first collaboration.",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80",
    },
  ];

  const stats = [
    { icon: <Rocket className="w-10 h-10" />, value: "500+", label: "Projects Completed" },
    { icon: <Users className="w-10 h-10" />, value: "200+", label: "Happy Clients" },
    { icon: <Award className="w-10 h-10" />, value: "50+", label: "Awards Won" },
    { icon: <Star className="w-10 h-10" />, value: "15+", label: "Years Experience" },
  ];

  const values = [
    { icon: <Code className="w-6 h-6" />, title: "Quality Code", desc: "Clean, maintainable, and scalable" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Agile methodology for quick results" },
    { icon: <Shield className="w-6 h-6" />, title: "Security First", desc: "Enterprise-grade security standards" },
    { icon: <Heart className="w-6 h-6" />, title: "Client Focus", desc: "Your success is our priority" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", desc: "Latest tech and best practices" },
    { icon: <Coffee className="w-6 h-6" />, title: "Passion", desc: "We love what we do" },
  ];

  const timeline = [
    { year: "2010", title: "Founded", desc: "Started with a vision to transform digital experiences" },
    { year: "2015", title: "Expansion", desc: "Grew to 50+ team members across multiple countries" },
    { year: "2020", title: "Innovation", desc: "Launched AI-powered development solutions" },
    { year: "2025", title: "Leading", desc: "Now serving 200+ clients with 500+ successful projects" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* HOME-LIKE PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Technology background"
            className="w-full h-full object-cover opacity-25"
          />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-24 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [180, 0, 180], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-24 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
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
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
            >
              <span className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-widest flex items-center gap-2">
                <Zap size={16} />
                About Us
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                TechAz Solutions
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a modern software company building high-performance, scalable, and visually stunning digital
              products for the future.
              <span className="block mt-2 text-blue-400 font-semibold">
                Transforming ideas into powerful digital experiences since 2010
              </span>
            </p>
          </motion.div>

          {/* HERO IMAGE (same, but dark overlay vibe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-[500px] object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-4xl font-bold mb-3">Building Tomorrow's Technology Today</h3>
              <p className="text-xl text-gray-200">Passionate team of 50+ professionals delivering excellence</p>
            </div>
          </motion.div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            {/* LEFT - TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Engineering Digital Products{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  That Scale
                </span>
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At HashirSoft, we combine clean code, modern UI, and business strategy to create products that actually
                perform in the real world.
              </p>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                From startups to established brands, we've delivered impactful solutions across web platforms, mobile
                apps, cloud infrastructure, and SaaS products.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "15+ years of industry experience",
                  "500+ successful projects delivered",
                  "99% client satisfaction rate",
                  "Award-winning design & development",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                    <span className="text-gray-200 font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
              >
                <span>Work With Us</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* RIGHT - FEATURES GRID (dark glass cards) */}
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
                  className="group relative bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* image header (same content, theme-only) */}
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300/80 text-sm leading-relaxed">{feature.desc}</p>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* STATS SECTION (match Home stats style) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-28 py-20 px-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 relative overflow-hidden rounded-3xl"
          >
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  >
                    <div className="text-white mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-5xl font-extrabold mb-2 text-white">{stat.value}</div>
                    <div className="text-white/90 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* OUR VALUES (dark cards) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-28"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Values
                </span>
              </h3>
              <p className="text-gray-300 text-lg">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">{value.title}</h4>
                      <p className="text-gray-300/80 text-sm">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TIMELINE (dark cards, same structure) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-28"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Journey
                </span>
              </h3>
              <p className="text-gray-300 text-lg">From humble beginnings to industry leaders</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-full md:w-5/12" />

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg z-10" />

                  <div className="w-full md:w-5/12">
                    <div className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                      <div className="text-4xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-gray-300/80">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LEADERSHIP TEAM (dark glass, same layout) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-28">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Leadership
                </span>
              </h3>
              <p className="text-gray-300 text-lg">Visionaries driving innovation</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  name: "Muhammad Hashir",
                  role: "Co-Founder & CEO",
                  exp: "Full-Stack Web Developer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                  gradient: "from-blue-600 to-cyan-400",
                },
                {
                  name: "Sarmad Masood",
                  role: "Co-Founder & CTO",
                  exp: "Full-Stack Web Developer",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
                  gradient: "from-purple-600 to-pink-400",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[Linkedin, Twitter, Github].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="p-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 rounded-lg transition border border-white/15"
                        >
                          <Icon size={18} className="text-white" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="font-bold text-3xl mb-2 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h4>

                    <p
                      className={`text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${member.gradient}`}
                    >
                      {member.role}
                    </p>

                    <p className="text-gray-300/80 mb-4">{member.exp}</p>

                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      <span>View Profile</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${member.gradient} opacity-20 rounded-br-full`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA SECTION (home-ish) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-12 md:p-16 text-center backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Let's turn your vision into reality with our expert team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;