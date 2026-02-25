// src/pages/Careers.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  DollarSign,
  Users,
  Globe,
  Clock,
  Award,
  MapPin,
  Calendar,
  Send,
  Heart,
  Zap,
  Coffee,
  Target,
  TrendingUp,
  Smile,
  CheckCircle,
  ArrowRight,
  X,
} from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openings = [
    {
      title: "Senior React Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      salary: "$80k - $120k",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      description: "We're looking for an experienced React developer to build scalable web applications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Karachi, PK",
      department: "Design",
      salary: "$60k - $90k",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create beautiful and intuitive user experiences for our digital products.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      department: "Operations",
      salary: "$90k - $130k",
      experience: "4+ years",
      skills: ["Kubernetes", "Docker", "CI/CD", "AWS/Azure"],
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Lahore, PK",
      department: "Management",
      salary: "$70k - $100k",
      experience: "5+ years",
      skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
      description: "Lead cross-functional teams to deliver projects on time and within budget.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      title: "QA Engineer",
      type: "Full-time",
      location: "Islamabad, PK",
      department: "Engineering",
      salary: "$50k - $75k",
      experience: "3+ years",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      description: "Ensure quality and reliability of our products through comprehensive testing.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    },
    {
      title: "Marketing Specialist",
      type: "Part-time",
      location: "Remote",
      department: "Marketing",
      salary: "$40k - $60k",
      experience: "2+ years",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      description: "Drive our digital marketing strategy and grow our brand presence.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      desc: "Industry-leading compensation packages with annual raises",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      desc: "Work when you're most productive, no strict 9-5",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Remote Work",
      desc: "Work from anywhere in the world with global team",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      desc: "Regular promotions and skill development programs",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Team",
      desc: "Collaborative and supportive work environment",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Latest Tech",
      desc: "Work with cutting-edge tools and technologies",
      color: "from-indigo-400 to-blue-500",
    },
  ];

  const perks = [
    { icon: <Coffee className="w-6 h-6" />, text: "Free snacks & beverages" },
    { icon: <Heart className="w-6 h-6" />, text: "Health insurance" },
    { icon: <Zap className="w-6 h-6" />, text: "Gym membership" },
    { icon: <Target className="w-6 h-6" />, text: "Learning budget" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Stock options" },
    { icon: <Smile className="w-6 h-6" />, text: "Team events" },
  ];

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with API call
    // eslint-disable-next-line no-alert
    alert("Application submitted successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", position: "", resume: "", message: "" });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white">
      {/* HOME-LIKE PARALLAX BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration background"
            className="w-full h-full object-cover opacity-25"
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], rotate: [180, 0, 180], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
          >
            <span className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-widest">
              We&apos;re Hiring
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Dream Team
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build the future with passionate innovators. We&apos;re looking for talented individuals
            <span className="block mt-2 text-blue-400 font-semibold">
              who want to make a real impact on millions of users worldwide
            </span>
          </p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Where Innovation Meets Passion</h3>
              <p className="text-lg text-gray-200">
                Join 100+ talented professionals building tomorrow&apos;s technology
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                HashirSoft
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-lg">Amazing benefits that make you love your work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PERKS (keep gradient bar, but dark cards) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 p-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-3xl shadow-2xl relative overflow-hidden"
        >
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

          <div className="relative z-10 text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">More Amazing Perks</h3>
            <p className="text-white/90 text-lg">Because we care about your wellbeing</p>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-white mx-auto mb-3">{perk.icon}</div>
                <p className="text-sm font-semibold text-white/90">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OPEN POSITIONS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Positions
              </span>
            </h2>
            <p className="text-gray-300 text-lg">Find your perfect role and start your journey</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setSelectedJob(job)}
                className="group bg-gradient-to-b from-white/8 to-white/0 border border-white/12 backdrop-blur-lg rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
              >
                {/* Job Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase text-white border border-white/15">
                    {job.type}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={16} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-gray-300 text-sm">
                      <Calendar size={16} />
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-gray-100 rounded-lg text-xs font-medium border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JOB MODAL (optional but matches theme; uses existing selectedJob state) */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-56">
                  <img src={selectedJob.image} alt={selectedJob.title} className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white">{selectedJob.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-white/90 text-sm">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={16} /> {selectedJob.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <DollarSign size={16} /> {selectedJob.salary}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={16} /> {selectedJob.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-semibold">
                      {selectedJob.department}
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-gray-100 border border-white/10 rounded-full text-sm font-semibold">
                      {selectedJob.type}
                    </span>
                  </div>

                  <p className="text-gray-200 leading-relaxed mb-5">{selectedJob.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedJob.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-gray-100 rounded-lg text-xs font-medium border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#apply"
                    onClick={() => setSelectedJob(null)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl hover:shadow-blue-600/40 transition"
                  >
                    Apply for this role <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* COMPANY CULTURE (dark theme) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Culture
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                At <strong className="text-blue-400">HashirSoft</strong>, we believe in creating an environment where creativity flourishes
                and innovation thrives. We value transparency, collaboration, and continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Join a team that celebrates diversity, encourages new ideas, and supports your professional growth every step of the way.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Innovation First", "Work-Life Balance", "Continuous Learning", "Diversity & Inclusion"].map((value, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="font-semibold text-gray-100">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4.9/5", label: "Employee Satisfaction", color: "from-green-400 to-emerald-500" },
                { value: "150+", label: "Team Members", color: "from-blue-400 to-cyan-500" },
                { value: "35%", label: "Women in Tech", color: "from-purple-400 to-pink-500" },
                { value: "20+", label: "Nationalities", color: "from-orange-400 to-red-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-center shadow-xl text-white`}
                >
                  <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TEAM PHOTOS (dark) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Life at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                HashirSoft
              </span>
            </h2>
            <p className="text-gray-300 text-lg">See what makes us special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl h-64 group"
              >
                <img src={img} alt={`Team ${index + 1}`} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* APPLICATION FORM (already dark; just keep consistent) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="apply"
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden border border-white/10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Join Us?</h2>
              <p className="text-gray-300 text-lg">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none backdrop-blur-sm"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none backdrop-blur-sm"
                  >
                    <option value="" className="bg-gray-800">
                      Select Position
                    </option>
                    {openings.map((job, i) => (
                      <option key={i} value={job.title} className="bg-gray-800">
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Resume/Portfolio Link *</label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none backdrop-blur-sm"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Why do you want to join us?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition outline-none resize-none backdrop-blur-sm"
                  placeholder="Tell us about yourself and why you're a great fit..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Send size={20} />
                <span>Submit Application</span>
              </motion.button>

              <p className="text-center text-gray-400 text-sm">
                By submitting this form, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;