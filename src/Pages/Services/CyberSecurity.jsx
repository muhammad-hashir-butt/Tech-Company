import { motion } from "framer-motion";

const CyberSecurity = () => {
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
          Cyber <span className="text-blue-600">Security</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hum ensure karte hain ke aapki web, mobile aur cloud applications <strong>secure, reliable aur protected</strong> rahein against cyber threats.
        </motion.p>
      </div>

      {/* Services / Features */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Vulnerability Assessment",
            description: "Existing systems aur apps ko scan karna aur potential vulnerabilities identify karna.",
            icon: "🔍"
          },
          {
            title: "Penetration Testing",
            description: "Simulated attacks perform karna taake real-world threats aur weaknesses samajh aayein.",
            icon: "🛡️"
          },
          {
            title: "Secure Development Practices",
            description: "Development ke har stage mein best practices implement karna taake code secure aur resilient ho.",
            icon: "💻"
          },
          {
            title: "Continuous Monitoring",
            description: "Real-time monitoring aur alerting setup karna taake attacks ya issues instantly detect ho sakein.",
            icon: "📡"
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

      {/* Tools / Technologies */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tools & <span className="text-blue-600">Technologies</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["OWASP", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Metasploit", "Cloud Security Tools"].map((tool, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 font-semibold shadow-md hover:scale-105 transition-transform cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {tool}
            </motion.div>
          ))}
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
          Our <span className="text-blue-600">Cybersecurity Approach</span>
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

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Protect Your Business & Data
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let us secure your apps, infrastructure, and cloud environment with enterprise-grade cybersecurity solutions.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get Protected
        </motion.a>
      </div>

    </section>
  );
};

export default CyberSecurity;
