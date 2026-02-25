// src/pages/WebDevelopment.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WebDevelopment = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

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
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-24 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-24 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Web Development
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming ideas into stunning digital experiences with cutting-edge technology
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#portfolio"
              className="bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl border border-white/15 hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section (Home-like) */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 relative overflow-hidden">
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
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Developers" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.h3
                className="text-5xl md:text-6xl font-extrabold mb-2 text-white"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-white/90 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section (dark glass cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "Frontend Development",
                description:
                  "Crafting beautiful, responsive interfaces with React, Next.js, and modern CSS frameworks. Every pixel perfect, every interaction smooth.",
                icon: "🎨",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Backend & APIs",
                description:
                  "Robust, scalable server architecture with Node.js, Express, and database optimization. Security and performance built-in.",
                icon: "⚙️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Fullstack SaaS Platforms",
                description:
                  "Complete end-to-end solutions from database design to deployment. Built for scale, optimized for speed.",
                icon: "🚀",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "CMS & E-commerce",
                description:
                  "Custom content management and e-commerce platforms with seamless user experiences and powerful admin panels.",
                icon: "🛍️",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Progressive Web Apps",
                description:
                  "Native-like experiences on the web. Offline support, push notifications, and app-like performance.",
                icon: "📱",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Performance Optimization",
                description:
                  "Lightning-fast load times, SEO optimization, and Core Web Vitals excellence. Speed that converts.",
                icon: "⚡",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="relative bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all overflow-hidden group"
                variants={fadeInUp}
                onHoverStart={() => setHoveredService(i)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredService === i ? 1.5 : 0 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div
                  className="text-6xl mb-6"
                  animate={{
                    rotate: hoveredService === i ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredService === i ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>

                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredService === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack (dark section) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300">Technologies we master to build exceptional products</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { name: "React", color: "from-cyan-400 to-blue-500" },
              { name: "Next.js", color: "from-gray-600 to-gray-900" },
              { name: "Node.js", color: "from-green-500 to-green-700" },
              { name: "Express", color: "from-gray-600 to-gray-800" },
              { name: "TailwindCSS", color: "from-cyan-400 to-blue-600" },
              { name: "MongoDB", color: "from-green-600 to-green-800" },
              { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
              { name: "GraphQL", color: "from-pink-500 to-purple-600" },
              { name: "TypeScript", color: "from-blue-600 to-blue-800" },
              { name: "Redux", color: "from-purple-500 to-purple-700" },
              { name: "Docker", color: "from-blue-400 to-blue-600" },
              { name: "AWS", color: "from-orange-500 to-yellow-600" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={scaleIn}
                onHoverStart={() => setHoveredTech(i)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <motion.div
                  className={`bg-gradient-to-br ${tech.color} text-white rounded-2xl px-6 py-8 font-bold text-center shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: hoveredTech === i ? [-5, 5, -5] : 0 }}
                    transition={{ duration: 0.5, repeat: hoveredTech === i ? Infinity : 0 }}
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>

                <motion.div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300">A proven methodology that delivers results</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Deep dive into your business goals, target audience, and competitive landscape. We create a roadmap for success.",
                icon: "🎯",
              },
              {
                step: "02",
                title: "UI/UX Design",
                desc: "Stunning designs that blend aesthetics with functionality. Wireframes, prototypes, and user testing.",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Clean, maintainable code following best practices. Rigorous testing across devices and browsers.",
                icon: "💻",
              },
              {
                step: "04",
                title: "Launch & Scale",
                desc: "Smooth deployment with zero downtime. Continuous monitoring, optimization, and support.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{item.icon}</span>
                      <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>

                {i < 3 && (
                  <motion.div
                    className="hidden md:block absolute left-10 top-full w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4, duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits (dark cards) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-300">Excellence in every aspect of web development</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: "Lightning Fast", icon: "⚡", color: "from-yellow-400 to-orange-500" },
              { title: "SEO Optimized", icon: "🔍", color: "from-green-400 to-emerald-500" },
              { title: "Highly Scalable", icon: "📈", color: "from-blue-400 to-indigo-500" },
              { title: "Bank-Grade Security", icon: "🔒", color: "from-red-400 to-pink-500" },
              { title: "Mobile First", icon: "📱", color: "from-purple-400 to-pink-500" },
              { title: "24/7 Support", icon: "💬", color: "from-cyan-400 to-blue-500" },
            ].map((benefit, i) => (
              <motion.div key={i} className="relative group" variants={scaleIn}>
                <motion.div
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all text-center h-full flex flex-col items-center justify-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className={`text-6xl mb-4 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-white">{benefit.title}</h3>
                </motion.div>

                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Love
              </span>
            </h2>
            <p className="text-xl text-gray-300">What our clients say about us</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                text: "Absolutely incredible work! They transformed our vision into reality with stunning design and flawless functionality.",
                author: "Sarah Johnson",
                role: "CEO, TechStart",
                rating: 5,
              },
              {
                text: "The team's expertise and dedication exceeded all expectations. Our website performance improved by 300%!",
                author: "Michael Chen",
                role: "CTO, CloudScale",
                rating: 5,
              },
              {
                text: "Professional, responsive, and incredibly talented. Best development team we've ever worked with!",
                author: "Emily Rodriguez",
                role: "Founder, ShopHub",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.span
                      key={j}
                      className="text-yellow-300 text-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.08 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-gray-300/80">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA (Home-ish dark) */}
      <section className="py-28 px-6 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Amazing
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's turn your ideas into a powerful digital presence that drives growth and delights users
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Now
            </motion.a>
            <motion.a
              href="/portfolio"
              className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;