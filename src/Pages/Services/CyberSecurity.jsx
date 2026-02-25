// src/pages/CyberSecurity.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CyberSecurity = () => {
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
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt="Cyber security background"
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
            Cyber{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Security
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hum ensure karte hain ke aapki web, mobile aur cloud applications{" "}
            <span className="text-white font-semibold">secure, reliable aur protected</span>{" "}
            rahein against cyber threats.
          </motion.p>
        </div>

        {/* Services / Features */}
        <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Vulnerability Assessment",
              description: "Existing systems aur apps ko scan karna aur potential vulnerabilities identify karna.",
              icon: "🔍",
            },
            {
              title: "Penetration Testing",
              description: "Simulated attacks perform karna taake real-world threats aur weaknesses samajh aayein.",
              icon: "🛡️",
            },
            {
              title: "Secure Development Practices",
              description: "Development ke har stage mein best practices implement karna taake code secure aur resilient ho.",
              icon: "💻",
            },
            {
              title: "Continuous Monitoring",
              description: "Real-time monitoring aur alerting setup karna taake attacks ya issues instantly detect ho sakein.",
              icon: "📡",
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
            {["OWASP", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Metasploit", "Cloud Security Tools"].map(
              (tool, i) => (
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
              )
            )}
          </div>
        </div>

        {/* Cybersecurity Approach / Workflow */}
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
              Cybersecurity Approach
            </span>
          </motion.h2>

          <div className="space-y-10">
            {[
              { step: "1", title: "Assessment", desc: "Systems, apps aur network ka security audit perform karna." },
              { step: "2", title: "Testing", desc: "Penetration testing aur vulnerability scans execute karna." },
              { step: "3", title: "Mitigation", desc: "Findings ko fix karna aur preventive measures implement karna." },
              { step: "4", title: "Monitoring", desc: "Continuous monitoring aur alerts setup karna taake security breach na ho." },
              { step: "5", title: "Training & Awareness", desc: "Team aur users ko educate karna about best security practices." },
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
              Protect Your Business & Data
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let us secure your apps, infrastructure, and cloud environment with enterprise-grade cybersecurity
              solutions.
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
              Get Protected
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;