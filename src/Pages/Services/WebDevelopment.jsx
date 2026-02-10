import { motion } from "framer-motion";

const WebDevelopment = () => {
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
          Web <span className="text-blue-600">Development</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We craft high-performance, responsive websites and SaaS platforms using modern technologies like React, Next.js, and Node.js.
        </motion.p>
      </div>

      {/* Services / What We Do */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Frontend Development",
            description: "Responsive, interactive, and pixel-perfect UI using React.js, Next.js, TailwindCSS, and modern JS frameworks.",
            icon: "🖥️"
          },
          {
            title: "Backend & APIs",
            description: "Build secure, scalable, and fast backend systems with Node.js, Express, and REST/GraphQL APIs.",
            icon: "🔧"
          },
          {
            title: "Fullstack SaaS Platforms",
            description: "End-to-end SaaS solutions from database to UI, optimized for performance, SEO, and scalability.",
            icon: "⚡"
          },
          {
            title: "CMS & E-commerce",
            description: "Custom CMS and e-commerce platforms for businesses to manage content, products, and users efficiently.",
            icon: "🛒"
          }
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
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
          {["React", "Next.js", "Node.js", "Express", "TailwindCSS", "MongoDB", "PostgreSQL", "GraphQL"].map((tech, i) => (
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

      {/* How We Work */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Work
        </motion.h2>
        <div className="space-y-10">
          {[
            { step: "1", title: "Discovery & Planning", desc: "We understand your business, goals, and audience to plan the perfect web solution." },
            { step: "2", title: "UI/UX Design", desc: "Creating intuitive and modern interfaces that engage users and convert visitors." },
            { step: "3", title: "Development & Testing", desc: "High-quality, responsive websites with clean code, tested on all devices." },
            { step: "4", title: "Launch & Optimization", desc: "Deploy, monitor performance, and continuously improve SEO, speed, and usability." },
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
            { title: "High Performance", icon: "⚡" },
            { title: "SEO Friendly", icon: "🔍" },
            { title: "Scalable Solutions", icon: "📈" },
            { title: "Secure Code", icon: "🔒" },
            { title: "Responsive Design", icon: "📱" },
            { title: "Fast Delivery", icon: "⏱️" },
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

      {/* Call To Action */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to start your web project?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s build a high-performance, beautiful website together that drives results.
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

export default WebDevelopment;
