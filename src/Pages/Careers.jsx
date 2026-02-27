import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, FaLinkedin, FaTwitter, FaGithub, FaMapMarkerAlt, FaDollarSign, FaClock 
} from "react-icons/fa";
import { Zap, Briefcase, Globe, Award, Users, Heart, Coffee, Target, TrendingUp, Smile, CheckCircle, Send, X, Calendar, Clock } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   OPTIMIZED BACKGROUND & CURSOR (CONSISTENT)
═══════════════════════════════════════════════════════════ */
const CustomCursor = () => {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const tx = useSpring(cx, { stiffness: 120, damping: 25 });
  const ty = useSpring(cy, { stiffness: 120, damping: 25 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => { cx.set(e.clientX); cy.set(e.clientY); };
    const over = (e) => { if (e.target.closest("a,button,input,select,textarea")) setHovered(true); };
    const out  = (e) => { if (e.target.closest("a,button,input,select,textarea")) setHovered(false); };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout",  out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout",  out);
    };
  }, [cx, cy]);

  return (
    <>
      <motion.div style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-3 h-3 bg-violet-500 rounded-full pointer-events-none z-[9999]" />
      <motion.div style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovered ? 1.8 : 1, borderColor: hovered ? "#a78bfa" : "rgba(255,255,255,0.2)" }}
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998]" />
    </>
  );
};

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, r: Math.random() * 1.5 + 0.5,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(139, 92, 246, 0.25)";
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
};

/* ═══════════════════════════════════════════════════════════
   CAREERS PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", position: "", resume: "" });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const handleMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", handleMove, { passive: true });
    
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => { if(en.isIntersecting) en.target.classList.add("active"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Received. Our team will contact you soon.");
  };

  return (
    <div className="bg-[#03040a] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        body { cursor: none; }
        .outline-text { -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}</style>

      {/* Optimized Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]"
          style={{ x: smoothX, y: smoothY, left: -250, top: -250 }}
        />
      </div>

      <CustomCursor />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="text-violet-400 font-mono text-[10px] tracking-[0.5em] uppercase">Talent Acquisition</span>
          </motion.div>
          <h1 className="text-[clamp(45px,8vw,110px)] font-black leading-[0.85] tracking-tighter">
            JOIN THE <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              DREAM TEAM.
            </span>
          </h1>
          <div className="mt-12 max-w-2xl">
            <p className="text-gray-500 font-mono text-[13px] tracking-widest leading-loose reveal">
              WE ARE ALWAYS LOOKING FOR ARCHITECTS OF THE FUTURE. BUILD YOUR CAREER AT THE INTERSECTION OF DESIGN AND ENGINEERING.
            </p>
          </div>
        </div>
      </section>

      {/* STATS (HOME STYLE) */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"HAPPY TEAM", v:"4.9/5", c:"text-blue-400"},
            {l:"TALENTS", v:"150+", c:"text-violet-400"},
            {l:"DIVERSITY", v:"35%", c:"text-pink-400"},
            {l:"REGIONS", v:"20+", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 text-center group">
              <div className={`text-4xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS (GRID CARDS LIKE SERVICES) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">PERKS & BENEFITS</p>
            <h2 className="text-5xl font-black tracking-tighter">WHY TECHAZ.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="reveal p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-mono">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS (PROJECT STYLE) */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 text-center">
            <h2 className="text-5xl font-black tracking-tighter">OPEN ROLES.</h2>
            <p className="text-gray-600 font-mono text-[10px] tracking-[0.3em] mt-4 uppercase">Architecting your future starts here</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {openings.map((job, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedJob(job)}
                className="reveal group cursor-pointer bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black tracking-tighter group-hover:text-violet-400 transition-colors">{job.title}</h3>
                    <span className="text-[9px] font-mono border border-white/10 px-3 py-1 rounded-full text-gray-400">{job.type}</span>
                  </div>
                  <div className="flex gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><FaMapMarkerAlt /> {job.location}</span>
                    <span className="flex items-center gap-2"><FaDollarSign /> {job.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM (MINIMALIST) */}
      <section id="apply" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] p-12 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">SEND YOUR PORTFOLIO.</h2>
            <p className="text-gray-600 font-mono text-[10px] tracking-[0.5em] uppercase">We review every single application</p>
          </div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <input 
              type="text" placeholder="FULL NAME" required
              className="bg-transparent border-b border-white/10 py-4 font-mono text-[11px] tracking-widest outline-none focus:border-violet-500 transition-colors"
            />
            <input 
              type="email" placeholder="EMAIL ADDRESS" required
              className="bg-transparent border-b border-white/10 py-4 font-mono text-[11px] tracking-widest outline-none focus:border-violet-500 transition-colors"
            />
            <div className="md:col-span-2">
              <select className="w-full bg-transparent border-b border-white/10 py-4 font-mono text-[11px] tracking-widest outline-none focus:border-violet-500 transition-colors">
                <option className="bg-[#03040a]">SELECT POSITION</option>
                {openings.map(j => <option key={j.title} className="bg-[#03040a]">{j.title.toUpperCase()}</option>)}
              </select>
            </div>
            <input 
              type="url" placeholder="RESUME / PORTFOLIO LINK" required
              className="md:col-span-2 bg-transparent border-b border-white/10 py-4 font-mono text-[11px] tracking-widest outline-none focus:border-violet-500 transition-colors"
            />
            <div className="md:col-span-2 flex justify-center mt-8">
              <button type="submit" className="group flex items-center gap-3 bg-white text-black px-12 py-4 rounded-full text-[10px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300">
                SUBMIT APPLICATION <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* JOB MODAL (DARK GLASS) */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="max-w-2xl w-full bg-[#03040a] border border-white/10 rounded-[32px] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img src={selectedJob.image} className="w-full h-full object-cover opacity-50" />
                <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <X size={20} />
                </button>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-black tracking-tighter">{selectedJob.title}</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-gray-400 font-mono text-[12px] leading-relaxed mb-8">{selectedJob.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedJob.skills.map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-gray-500 uppercase">{s}</span>)}
                </div>
                <a href="#apply" onClick={() => setSelectedJob(null)} className="inline-flex items-center gap-3 bg-violet-500 text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-violet-600 transition-all">
                  APPLY FOR THIS ROLE <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700 uppercase">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   DATA CONSTANTS
═══════════════════════════════════════════════════════════ */
const benefits = [
  { icon: <Zap size={20} />, title: "Competitive Salary", desc: "Industry-leading compensation packages with annual merit-based raises." },
  { icon: <Clock size={20} />, title: "Flexible Hours", desc: "Results-driven culture where you own your time and schedule." },
  { icon: <Globe size={20} />, title: "Remote Work", desc: "Global-first collaboration with the freedom to work from anywhere." },
  { icon: <Award size={20} />, title: "Career Growth", desc: "Structured mentorship and clear pathways to leadership roles." },
  { icon: <Users size={20} />, title: "Great Team", desc: "A supportive ecosystem of top-tier talent and creative minds." },
  { icon: <Briefcase size={20} />, title: "Latest Tech", desc: "Access to the most advanced tools and high-end hardware." },
];

const openings = [
  {
    title: "Senior React Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$80k - $120k",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    description: "We are seeking a senior architect to lead the engineering of high-performance React ecosystems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Karachi, PK",
    salary: "$60k - $90k",
    skills: ["Figma", "Adobe XD", "User Research"],
    description: "Shape the visual future of our global clients by creating intuitive, stunning interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    salary: "$90k - $130k",
    skills: ["Kubernetes", "Docker", "CI/CD", "AWS"],
    description: "Automate and scale the infrastructure that powers our most ambitious digital products.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Lahore, PK",
    salary: "$70k - $100k",
    skills: ["Agile", "Scrum", "Team Leadership"],
    description: "Bridge the gap between vision and execution for enterprise-level software delivery.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];

export default Careers;