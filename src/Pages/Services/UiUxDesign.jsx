import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, FaFigma, FaPalette, FaBezierCurve, FaLayerGroup, FaMobileAlt, FaSearch 
} from "react-icons/fa";
import { 
  Zap, PenTool, Layout, Layers, Smartphone, Search, 
  Eye, MousePointer, Shield, TrendingUp, ArrowRight, CheckCircle 
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA CONSTANTS
═══════════════════════════════════════════════════════════ */
const designServices = [
  { icon: <Search size={24} />, title: "User Research", desc: "Deep diving into user psychology and data to define the product strategy." },
  { icon: <PenTool size={24} />, title: "Visual Systems", desc: "Creating elite design systems that maintain brand consistency at scale." },
  { icon: <Layers size={24} />, title: "Interaction Design", desc: "Crafting micro-interactions that make the digital experience feel alive." },
  { icon: <Layout size={24} />, title: "Wireframing", desc: "Architecting the structural blueprint of interfaces before the visual layer." },
  { icon: <Smartphone size={24} />, title: "Mobile UI/UX", desc: "Native-first design approach for seamless iOS and Android experiences." },
  { icon: <MousePointer size={24} />, title: "Prototyping", desc: "High-fidelity interactive models to validate logic before engineering." },
];

const toolkit = [
  { name: "Figma", color: "text-purple-400" }, { name: "Adobe XD", color: "text-pink-500" },
  { name: "Framer", color: "text-white" }, { name: "Sketch", color: "text-orange-400" },
  { name: "After Effects", color: "text-indigo-400" }, { name: "Principle", color: "text-blue-400" },
];

const designProcess = [
  { step: "01", title: "EMPATHIZE", desc: "Understanding the user's pain points and business objectives." },
  { step: "02", title: "IDEATE", desc: "Brainstorming and sketching innovative structural solutions." },
  { step: "03", title: "PROTOTYPE", desc: "Building interactive flows to test the core experience." },
  { step: "04", title: "REFINE", desc: "Pixel-perfect polishing and design-to-dev handoff." },
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
   MAIN UIDesign COMPONENT
═══════════════════════════════════════════════════════════ */
const UIDesign = () => {
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
            <span className="text-violet-400 font-mono text-[10px] tracking-[0.5em] uppercase">Services // UX Design</span>
          </motion.div>
          <h1 className="text-[clamp(45px,8vw,110px)] font-black leading-[0.85] tracking-tighter uppercase">
            WE ARCHITECT <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Visual Systems.
            </span>
          </h1>
          <div className="mt-12 max-w-2xl reveal">
            <p className="text-gray-500 font-mono text-[13px] tracking-widest leading-loose">
              WE DON'T JUST DESIGN SCREENS; WE CRAFT EMOTIONAL JOURNEYS AND HIGH-CONVERSION DIGITAL ECOSYSTEMS THAT USERS LOVE.
            </p>
          </div>
        </div>
      </section>

      {/* STATS (HOME STYLE) */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"DELIVERED", v:"800+", c:"text-blue-400"},
            {l:"SATISFACTION", v:"95%", c:"text-violet-400"},
            {l:"DESIGNERS", v:"40+", c:"text-pink-400"},
            {l:"EXPERIENCE", v:"15+ YRS", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 text-center group">
              <div className={`text-4xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">CAPABILITIES</p>
            <h2 className="text-5xl font-black tracking-tighter uppercase">Design Services.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {designServices.map((s, i) => (
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

      {/* TOOLKIT (MINIMALIST) */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase">The Toolkit.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {toolkit.map((tool, i) => (
              <div key={i} className="reveal group p-6 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all">
                <span className={`text-sm font-black tracking-tighter uppercase ${tool.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (ARCHITECTURAL STYLE) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Design Process.</h2>
          </div>
          <div className="space-y-12">
            {designProcess.map((p, i) => (
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
            Let's Design <br /> The Future.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-[10px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300 group">
            START DESIGN PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700 uppercase">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default UIDesign;