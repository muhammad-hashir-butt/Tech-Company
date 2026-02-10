import { motion } from "framer-motion";

const CloudSolutions = () => {
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
          Cloud <span className="text-blue-600">Solutions</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hum provide karte hain scalable aur secure <strong>cloud infrastructure</strong> solutions jo business ko fast aur reliable banaye. Platforms: <strong>AWS, Azure, Google Cloud</strong>.
        </motion.p>
      </div>

      {/* Services / Features */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Cloud Hosting & Deployment",
            description: "Web apps, APIs aur services ko cloud par deploy karna for high availability aur performance.",
            icon: "☁️"
          },
          {
            title: "Migration & Optimization",
            description: "Existing apps aur infrastructure ko cloud par migrate aur optimize karna cost aur performance ke liye.",
            icon: "🔄"
          },
          {
            title: "Secure Architecture",
            description: "Cloud infrastructure ko secure karna with encryption, firewalls aur best practices.",
            icon: "🔒"
          },
          {
            title: "Scalable Solutions",
            description: "Auto-scaling aur load balancing setup karna taake traffic spikes easily handle ho sakein.",
            icon: "📈"
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

      {/* Tools / Platforms */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Platforms & <span className="text-blue-600">Technologies</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Serverless"].map((tool, i) => (
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
          Our <span className="text-blue-600">Cloud Approach</span>
        </motion.h2>
        <div className="space-y-10">
          {[
            { step: "1", title: "Assessment & Planning", desc: "Business needs aur existing infrastructure assess karna aur migration plan tayar karna." },
            { step: "2", title: "Cloud Architecture Design", desc: "Secure, scalable aur cost-effective cloud architecture design karna." },
            { step: "3", title: "Deployment & Migration", desc: "Apps aur data ko cloud platforms par migrate aur deploy karna." },
            { step: "4", title: "Optimization & Monitoring", desc: "Performance, cost aur security optimize karna with monitoring tools." },
            { step: "5", title: "Support & Scaling", desc: "Ongoing support aur auto-scaling setup taake future growth handle ho sake." },
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
          Ready to Migrate Your Infrastructure to the Cloud?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s build a scalable, secure, and cost-efficient cloud environment for your business.
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

export default CloudSolutions;
