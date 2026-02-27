import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, FaApple, FaAndroid, FaMobileAlt, FaRocket, FaShieldAlt, FaSync, FaLinkedin, FaTwitter, FaGithub 
} from "react-icons/fa";
import { 
  Zap, Smartphone, Code, Globe, Shield, TrendingUp, Cpu, Layers, Layout, ArrowRight, CheckCircle, Bell, Lock, MapPin 
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA CONSTANTS
═══════════════════════════════════════════════════════════ */
const expertise = [
  { icon: <FaApple size={24} />, title: "iOS Engineering", desc: "Native Swift & SwiftUI applications built for elite performance and Apple ecosystem integration." },
  { icon: <FaAndroid size={24} />, title: "Android Ecosystem", desc: "High-performance Kotlin applications following modern Material Design 3 principles." },
  { icon: <Layers size={24} />, title: "Cross-Platform", desc: "Single codebase solutions with React Native and Flutter for rapid multi-platform scaling." },
  { icon: <Globe size={24} />, title: "Hybrid PWA", desc: "Web-based mobile experiences with offline capabilities and native-like feel." },
  { icon: <Cpu size={24} />, title: "App Modernization", desc: "Refactoring legacy mobile apps into modern, high-speed architectural frameworks." },
  { icon: <Shield size={24} />, title: "Enterprise Mobile", desc: "Secure, scalable mobile infrastructure for complex business logic and internal systems." },
];

const techArsenal = [
  { name: "React Native", color: "text-blue-400" }, { name: "Flutter", color: "text-blue-500" },
  { name: "SwiftUI", color: "text-orange-500" }, { name: "Kotlin", color: "text-purple-500" },
  { name: "Firebase", color: "text-yellow-500" }, { name: "GraphQL", color: "text-pink-500" },
  { name: "AWS Mobile", color: "text-orange-400" }, { name: "SQLite", color: "text-cyan-400" },
];

const mobileJourney = [
  { step: "01", title: "STRATEGY", desc: "Defining user flows and architecting the mobile product roadmap." },
  { step: "02", title: "DESIGN", desc: "Crafting high-fidelity UI/UX systems optimized for touch-first interactions." },
  { step: "03", title: "ENGINEERING", desc: "Agile development sprints with continuous integration and testing." },
  { step: "04", title: "LAUNCH", desc: "Handling App Store and Play Store deployments with ASO optimization." },
];

/* ═══════════════════════════════════════════════════════════
   COMPONENTS (CURSOR & BACKGROUND)
═══════════════════════════════════════════════════════════ */
const CustomCursor = () => {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const tx = useSpring(cx, { stiffness: 120, damping: 25 });
  const ty = useSpring(cy, { stiffness: 120, damping: 25 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => { cx.set(e.clientX); cy.set(e.clientY); };
    const over = (e) => { if (e.target.closest("a,button")) setHovered(true); };
    const out  = (e) => { if (e.target.closest("a,button")) setHovered(false); };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout",  out);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); window.removeEventListener("mouseout",  out); };
  }, [cx, cy]);

  return (
    <>
      <motion.div style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%" }} className="fixed top-0 left-0 w-3 h-3 bg-violet-500 rounded-full pointer-events-none z-[9999]" />
      <motion.div style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }} animate={{ scale: hovered ? 1.8 : 1, borderColor: hovered ? "#a78bfa" : "rgba(255,255,255,0.2)" }} className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998]" />
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
   MAIN MOBILEDEVELOPMENT COMPONENT
═══════════════════════════════════════════════════════════ */
const MobileDevelopment = () => {
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

  return (
    <div className="bg-[#03040a] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        body { cursor: none; }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        <motion.div className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" style={{ x: smoothX, y: smoothY, left: -250, top: -250 }} />
      </div>

      <CustomCursor />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="text-violet-400 font-mono text-[10px] tracking-[0.5em] uppercase">Services // Mobile</span>
          </motion.div>
          <h1 className="text-[clamp(45px,8vw,110px)] font-black leading-[0.85] tracking-tighter">
            WE ARCHITECT <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">
              Mobile Systems.
            </span>
          </h1>
          <div className="mt-12 max-w-2xl reveal">
            <p className="text-gray-500 font-mono text-[13px] tracking-widest leading-loose">
              WE ENGINEER HIGH-PERFORMANCE NATIVE AND CROSS-PLATFORM MOBILE EXPERIENCES THAT DEFINE THE NEXT GENERATION OF DIGITAL INTERACTION.
            </p>
          </div>
        </div>
      </section>

      {/* STATS (HOME STYLE) */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"LAUNCHED", v:"300+", c:"text-blue-400"},
            {l:"ACTIVE USERS", v:"5M+", c:"text-violet-400"},
            {l:"APPROVAL", v:"99%", c:"text-pink-400"},
            {l:"RATING", v:"4.8★", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 text-center group">
              <div className={`text-4xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">EXPERTISE</p>
            <h2 className="text-5xl font-black tracking-tighter uppercase">Mobile Capabilities.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((s, i) => (
              <div key={i} className="reveal p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-mono">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH ARSENAL (MINIMALIST) */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Technical Arsenal.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techArsenal.map((tech, i) => (
              <div key={i} className="reveal group p-8 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all">
                <span className={`text-xl font-black tracking-tighter uppercase ${tech.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (GRID CARDS) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16 text-right">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">CORE FEATURES</p>
            <h2 className="text-5xl font-black tracking-tighter uppercase">Built-in Excellence.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Bell size={20} />, title: "Smart Notifications", desc: "AI-driven push notifications for maximum user retention." },
              { icon: <Lock size={20} />, title: "Biometric Security", desc: "FaceID and Fingerprint authentication for ironclad security." },
              { icon: <FaSync size={20} />, title: "Real-time Sync", desc: "Seamless multi-device synchronization with sub-second latency." },
              { icon: <FaRocket size={20} />, title: "Native Speed", desc: "Optimized for 60fps performance across all devices." },
              { icon: <MapPin size={20} />, title: "Geo-fencing", desc: "High-precision location services and spatial aware features." },
              { icon: <Shield size={20} />, title: "Bank-grade Security", desc: "End-to-end encryption for all user data and transactions." },
            ].map((f, i) => (
              <div key={i} className="reveal p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all group">
                <div className="text-violet-400 mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">{f.title}</h4>
                <p className="text-gray-500 text-xs font-mono">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (ARCHITECTURAL STYLE) */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Development Journey.</h2>
          </div>
          <div className="space-y-12">
            {mobileJourney.map((p, i) => (
              <div key={i} className="reveal flex gap-8 items-start border-l border-white/10 pl-8 relative">
                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[6px] top-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                <span className="text-3xl font-black text-white/10 font-mono leading-none">{p.step}</span>
                <div>
                  <h4 className="text-xl font-bold text-violet-400 mb-2 uppercase tracking-widest">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg font-mono">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-[clamp(30px,6vw,60px)] font-black tracking-tighter mb-10 leading-none uppercase">
            Let's Engineer <br /> Your App.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-[10px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300 group">
            START BUILDING <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700 uppercase">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default MobileDevelopment;