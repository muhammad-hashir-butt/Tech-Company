import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
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

/* ═══════════════════════════════════════════════════════════
   PARTICLE BACKGROUND
═══════════════════════════════════════════════════════════ */
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
   PROJECTS COMPONENT
═══════════════════════════════════════════════════════════ */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#03040a] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        body { cursor: none; }
        .outline-text { -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]"
          style={{ x: smoothX, y: smoothY, left: -250, top: -250 }}
        />
      </div>

      <CustomCursor />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="text-violet-400 font-mono text-[10px] tracking-[0.5em] uppercase">Showcase</span>
          </motion.div>
          <h1 className="text-[clamp(45px,8vw,110px)] font-black leading-[0.85] tracking-tighter">
            SELECTED <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              WORKS.
            </span>
          </h1>
          
          <div className="mt-16 flex flex-wrap gap-8 border-b border-white/5 pb-6 reveal">
            {["all", "web", "mobile", "design"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[11px] font-mono tracking-[0.3em] uppercase transition-all relative ${
                  activeFilter === f ? "text-violet-400" : "text-gray-500 hover:text-white"
                }`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div layoutId="underline" className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-violet-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 mb-8">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="reveal">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-mono tracking-[0.3em] text-violet-500 uppercase">{p.category}</span>
                      <div className="h-[1px] w-8 bg-white/10" />
                      <span className="text-[9px] font-mono tracking-[0.3em] text-gray-600 uppercase">{p.client}</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tighter group-hover:text-violet-400 transition-colors mb-4">{p.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[8px] font-mono px-2 py-1 bg-white/[0.03] border border-white/5 rounded text-gray-500 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {l:"DELIVERED", v:"250+", c:"text-blue-400"},
            {l:"CLIENTS", v:"120+", c:"text-violet-400"},
            {l:"COUNTRIES", v:"25+", c:"text-pink-400"},
            {l:"SUCCESS", v:"99%", c:"text-emerald-400"},
          ].map((stat, i) => (
            <div key={i} className="reveal p-8 text-center group">
              <div className={`text-4xl font-black mb-1 ${stat.c}`}>{stat.v}</div>
              <div className="text-[8px] tracking-[0.4em] text-gray-600 font-mono uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-[clamp(30px,6vw,60px)] font-black tracking-tighter mb-10 leading-none">
            HAVE A VISION? <br /> LET'S ARCHITECT IT.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-[12px] font-bold tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300 group">
            ESTIMATE PROJECT <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-mono tracking-[0.5em] text-gray-700 uppercase">
        © {new Date().getFullYear()} TECHAZ SOLUTIONS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════════════════════════ */
const projectsData = [
  { category: "web", title: "E-Commerce Architecture", client: "FashionHub", tech: ["React","Node.js","MongoDB","Stripe"], image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80", stats: { revenue: "+250%", users: "50K+" } },
  { category: "mobile", title: "AI Fitness Companion", client: "FitLife", tech: ["React Native","Firebase","TensorFlow"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", stats: { downloads: "100K+", rating: "4.8★" } },
  { category: "web", title: "Enterprise Ecosystem", client: "SalesPro", tech: ["Next.js","PostgreSQL","GraphQL"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", stats: { efficiency: "+180%", clients: "200+" } },
  { category: "design", title: "Neo-Banking Interface", client: "TrustBank", tech: ["Figma","Adobe XD","Protopie"], image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", stats: { satisfaction: "95%", load_time: "-40%" } },
  { category: "mobile", title: "Logistics Grid", client: "QuickBite", tech: ["Flutter","Node.js","Socket.io"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", stats: { orders: "500K+", speed: "25min" } },
  { category: "web", title: "LMS Infrastructure", client: "EduTech Inc", tech: ["Vue.js","Laravel","WebRTC"], image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", stats: { students: "75K+", finish_rate: "89%" } },
];

export default Projects;