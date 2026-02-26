import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import {
  FaLaptopCode, FaMobileAlt, FaPalette,
  FaArrowRight, FaGithub, FaLinkedin, FaTwitter,
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import { Zap, Target, Award, TrendingUp, ChevronRight, Send } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   OPTIMIZED BACKGROUND & CURSOR
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
      <motion.div style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        className="fixed top-0 left-0 w-3 h-3 bg-violet-500 rounded-full pointer-events-none z-[9999]" />
      <motion.div style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
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
    let animId, frame = 0;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, r: Math.random() * 1.5 + 0.5,
    }));
    const draw = () => {
      frame++; ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(139, 92, 246, 0.25)";
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (frame % 3 === 0) {
        ctx.strokeStyle = "rgba(139, 92, 246, 0.07)"; ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
            if (dx*dx + dy*dy < 7000) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
};

/* ═══════════════════════════════════════════════════════════
   TICKER (Adjusted Speed: 40s & 55s)
═══════════════════════════════════════════════════════════ */
const tickerItems = ["POSSIBILITIES", "THE FUTURE", "INNOVATION", "EXPERIENCES", "DREAMS", "LEGACIES"];
const TickerRow = ({ dir = 1, speed = 40 }) => {
  const items = useMemo(() => [...tickerItems, ...tickerItems, ...tickerItems], []);
  return (
    <div className="overflow-hidden w-full select-none py-2">
      <motion.div animate={{ x: dir > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {items.map((text, i) => (
          <span key={i} className="inline-flex items-center mx-4">
            <span className="font-black text-[clamp(45px,7vw,90px)] leading-none tracking-tighter text-white/10 outline-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}> {text} </span>
            <span className="mx-6 text-violet-500/40 text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   HERO SECTION (Dynamic Text & Smaller Size)
═══════════════════════════════════════════════════════════ */
const words = ["CODE", "BUILD", "CREATE", "DESIGN", "SOLVE", "INNOVATE"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 2500);
    return () => clearInterval(interval);
  }, []);

  const headingStyle = "text-[clamp(60px,12vw,150px)] font-black leading-[0.85] tracking-tighter";

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 pb-10 px-6 sm:px-12 overflow-hidden">
      <div className="flex justify-between items-start">
        <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={headingStyle}>WE</motion.h1>
        <div className="hidden sm:block text-right font-mono text-[9px] tracking-[0.4em] text-violet-400 mt-4 leading-relaxed">
          DIGITAL ARCHITECTS<br/>BASED IN PAKISTAN // 2024
        </div>
      </div>

      <div className="space-y-1">
        <TickerRow dir={1} speed={45} />
        <TickerRow dir={-1} speed={60} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-end gap-10">
        <div className="max-w-xs space-y-6 mb-4">
          <p className="text-gray-500 font-mono text-[11px] tracking-widest leading-loose">
            WE CRAFT HIGH-PERFORMANCE DIGITAL ECOSYSTEMS THAT SCALE WITH YOUR AMBITION.
          </p>
          <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300">
            VIEW PROJECTS <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={words[index]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`${headingStyle} bg-gradient-to-br from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent`}
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
const Home = () => {
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
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); will-change: transform, opacity; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        body { cursor: none; }
        .outline-text { -webkit-text-fill-color: transparent; }
      `}</style>

      {/* Optimized Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]"
          style={{ x: smoothX, y: smoothY, left: -250, top: -250, willChange: "transform" }}
        />
      </div>

      <CustomCursor />
      <Hero />

      {/* STATS */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"DELIVERED", v:"500+", c:"text-blue-400"},
            {l:"PARTNERS", v:"200+", c:"text-violet-400"},
            {l:"AWARDS", v:"50+", c:"text-pink-400"},
            {l:"UPTIME", v:"99.9%", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center group hover:border-white/10 transition-colors">
              <div className={`text-3xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16">
            <p className="text-violet-400 font-mono text-[9px] tracking-[0.5em] mb-4">WHAT WE DO</p>
            <h2 className="text-6xl font-black tracking-tighter">SERVICES.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="reveal p-10 rounded-3xl bg-white/[0.02] border border-white/5 h-full hover:bg-white/[0.04] transition-all duration-500 group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${s.color} mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                <div className="text-[10px] font-mono tracking-[0.2em] text-violet-400 flex items-center gap-2">
                  LEARN MORE <FaArrowRight className="group-hover:translate-x-2 transition-transform"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

const services = [
  { title:"Web Engineering", icon:<FaLaptopCode />, color:"from-blue-500 to-cyan-500", desc:"Scalable web architectures built with Next.js and high-performance backends." },
  { title:"Mobile Solutions", icon:<FaMobileAlt />, color:"from-violet-500 to-purple-500", desc:"Native experiences designed for high engagement on both iOS and Android." },
  { title:"Product Design", icon:<FaPalette />, color:"from-pink-500 to-rose-500", desc:"Visual identities and UI/UX systems that bridge beauty with pure function." },
];

export default Home;