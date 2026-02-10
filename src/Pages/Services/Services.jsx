import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    subtitle: "Modern, responsive, and scalable websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile Apps",
    subtitle: "iOS & Android apps with great UX.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UI/UX Design",
    subtitle: "Beautiful and intuitive user interfaces.",
    image: "https://images.unsplash.com/photo-1559028012-4819b6c02e32?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Reliable cloud architecture & management.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Database Management",
    subtitle: "Optimized, secure database solutions.",
    image: "https://images.unsplash.com/photo-1581091215366-3bfb84b40b19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cyber Security",
    subtitle: "Protecting your digital assets.",
    image: "https://images.unsplash.com/photo-1591696205602-5d0d8f33e7ec?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="mt-32 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm sm:text-base">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
