// src/pages/DatabaseManagement.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DatabaseManagement = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* HOME-LIKE PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80"
            alt="Database background"
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

      <section className="py-24 px-6">
        {/* Intro Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Database{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Management
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hum design, manage aur optimize karte hain{" "}
            <span className="text-white font-semibold">SQL & NoSQL databases</span>{" "}
            taake aapke apps aur systems fast, reliable aur secure hoon.
          </motion.p>
        </div>

        {/* Core Services / Features */}
        <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Database Design & Optimization",
              description: "Efficient database schema design aur indexing strategies for high performance.",
              icon: "🗄️",
            },
            {
              title: "Data Migration & Backup",
              description: "Seamless migration aur regular backup processes for safety and consistency.",
              icon: "💾",
            },
            {
              title: "Security & Access Control",
              description:
                "Data encryption, role-based access aur secure queries ensure karte hain sensitive data ko safe.",
              icon: "🔒",
            },
            {
              title: "Performance Tuning & Monitoring",
              description: "Queries aur server performance optimize karna for smooth & scalable applications.",
              icon: "⚡",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools / Technologies */}
        <div className="max-w-6xl mx-auto mb-24 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tools &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Technologies
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL Server", "Oracle DB"].map((tool, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/12 rounded-xl px-6 py-3 font-semibold text-gray-100 hover:bg-white/10 hover:border-blue-500/30 transition cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow / Approach */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Database Management Approach
            </span>
          </motion.h2>

          <div className="space-y-10">
            {[
              { step: "1", title: "Planning", desc: "Business requirements analyze karna aur suitable database design plan karna." },
              { step: "2", title: "Implementation", desc: "Database create karna aur integrate karna with applications." },
              { step: "3", title: "Migration", desc: "Existing data ko migrate karna without downtime." },
              { step: "4", title: "Monitoring & Tuning", desc: "Performance metrics monitor karna aur queries optimize karna." },
              { step: "5", title: "Security & Backup", desc: "Data encryption, access control aur regular backups implement karna." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div className="text-blue-400 font-bold text-xl mb-2">Step {item.step}</div>
                <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center py-20 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Optimize Your Data & Systems
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let us manage your databases with best practices for speed, security, and reliability.
            </motion.p>

            <motion.a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold shadow-2xl hover:shadow-blue-600/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseManagement;