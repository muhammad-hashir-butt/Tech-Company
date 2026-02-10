import { motion } from "framer-motion";

const UIDesign = () => {
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
          UI / UX <span className="text-blue-600">Design</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hum create karte hain <strong>intuitive & visually stunning interfaces</strong> jo users ko engage karein aur brand ke goals ko highlight karein. Tools: <strong>Figma, Adobe XD</strong>.
        </motion.p>
      </div>

      {/* Features / Services Section */}
      <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "User-Centered Design",
            description: "Design focus hamesha users ke needs par, usability aur accessibility ke saath.",
            icon: "👤"
          },
          {
            title: "Wireframes & Prototypes",
            description: "Interactive wireframes aur prototypes jo early stage testing aur feedback ko enable karein.",
            icon: "📝"
          },
          {
            title: "Brand-Aligned Visual Identity",
            description: "Design jo brand ki personality aur values ko represent kare, colors, fonts, aur elements aligned ho.",
            icon: "🎨"
          },
          {
            title: "Responsive Design",
            description: "Mobile, tablet aur desktop ke liye fully responsive interfaces.",
            icon: "📱"
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

      {/* Tools / Tech Stack */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tools & <span className="text-blue-600">Tech</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator", "Zeplin", "Framer"].map((tool, i) => (
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

      {/* Workflow Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-blue-600">Design Process</span>
        </motion.h2>
        <div className="space-y-10">
          {[
            { step: "1", title: "Research & Analysis", desc: "User needs aur market trends analyze karna for informed design decisions." },
            { step: "2", title: "Wireframing", desc: "Low-fidelity layouts aur structure create karna for early feedback." },
            { step: "3", title: "Visual Design", desc: "High-fidelity mockups, colors, typography, aur UI elements design karna." },
            { step: "4", title: "Prototyping & Testing", desc: "Interactive prototypes test karna aur iterate karna based on user feedback." },
            { step: "5", title: "Delivery & Support", desc: "Final assets aur documentation handover plus ongoing design support." },
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
          Ready to Elevate Your App’s UX?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s create an engaging, intuitive, and visually stunning experience for your users.
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

export default UIDesign;
