import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, DollarSign, Users, Globe, Clock, Award, 
  MapPin, Calendar, Send, Heart, Zap, Coffee,
  Target, TrendingUp, Smile, CheckCircle, ArrowRight,
  Facebook, Twitter, Instagram, Github, Linkedin
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
    message: ""
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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    }
  ];

  const benefits = [
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: "Competitive Salary", 
      desc: "Industry-leading compensation packages with annual raises",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "Flexible Hours", 
      desc: "Work when you're most productive, no strict 9-5",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: "Remote Work", 
      desc: "Work from anywhere in the world with global team",
      color: "from-purple-400 to-pink-500"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Career Growth", 
      desc: "Regular promotions and skill development programs",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Great Team", 
      desc: "Collaborative and supportive work environment",
      color: "from-red-400 to-rose-500"
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: "Latest Tech", 
      desc: "Work with cutting-edge tools and technologies",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const perks = [
    { icon: <Coffee className="w-6 h-6" />, text: "Free snacks & beverages", color: "text-amber-600" },
    { icon: <Heart className="w-6 h-6" />, text: "Health insurance", color: "text-red-500" },
    { icon: <Zap className="w-6 h-6" />, text: "Gym membership", color: "text-yellow-500" },
    { icon: <Target className="w-6 h-6" />, text: "Learning budget", color: "text-blue-600" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Stock options", color: "text-green-600" },
    { icon: <Smile className="w-6 h-6" />, text: "Team events", color: "text-purple-600" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Application submitted successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", position: "", resume: "", message: "" });
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100">
      
      {/* PARALLAX ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: scrollY * 0.5
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
              We're Hiring
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Join Our <span className="text-blue-600">Dream Team</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build the future with passionate innovators. We're looking for talented individuals 
            <span className="block mt-2 text-blue-600 font-semibold">
              who want to make a real impact on millions of users worldwide
            </span>
          </p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Where Innovation Meets Passion</h3>
              <p className="text-lg">Join 100+ talented professionals building tomorrow's technology</p>
            </div>
          </motion.div>
        </motion.div>

        {/* WHY WORK WITH US - Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-blue-600">HashirSoft</span>?
            </h2>
            <p className="text-gray-600 text-lg">Amazing benefits that make you love your work</p>
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
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ADDITIONAL PERKS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 p-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "30px 30px"
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
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
              >
                <div className={`${perk.color} mx-auto mb-3`}>
                  {perk.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700">{perk.text}</p>
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
              Open <span className="text-blue-600">Positions</span>
            </h2>
            <p className="text-gray-600 text-lg">Find your perfect role and start your journey</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setSelectedJob(job)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                {/* Job Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold uppercase">
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                      <Calendar size={16} />
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COMPANY CULTURE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our <span className="text-blue-600">Culture</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At <strong className="text-blue-600">HashirSoft</strong>, we believe in creating an environment where creativity flourishes 
                and innovation thrives. We value transparency, collaboration, and continuous learning.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Join a team that celebrates diversity, encourages new ideas, and supports 
                your professional growth every step of the way.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Innovation First", "Work-Life Balance", "Continuous Learning", "Diversity & Inclusion"].map((value, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="font-semibold text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4.9/5", label: "Employee Satisfaction", color: "from-green-400 to-emerald-500" },
                { value: "150+", label: "Team Members", color: "from-blue-400 to-cyan-500" },
                { value: "35%", label: "Women in Tech", color: "from-purple-400 to-pink-500" },
                { value: "20+", label: "Nationalities", color: "from-orange-400 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
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

        {/* TEAM PHOTOS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Life at <span className="text-blue-600">HashirSoft</span></h2>
            <p className="text-gray-600 text-lg">See what makes us special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-64 group"
              >
                <img src={img} alt={`Team ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* APPLICATION FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="apply"
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 text-lg">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
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
                    <option value="" className="bg-gray-800">Select Position</option>
                    {openings.map((job, i) => (
                      <option key={i} value={job.title} className="bg-gray-800">{job.title}</option>
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
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 text-lg"
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

        {/* FOOTER SECTION */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-b from-gray-900 to-black text-gray-300 rounded-3xl overflow-hidden"
        >
          <div className="px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Hashir<span className="text-blue-500">Soft</span>
                </h2>
                <p className="text-sm leading-relaxed mb-6">
                  Building digital excellence through innovative software solutions. 
                  We transform ideas into powerful digital experiences that drive business growth.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, label: "Facebook" },
                    { icon: <Twitter size={20} />, label: "Twitter" },
                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                    { icon: <Instagram size={20} />, label: "Instagram" },
                    { icon: <Github size={20} />, label: "GitHub" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {["Home", "About", "Services", "Projects", "Careers", "Contact"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                <ul className="space-y-3">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Cloud Solutions",
                    "DevOps",
                    "QA & Testing"
                  ].map((service) => (
                    <li key={service}>
                      <span className="hover:text-white cursor-pointer transition">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
                <p className="text-sm mb-4">
                  Subscribe to get updates on our latest projects and tech insights.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-8"></div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="text-sm">
                © {new Date().getFullYear()} <span className="text-white font-semibold">HashirSoft</span>. 
                All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
              </div>
            </motion.div>
          </div>
        </motion.footer>

      </div>
    </section>
  );
};

export default Careers;