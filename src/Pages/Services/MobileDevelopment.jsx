import { motion } from "framer-motion";

const MobileApps = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mobile <span className="text-blue-600">App Development</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hum banate hain <strong>Android & iOS apps</strong> using modern frameworks like <strong>React Native & Flutter</strong>, jo fast, responsive aur seamless experience provide karein.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Cross-Platform Apps",
            description: "Ek hi codebase se Android aur iOS apps, faster development aur consistent UX ke saath.",
            icon: "📱"
          },
          {
            title: "Push Notifications",
            description: "Real-time notifications aur updates users ko engage aur informed rakhein.",
            icon: "🔔"
          },
          {
            title: "App Store Deployment",
            description: "Google Play aur Apple App Store pe smooth aur compliant deployment process.",
            icon: "🛒"
          },
          {
            title: "Performance & Security",
            description: "Optimized, secure, aur scalable apps jo high performance aur reliability dete hain.",
            icon: "⚡"
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech <span className="text-blue-600">Stack</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["React Native", "Flutter", "Firebase", "Redux", "GraphQL", "Node.js", "Expo", "Push Notifications"].map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 font-semibold shadow-md hover:scale-105 transition-transform cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Build Mobile Apps
        </motion.h2>
        <div className="space-y-10">
          {[
            { step: "1", title: "Requirement Analysis", desc: "Aapke business goals aur app ke features samajh ke planning karna." },
            { step: "2", title: "UI/UX Design", desc: "Intuitive aur attractive design jo users ko engage kare." },
            { step: "3", title: "Development & Testing", desc: "Cross-platform app development with continuous testing for bugs & performance." },
            { step: "4", title: "Deployment & Support", desc: "App Store aur Play Store pe launch aur ongoing support for updates & fixes." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="text-blue-600 font-bold text-xl mb-2">Step {item.step}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-blue-600">Us</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Fast Development", icon: "⚡" },
            { title: "Cross-Platform", icon: "📱" },
            { title: "Secure & Reliable", icon: "🔒" },
            { title: "Push Notifications", icon: "🔔" },
            { title: "App Store Ready", icon: "🛒" },
            { title: "Support & Maintenance", icon: "🛠️" },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <div className="font-semibold text-lg">{benefit.title}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Launch Your Mobile App?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s create a fast, reliable, and beautiful mobile app that users will love.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start Your Project
        </motion.a>
      </div>

    </section>
  );
};

export default MobileApps;
