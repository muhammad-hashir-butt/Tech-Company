// src/pages/UIDesign.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const UIDesign = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
            opacity: [0.22, 0.42, 0.22],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-24 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.2, 0.38, 0.2],
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
                UI/UX Design
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
            Creating beautiful, intuitive experiences that users love and businesses need
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 justify-center items-center" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Design
            </motion.a>
            <motion.a
              href="#portfolio"
              className="bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl border border-white/15 hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
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
            { number: "800+", label: "Designs Delivered" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "40+", label: "Expert Designers" },
            { number: "15+", label: "Years Experience" },
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
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive UI/UX solutions that drive engagement and conversions
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
                title: "User Research & Testing",
                description:
                  "Deep user insights through interviews, surveys, and usability testing. Data-driven decisions for optimal user experiences.",
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Wireframing & Prototyping",
                description:
                  "Interactive wireframes and clickable prototypes. Test concepts early, iterate fast, and validate before development.",
                icon: "📐",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Visual Design",
                description:
                  "Stunning interfaces with pixel-perfect precision. Typography, color theory, and visual hierarchy that converts.",
                icon: "🎨",
                gradient: "from-rose-500 to-orange-500",
              },
              {
                title: "Design Systems",
                description:
                  "Scalable component libraries and design tokens. Consistent brand experience across all touchpoints.",
                icon: "🧩",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Mobile App Design",
                description:
                  "Native iOS and Android design patterns. Touch-optimized interfaces that feel natural on every device.",
                icon: "📱",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Web Design",
                description:
                  "Responsive websites that adapt beautifully. From landing pages to complex web applications.",
                icon: "💻",
                gradient: "from-orange-500 to-red-500",
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

      {/* Design Tools (dark section) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Toolkit
              </span>
            </h2>
            <p className="text-xl text-gray-300">Industry-leading tools for world-class designs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { name: "Figma", color: "from-purple-500 to-pink-500" },
              { name: "Adobe XD", color: "from-pink-500 to-rose-500" },
              { name: "Sketch", color: "from-orange-500 to-amber-500" },
              { name: "Photoshop", color: "from-blue-500 to-cyan-500" },
              { name: "Illustrator", color: "from-orange-500 to-red-500" },
              { name: "InVision", color: "from-pink-500 to-purple-500" },
              { name: "Framer", color: "from-blue-500 to-indigo-500" },
              { name: "Principle", color: "from-green-500 to-emerald-500" },
              { name: "After Effects", color: "from-purple-600 to-blue-600" },
              { name: "Zeplin", color: "from-orange-500 to-yellow-500" },
              { name: "Miro", color: "from-yellow-400 to-orange-500" },
              { name: "Maze", color: "from-indigo-500 to-purple-600" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={scaleIn}
                onHoverStart={() => setHoveredTool(i)}
                onHoverEnd={() => setHoveredTool(null)}
              >
                <motion.div
                  className={`bg-gradient-to-br ${tool.color} text-white rounded-2xl px-6 py-8 font-bold text-center shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: hoveredTool === i ? [-5, 5, -5] : 0 }}
                    transition={{ duration: 0.5, repeat: hoveredTool === i ? Infinity : 0 }}
                  >
                    {tool.name}
                  </motion.div>
                </motion.div>

                <motion.div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Principles (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Principles
              </span>
            </h2>
            <p className="text-xl text-gray-300">Our foundation for exceptional user experiences</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: "User-Centered", description: "Every decision starts with understanding user needs, goals, and pain points", icon: "👥", gradient: "from-blue-400 to-cyan-500" },
              { title: "Accessibility First", description: "WCAG compliant designs that work for everyone, including users with disabilities", icon: "♿", gradient: "from-green-400 to-emerald-500" },
              { title: "Data-Driven", description: "Decisions backed by analytics, user research, and A/B testing results", icon: "📊", gradient: "from-purple-400 to-pink-500" },
              { title: "Consistency", description: "Unified design language across all platforms and touchpoints", icon: "🎯", gradient: "from-orange-400 to-red-500" },
              { title: "Simplicity", description: "Clean, minimal interfaces that reduce cognitive load and improve usability", icon: "✨", gradient: "from-indigo-400 to-purple-500" },
              { title: "Delight", description: "Thoughtful micro-interactions and animations that create memorable experiences", icon: "💫", gradient: "from-pink-400 to-rose-500" },
            ].map((principle, i) => (
              <motion.div key={i} className="relative group" variants={scaleIn}>
                <motion.div
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all h-full"
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <motion.div
                    className={`text-5xl mb-4 bg-gradient-to-br ${principle.gradient} bg-clip-text text-transparent`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {principle.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </motion.div>

                <motion.div className={`absolute -inset-1 bg-gradient-to-br ${principle.gradient} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process (dark cards) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300">From research to pixel-perfect delivery</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Discover & Research", desc: "User interviews, competitive analysis, and stakeholder workshops. Understanding the problem before designing solutions.", icon: "🔍" },
              { step: "02", title: "Define & Ideate", desc: "User personas, journey maps, and information architecture. Defining the strategy and exploring creative solutions.", icon: "💡" },
              { step: "03", title: "Wireframe & Structure", desc: "Low-fidelity layouts and user flows. Testing concepts with stakeholders before investing in visual design.", icon: "📐" },
              { step: "04", title: "Design & Prototype", desc: "High-fidelity mockups and interactive prototypes. Bringing designs to life with animations and micro-interactions.", icon: "🎨" },
              { step: "05", title: "Test & Iterate", desc: "Usability testing with real users. Gathering feedback and refining designs based on actual behavior.", icon: "🧪" },
              { step: "06", title: "Deliver & Support", desc: "Design handoff with specs and assets. Ongoing collaboration with developers to ensure perfect implementation.", icon: "🚀" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
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

                {i < 5 && (
                  <motion.div
                    className="hidden md:block absolute left-10 top-full w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4, duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-300">Award-winning design that delivers results</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: "Pixel Perfect", icon: "🎯", color: "from-rose-400 to-pink-500" },
              { title: "User-Focused", icon: "👥", color: "from-blue-400 to-cyan-500" },
              { title: "Fast Turnaround", icon: "⚡", color: "from-yellow-400 to-orange-500" },
              { title: "Award Winning", icon: "🏆", color: "from-purple-400 to-pink-500" },
              { title: "Unlimited Revisions", icon: "🔄", color: "from-green-400 to-emerald-500" },
              { title: "Design System", icon: "🧩", color: "from-orange-400 to-red-500" },
            ].map((benefit, i) => (
              <motion.div key={i} className="relative group" variants={scaleIn}>
                <motion.div
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all text-center h-full flex flex-col items-center justify-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div className={`text-6xl mb-4 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-white">{benefit.title}</h3>
                </motion.div>
                <motion.div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials (dark cards) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-300">What our clients say about our designs</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              {
                text: "The UI/UX redesign increased our conversion rate by 250%! Their attention to detail and user research was phenomenal.",
                author: "Rachel Thompson",
                role: "VP Product, TechFlow",
                rating: 5,
              },
              {
                text: "Best design team we've worked with. They transformed our complex product into an intuitive, beautiful experience.",
                author: "James Liu",
                role: "CEO, DataViz",
                rating: 5,
              },
              {
                text: "Our app went from 3.2★ to 4.8★ after their redesign. Users love the new interface and our engagement is through the roof!",
                author: "Sofia Martinez",
                role: "Product Manager, HealthApp",
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
                    <motion.span key={j} className="text-yellow-300 text-2xl" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + j * 0.08 }}>
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

      {/* Final CTA (dark, home vibe) */}
      <section className="py-28 px-6 relative overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" animate={{ x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Ready to Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Beautiful
            </span>
            ?
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Let's design an experience that your users will love and your business will thrive on
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 justify-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Design Project
            </motion.a>
            <motion.a
              href="/case-studies"
              className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIDesign;