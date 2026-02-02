import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  const features = [
    {
      icon: <Target />,
      title: "Our Mission",
      desc: "To deliver innovative software solutions that empower businesses and drive digital transformation.",
    },
    {
      icon: <Users />,
      title: "Our Team",
      desc: "A passionate team of full-stack developers and designers crafting scalable digital products.",
    },
    {
      icon: <Award />,
      title: "Our Values",
      desc: "Innovation, transparency, quality, and long-term partnerships.",
    },
    {
      icon: <Globe />,
      title: "Global Reach",
      desc: "Serving startups and enterprises worldwide with remote-first collaboration.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-blue-600">DevHype</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DevHype is a modern software company building high-performance,
            scalable, and visually stunning digital products for the future.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Engineering Digital Products
              <span className="text-blue-600"> That Scale</span>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At DevHype, we combine clean code, modern UI, and business strategy
              to create products that actually perform in the real world.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              From startups to established brands, we’ve delivered impactful
              solutions across web platforms, dashboards, and SaaS products.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Work With Us →
            </Link>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl p-10"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
                >
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* LEADERSHIP TEAM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl font-bold mb-14"
          >
            Leadership Team
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                name: "Muhammad Hashir",
                role: "Co-Founder & CEO",
                exp: "Full-Stack Web Developer",
              },
              {
                name: "Sarmad Masood",
                role: "Co-Founder & CEO",
                exp: "Full-Stack Web Developer",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mb-6"></div>

                <h4 className="font-bold text-2xl mb-2">
                  {member.name}
                </h4>

                <p className="text-blue-600 font-semibold mb-1">
                  {member.role}
                </p>

                <p className="text-gray-500">
                  {member.exp}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
