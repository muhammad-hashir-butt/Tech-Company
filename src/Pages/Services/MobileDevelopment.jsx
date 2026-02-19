import { motion } from "framer-motion";
import { useState } from "react";

const MobileDevelopment = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Hero Section with Gradient Background */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              Mobile App Development
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating powerful native and cross-platform mobile experiences that users love
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Build Your App
            </motion.a>
            <motion.a
              href="#showcase"
              className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl border-2 border-purple-600 hover:bg-purple-50 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Showcase
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-500">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: "300+", label: "Apps Launched" },
            { number: "5M+", label: "Active Users" },
            { number: "99%", label: "App Store Approval" },
            { number: "4.8★", label: "Average Rating" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center text-white"
              variants={scaleIn}
            >
              <motion.h3 
                className="text-5xl md:text-6xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-purple-100 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section - Enhanced */}
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end mobile app development solutions for every platform
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
                title: "iOS Development",
                description: "Native iOS apps built with Swift and SwiftUI. Seamless integration with Apple ecosystem, optimized for performance and beautiful UI.",
                icon: "🍎",
                gradient: "from-gray-600 to-gray-900"
              },
              {
                title: "Android Development",
                description: "High-performance Android apps using Kotlin and Jetpack Compose. Material Design principles for intuitive experiences.",
                icon: "🤖",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Cross-Platform Apps",
                description: "Single codebase for iOS and Android using React Native or Flutter. Faster development with native-like performance.",
                icon: "📱",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Progressive Web Apps",
                description: "App-like experiences on the web. Offline capability, push notifications, and installable on any device.",
                icon: "🌐",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "App Modernization",
                description: "Transform legacy apps with modern frameworks, improved UX, and enhanced performance for today's users.",
                icon: "🔄",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Enterprise Solutions",
                description: "Custom enterprise mobile apps with advanced security, scalability, and integration with existing systems.",
                icon: "🏢",
                gradient: "from-indigo-500 to-purple-600"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
                variants={fadeInUp}
                onHoverStart={() => setHoveredFeature(i)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredFeature === i ? 1.5 : 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{ 
                    rotate: hoveredFeature === i ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredFeature === i ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredFeature === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack - Enhanced */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Technology <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-600">Cutting-edge tools for exceptional mobile experiences</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { name: "React Native", color: "from-cyan-400 to-blue-500" },
              { name: "Flutter", color: "from-blue-400 to-blue-600" },
              { name: "Swift", color: "from-orange-500 to-red-500" },
              { name: "Kotlin", color: "from-purple-500 to-purple-700" },
              { name: "Firebase", color: "from-yellow-500 to-orange-600" },
              { name: "GraphQL", color: "from-pink-500 to-purple-600" },
              { name: "Redux", color: "from-purple-500 to-purple-700" },
              { name: "TypeScript", color: "from-blue-600 to-blue-800" },
              { name: "Expo", color: "from-gray-700 to-gray-900" },
              { name: "SQLite", color: "from-blue-500 to-cyan-600" },
              { name: "MongoDB", color: "from-green-600 to-green-800" },
              { name: "AWS Mobile", color: "from-orange-500 to-yellow-600" }
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
                
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-30 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Built-in <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600">Everything your app needs to succeed</p>
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
                title: "Push Notifications",
                description: "Keep users engaged with timely, personalized notifications",
                icon: "🔔",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                title: "Offline Mode",
                description: "Seamless functionality even without internet connection",
                icon: "📴",
                gradient: "from-blue-400 to-indigo-500"
              },
              {
                title: "Real-time Sync",
                description: "Instant data synchronization across all devices",
                icon: "🔄",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                title: "Biometric Auth",
                description: "Secure login with Face ID, Touch ID, and fingerprint",
                icon: "🔐",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                title: "In-App Payments",
                description: "Seamless payment integration with multiple gateways",
                icon: "💳",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                title: "Analytics Dashboard",
                description: "Track user behavior and app performance in real-time",
                icon: "📊",
                gradient: "from-red-400 to-pink-500"
              },
              {
                title: "Social Integration",
                description: "Easy login and sharing with popular social platforms",
                icon: "🤝",
                gradient: "from-indigo-400 to-purple-500"
              },
              {
                title: "Geo-location",
                description: "Advanced location-based features and mapping",
                icon: "📍",
                gradient: "from-orange-400 to-red-500"
              },
              {
                title: "Chat & Messaging",
                description: "Real-time messaging with media sharing capabilities",
                icon: "💬",
                gradient: "from-pink-400 to-purple-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={scaleIn}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full"
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <motion.div 
                    className={`text-5xl mb-4 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
                
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process - Timeline */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Development <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">From concept to App Store in 6 proven steps</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { 
                step: "01", 
                title: "Discovery & Planning", 
                desc: "Understanding your vision, target audience, and business goals. Creating detailed roadmap and wireframes.",
                icon: "🎯"
              },
              { 
                step: "02", 
                title: "UX/UI Design", 
                desc: "Crafting intuitive, beautiful interfaces with focus on user experience. Interactive prototypes and design systems.",
                icon: "🎨"
              },
              { 
                step: "03", 
                title: "Development Sprint", 
                desc: "Agile development with bi-weekly updates. Clean, maintainable code following industry best practices.",
                icon: "💻"
              },
              { 
                step: "04", 
                title: "Quality Testing", 
                desc: "Rigorous testing across devices, OS versions, and real-world scenarios. Bug-free guarantee.",
                icon: "🔍"
              },
              { 
                step: "05", 
                title: "App Store Launch", 
                desc: "Smooth submission to App Store and Play Store. Optimization for maximum visibility and downloads.",
                icon: "🚀"
              },
              { 
                step: "06", 
                title: "Growth & Support", 
                desc: "Continuous monitoring, updates, and feature additions. 24/7 support and performance optimization.",
                icon: "📈"
              },
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
                  className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{item.icon}</span>
                      <h3 className="text-3xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>

                {i < 5 && (
                  <motion.div
                    className="hidden md:block absolute left-10 top-full w-1 h-12 bg-gradient-to-b from-purple-600 to-pink-500"
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

      {/* Why Choose Us */}
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
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-gray-600">Excellence delivered in every line of code</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: "Native Performance", icon: "⚡", color: "from-yellow-400 to-orange-500" },
              { title: "Pixel Perfect UI", icon: "🎨", color: "from-purple-400 to-pink-500" },
              { title: "App Store Expert", icon: "🏆", color: "from-blue-400 to-indigo-500" },
              { title: "Secure & Compliant", icon: "🔒", color: "from-green-400 to-emerald-500" },
              { title: "Agile Delivery", icon: "🚀", color: "from-orange-400 to-red-500" },
              { title: "24/7 Support", icon: "💬", color: "from-cyan-400 to-blue-500" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={scaleIn}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all text-center h-full flex flex-col items-center justify-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className={`text-6xl mb-4 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-gray-800">{benefit.title}</h3>
                </motion.div>
                
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600">Apps that transformed businesses</p>
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
                text: "Our app went from idea to #1 in App Store in just 3 months. The team's expertise in mobile UX is unmatched!",
                author: "Jessica Williams",
                role: "CEO, FitLife",
                rating: 5
              },
              {
                text: "They built a complex fintech app with flawless security and amazing performance. 1M+ downloads and counting!",
                author: "David Park",
                role: "Founder, PayFlow",
                rating: 5
              },
              {
                text: "Best mobile development team ever! Our users love the app, 4.9★ rating speaks for itself.",
                author: "Maria Garcia",
                role: "CTO, ShopNow",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.span 
                      key={j}
                      className="text-yellow-400 text-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + j * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800 text-lg">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Launch Your Dream App?
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-purple-50 mb-12 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transform your idea into a powerful mobile experience that users will love and investors will notice
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
              className="bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Today
            </motion.a>
            <motion.a
              href="/pricing"
              className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.a>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default MobileDevelopment;