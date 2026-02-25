// src/pages/CloudSolutions.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CloudSolutions = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* HOME-LIKE PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Technology background"
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

      {/* Hero Section */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Cloud Solutions
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Scalable, secure, and cost-effective cloud infrastructure for modern businesses
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 justify-center items-center" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Migrate to Cloud
            </motion.a>
            <motion.a
              href="#solutions"
              className="bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl border border-white/15 hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section (Home-like) */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 relative overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: "99.99%", label: "Uptime Guarantee" },
            { number: "200+", label: "Cloud Migrations" },
            { number: "60%", label: "Cost Reduction" },
            { number: "24/7", label: "Cloud Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.h3
                className="text-5xl md:text-6xl font-extrabold mb-2 text-white"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-white/90 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section (dark glass cards) */}
      <section className="py-24 px-6" id="solutions">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Cloud{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              {
                title: "Cloud Migration",
                description:
                  "Seamless migration of your applications and data to AWS, Azure, or Google Cloud with zero downtime and optimized performance.",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Infrastructure as Code",
                description:
                  "Automated infrastructure provisioning with Terraform and CloudFormation. Version-controlled, repeatable deployments.",
                icon: "⚙️",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Container Orchestration",
                description:
                  "Docker and Kubernetes deployment for scalable microservices. Auto-scaling and load balancing built-in.",
                icon: "📦",
                gradient: "from-sky-500 to-blue-500",
              },
              {
                title: "Serverless Architecture",
                description:
                  "Build and deploy serverless applications with AWS Lambda, Azure Functions. Pay only for what you use.",
                icon: "⚡",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Cloud Security",
                description:
                  "Enterprise-grade security with encryption, IAM, VPC, and compliance certifications (SOC 2, HIPAA, GDPR).",
                icon: "🔒",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "DevOps & CI/CD",
                description:
                  "Automated deployment pipelines with GitHub Actions, Jenkins, and GitLab CI. Continuous delivery at scale.",
                icon: "🔄",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="relative bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all overflow-hidden group"
                variants={fadeInUp}
                onHoverStart={() => setHoveredService(i)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredService === i ? 1.5 : 0 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div
                  className="text-6xl mb-6"
                  animate={{
                    rotate: hoveredService === i ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredService === i ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>

                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredService === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Platforms (dark section) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Cloud{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-300">Multi-cloud expertise across leading platforms</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              { name: "AWS", color: "from-orange-500 to-yellow-600" },
              { name: "Azure", color: "from-blue-500 to-sky-600" },
              { name: "Google Cloud", color: "from-blue-500 to-green-500" },
              { name: "Docker", color: "from-blue-600 to-cyan-600" },
              { name: "Kubernetes", color: "from-blue-500 to-indigo-600" },
              { name: "Terraform", color: "from-purple-600 to-indigo-700" },
              { name: "Jenkins", color: "from-red-500 to-orange-600" },
              { name: "GitHub Actions", color: "from-gray-600 to-gray-900" },
              { name: "CloudFlare", color: "from-orange-500 to-red-500" },
              { name: "Digital Ocean", color: "from-blue-500 to-blue-700" },
              { name: "Serverless", color: "from-red-500 to-pink-500" },
              { name: "Ansible", color: "from-red-600 to-red-800" },
            ].map((platform, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={scaleIn}
                onHoverStart={() => setHoveredPlatform(i)}
                onHoverEnd={() => setHoveredPlatform(null)}
              >
                <motion.div
                  className={`bg-gradient-to-br ${platform.color} text-white rounded-2xl px-6 py-8 font-bold text-center shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: hoveredPlatform === i ? [-5, 5, -5] : 0 }}
                    transition={{ duration: 0.5, repeat: hoveredPlatform === i ? Infinity : 0 }}
                  >
                    {platform.name}
                  </motion.div>
                </motion.div>

                <motion.div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Benefits (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Cloud{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-300">Why businesses choose cloud solutions</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: "Infinite Scalability", description: "Scale up or down instantly based on demand. Handle traffic spikes effortlessly.", icon: "📈", gradient: "from-green-400 to-emerald-500" },
              { title: "Cost Optimization", description: "Pay only for resources you use. Reduce infrastructure costs by up to 60%.", icon: "💰", gradient: "from-yellow-400 to-orange-500" },
              { title: "High Availability", description: "99.99% uptime SLA with multi-region redundancy and automatic failover.", icon: "⚡", gradient: "from-blue-400 to-cyan-500" },
              { title: "Global Reach", description: "Deploy applications across 25+ regions worldwide for low latency.", icon: "🌍", gradient: "from-indigo-400 to-purple-500" },
              { title: "Enterprise Security", description: "Bank-level encryption, DDoS protection, and compliance certifications.", icon: "🛡️", gradient: "from-red-400 to-pink-500" },
              { title: "Disaster Recovery", description: "Automated backups and instant recovery. Your data is always safe.", icon: "🔄", gradient: "from-purple-400 to-pink-500" },
              { title: "Faster Deployment", description: "Deploy new features in minutes, not months. CI/CD pipelines built-in.", icon: "🚀", gradient: "from-orange-400 to-red-500" },
              { title: "Auto-Scaling", description: "Automatic resource allocation based on traffic and performance metrics.", icon: "⚙️", gradient: "from-cyan-400 to-blue-500" },
              { title: "Expert Support", description: "24/7 cloud architecture support from certified cloud engineers.", icon: "💬", gradient: "from-green-400 to-teal-500" },
            ].map((benefit, i) => (
              <motion.div key={i} className="relative group" variants={scaleIn}>
                <motion.div
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all h-full"
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <motion.div className={`text-5xl mb-4 bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>

                <motion.div className={`absolute -inset-1 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Migration Process (dark cards) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Migration{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300">Smooth transition to cloud in 5 steps</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Assessment & Planning", desc: "Comprehensive audit of your current infrastructure. Create detailed migration roadmap with timeline and cost analysis.", icon: "📋" },
              { step: "02", title: "Architecture Design", desc: "Design scalable cloud architecture optimized for performance, security, and cost. Select best cloud services for your needs.", icon: "🏗️" },
              { step: "03", title: "Migration Execution", desc: "Phased migration with zero downtime. Move applications, databases, and data to cloud with validation at each step.", icon: "🚀" },
              { step: "04", title: "Testing & Optimization", desc: "Comprehensive testing across all environments. Performance tuning and cost optimization for maximum efficiency.", icon: "🔍" },
              { step: "05", title: "Monitoring & Support", desc: "24/7 monitoring with automated alerts. Continuous optimization and scaling based on real-time metrics.", icon: "📊" },
            ].map((item, i) => (
              <motion.div key={i} className="relative" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}>
                <motion.div
                  className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl">{item.icon}</span>
                      <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>

                {i < 4 && (
                  <motion.div
                    className="hidden md:block absolute left-10 top-full w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4, duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (dark cards) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-300">Certified cloud experts you can trust</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: "AWS Certified", icon: "🏅", color: "from-orange-400 to-yellow-500" },
              { title: "Azure Expert", icon: "☁️", color: "from-blue-400 to-sky-500" },
              { title: "Zero Downtime", icon: "⚡", color: "from-green-400 to-emerald-500" },
              { title: "Cost Efficient", icon: "💰", color: "from-yellow-400 to-orange-500" },
              { title: "24/7 Support", icon: "💬", color: "from-purple-400 to-pink-500" },
              { title: "Security First", icon: "🔒", color: "from-red-400 to-pink-500" },
            ].map((benefit, i) => (
              <motion.div key={i} className="relative group" variants={scaleIn}>
                <motion.div
                  className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all text-center h-full flex flex-col items-center justify-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div className={`text-6xl mb-4 bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl text-white">{benefit.title}</h3>
                </motion.div>

                <motion.div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials (dark cards) */}
      <section className="py-24 px-6 bg-black/35 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Success{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">How we transformed businesses with cloud</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              {
                text: "Migrated our entire infrastructure to AWS in 2 weeks with zero downtime. Reduced costs by 55% while improving performance!",
                author: "Alex Morrison",
                role: "CTO, FinTech Pro",
                rating: 5,
              },
              {
                text: "Their Kubernetes setup scaled our platform from 10K to 1M users seamlessly. Best cloud team we've ever worked with!",
                author: "Priya Sharma",
                role: "VP Engineering, SocialHub",
                rating: 5,
              },
              {
                text: "Achieved 99.99% uptime after cloud migration. The serverless architecture they built is amazing and cost-effective.",
                author: "Tom Anderson",
                role: "CEO, CloudStore",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 transition-all"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.span key={j} className="text-yellow-300 text-2xl" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + j * 0.08 }}>
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-gray-300/80">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA (dark) */}
      <section className="py-28 px-6 relative overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" animate={{ x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Infrastructure
            </span>
            ?
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Move to the cloud with confidence. Reduce costs, improve performance, and scale infinitely.
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 justify-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-600/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Cloud Migration
            </motion.a>
            <motion.a
              href="/consultation"
              className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-blue-500/40 transition-all"
              variants={scaleIn}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;