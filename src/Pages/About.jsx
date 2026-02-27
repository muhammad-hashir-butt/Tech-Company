import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  FaArrowRight, FaGithub, FaLinkedin, FaTwitter 
} from "react-icons/fa";
// Fixed: Added 'Zap' to imports and removed unused ones
import { Shield, Heart, TrendingUp, Coffee, Code, Zap } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA CONSTANTS (Moved to top to prevent Reference Errors)
═══════════════════════════════════════════════════════════ */
const values = [
  { icon: <Code size={20} />, title: "Precision Code", desc: "Clean, maintainable, and enterprise-grade scalability in every line." },
  { icon: <Zap size={20} />, title: "Agile Velocity", desc: "Rapid deployment cycles without compromising on architectural integrity." },
  { icon: <Shield size={20} />, title: "Fortified Security", desc: "Security-first mindset integrated into the DNA of every digital product." },
  { icon: <Heart size={20} />, title: "Human Centric", desc: "Technology designed for people, ensuring intuitive and seamless experiences." },
  { icon: <TrendingUp size={20} />, title: "Growth Driven", desc: "Solutions that don't just work today, but scale with your future ambitions." },
  { icon: <Coffee size={20} />, title: "Pure Passion", desc: "A relentless obsession with perfection and digital craftsmanship." },
];

const timeline = [
  { year: "2010", title: "THE GENESIS", desc: "Founded with a mission to bridge the gap between complex tech and user experience." },
  { year: "2015", title: "GLOBAL EXPANSION", desc: "Scalability became our core focus as we grew to serve international enterprises." },
  { year: "2020", title: "AI REVOLUTION", desc: "Integrated machine learning and AI to deliver predictive digital solutions." },
  { year: "2024", title: "MARKET LEADERS", desc: "Now the preferred choice for startups and brands looking for elite engineering." },
];

const team = [
  {
    name: "MUHAMMAD HASHIR",
    role: "CO-FOUNDER & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "SARMAD MASOOD",
    role: "CO-FOUNDER & CTO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
];

/* ═══════════════════════════════════════════════════════════
   BACKGROUND & CURSOR COMPONENTS
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
   MAIN ABOUT COMPONENT
═══════════════════════════════════════════════════════════ */
const About = () => {
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
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      obs.disconnect(); // Added cleanup for observer
    };
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#03040a] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        body { cursor: none; }
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
            <span className="text-violet-400 font-mono text-[10px] tracking-[0.5em] uppercase">Behind the Code</span>
          </motion.div>
          <h1 className="text-[clamp(40px,8vw,100px)] font-black leading-[0.9] tracking-tighter">
            WE ARCHITECT <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              DIGITAL LEGACIES.
            </span>
          </h1>
          <div className="mt-12 max-w-2xl reveal">
            <p className="text-gray-500 font-mono text-[13px] tracking-widest leading-loose">
              TECHAZ SOLUTIONS IS A COLLECTIVE OF DESIGNERS, ENGINEERS, AND STRATEGISTS DEDICATED TO BUILDING HIGH-PERFORMANCE ECOSYSTEMS.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"EXPERIENCE", v:"15+ YRS", c:"text-blue-400"},
            {l:"SUCCESS RATE", v:"99%", c:"text-violet-400"},
            {l:"SPECIALISTS", v:"50+", c:"text-pink-400"},
            {l:"SATISFACTION", v:"100%", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 text-center group">
              <div className={`text-4xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">OUR PHILOSOPHY</p>
            <h2 className="text-5xl font-black tracking-tighter">CORE VALUES.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="reveal p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-mono">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter">THE EVOLUTION.</h2>
          </div>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="reveal flex flex-col md:flex-row gap-8 items-start border-l border-white/10 pl-8 relative">
                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[6px] top-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                <span className="text-3xl font-black text-white/20 font-mono">{item.year}</span>
                <div>
                  <h4 className="text-xl font-bold text-violet-400 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16 text-right">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">THE ARCHITECTS</p>
            <h2 className="text-5xl font-black tracking-tighter">LEADERSHIP.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((m, i) => (
              <div key={i} className="reveal group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5">
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 border-t border-white/5">
                  <h4 className="text-2xl font-black tracking-tighter">{m.name}</h4>
                  <p className="text-violet-500 font-mono text-[10px] tracking-[0.3em] uppercase mt-1">{m.role}</p>
                  <div className="flex gap-4 mt-6">
                    <FaLinkedin className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                    <FaTwitter className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                    <FaGithub className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-[clamp(30px,6vw,60px)] font-black tracking-tighter mb-10 leading-none">
            READY TO START YOUR <br /> DIGITAL TRANSFORMATION?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-[12px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300 group">
            START A PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700 uppercase">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default About;