import { motion } from "framer-motion";

const DatabaseManagement = () => {
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
          Database <span className="text-blue-600">Management</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hum design, manage aur optimize karte hain <strong>SQL & NoSQL databases</strong> taake aapke apps aur systems fast, reliable aur secure hoon.
        </motion.p>
      </div>

      {/* Core Services / Features */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Database Design & Optimization",
            description: "Efficient database schema design aur indexing strategies for high performance.",
            icon: "🗄️"
          },
          {
            title: "Data Migration & Backup",
            description: "Seamless migration aur regular backup processes for safety and consistency.",
            icon: "💾"
          },
          {
            title: "Security & Access Control",
            description: "Data encryption, role-based access aur secure queries ensure karte hain sensitive data ko safe.",
            icon: "🔒"
          },
          {
            title: "Performance Tuning & Monitoring",
            description: "Queries aur server performance optimize karna for smooth & scalable applications.",
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
          {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL Server", "Oracle DB"].map((tool, i) => (
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

      {/* Workflow / Approach */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-blue-600">Database Management Approach</span>
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
          Optimize Your Data & Systems
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let us manage your databases with best practices for speed, security, and reliability.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get Started
        </motion.a>
      </div>

    </section>
  );
};

export default DatabaseManagement;
