import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
  useScroll,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode, FaMobileAlt, FaPalette,
  FaArrowRight, FaGithub, FaLinkedin, FaTwitter,
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import { Zap, Target, Award, TrendingUp, ChevronRight, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const words = ["POSSIBILITIES", "THE FUTURE", "LEGACIES", "INNOVATION", "EXPERIENCES"];

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════ */
const CustomCursor = () => {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const tx = useSpring(cx, { stiffness: 60, damping: 15 });
  const ty = useSpring(cy, { stiffness: 60, damping: 15 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e) => { cx.set(e.clientX); cy.set(e.clientY); };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const over = (e) => {
      const el = e.target.closest("a,button,[data-cursor]");
      if (el) { setHovered(true); setLabel(el.dataset.cursor || ""); }
    };
    const out = (e) => {
      if (e.target.closest("a,button,[data-cursor]")) { setHovered(false); setLabel(""); }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: clicked ? 0.4 : 1, opacity: 1 }}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <motion.div
        style={{ x: tx, y: ty, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: hovered ? 2.5 : clicked ? 0.8 : 1,
          borderColor: hovered ? "#a78bfa" : "rgba(255,255,255,0.4)",
          backgroundColor: hovered ? "rgba(167,139,250,0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998] flex items-center justify-center"
      >
        {label && (
          <span className="text-[8px] text-white/80 font-mono tracking-wider whitespace-nowrap">{label}</span>
        )}
      </motion.div>
    </>
  );
};

/* ═══════════════════════════════════════════════════════════
   PARTICLE CANVAS — now with mouse repulsion
═══════════════════════════════════════════════════════════ */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.parentElement.addEventListener("mousemove", onMove);

    const N = 120;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      ox: 0, oy: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.4,
      hue: Math.random() * 60 + 200, // blue-purple range
      alpha: Math.random() * 0.5 + 0.2,
    }));
    particles.forEach((p) => { p.ox = p.x; p.oy = p.y; });

    const REPEL = 120;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Repulsion from mouse
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL) {
          const force = (REPEL - dist) / REPEL;
          p.vx += (dx / dist) * force * 1.5;
          p.vy += (dy / dist) * force * 1.5;
        }

        // Return home
        p.vx += (p.ox - p.x) * 0.005;
        p.vy += (p.oy - p.y) * 0.005;

        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,70%,${p.alpha})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ═══════════════════════════════════════════════════════════
   AURORA BACKGROUND
═══════════════════════════════════════════════════════════ */
const Aurora = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    <motion.div
      animate={{
        x: ["0%", "-8%", "12%", "0%"],
        y: ["0%", "15%", "-8%", "0%"],
        scale: [1, 0.9, 1.15, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    <motion.div
      animate={{
        x: ["0%", "15%", "-10%", "0%"],
        y: ["0%", "-5%", "10%", "0%"],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      className="absolute top-1/3 left-1/3 w-[50vw] h-[50vw] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)",
        filter: "blur(50px)",
      }}
    />
  </div>
);

/* ═══════════════════════════════════════════════════════════
   GLITCH TEXT
═══════════════════════════════════════════════════════════ */
const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes glitch1 {
          0%,100%{clip-path:inset(0 0 98% 0);transform:translate(0)}
          20%{clip-path:inset(15% 0 70% 0);transform:translate(-4px,2px);color:#f472b6}
          40%{clip-path:inset(50% 0 25% 0);transform:translate(4px,-3px);color:#60a5fa}
          60%{clip-path:inset(80% 0 5% 0);transform:translate(-3px,1px);color:#34d399}
          80%{clip-path:inset(35% 0 55% 0);transform:translate(3px,-1px)}
        }
        @keyframes glitch2 {
          0%,100%{clip-path:inset(0 0 98% 0);transform:translate(0)}
          20%{clip-path:inset(60% 0 30% 0);transform:translate(4px,-2px);color:#a78bfa}
          40%{clip-path:inset(10% 0 75% 0);transform:translate(-4px,3px);color:#fb923c}
          60%{clip-path:inset(40% 0 45% 0);transform:translate(2px,-2px)}
          80%{clip-path:inset(70% 0 15% 0);transform:translate(-2px,2px);color:#f472b6}
        }
        .glitch-wrap{position:relative;display:inline-block}
        .glitch-wrap::before,.glitch-wrap::after{
          content:attr(data-text);position:absolute;inset:0;
          background:inherit;-webkit-background-clip:text;background-clip:text;
        }
        .glitch-active::before{animation:glitch1 0.4s linear}
        .glitch-active::after{animation:glitch2 0.4s linear}
      `}</style>
      <span
        className={`glitch-wrap ${glitch ? "glitch-active" : ""}`}
        data-text={text}
      >
        {text}
      </span>
    </>
  );
};

/* ═══════════════════════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════════════════════ */
const Typewriter = ({ text, speed = 35, delay = 0 }) => {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      setShown(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, started]);

  return (
    <span>
      {shown}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "steps(1)" }}
        className="inline-block w-[2px] h-[1em] bg-violet-400 ml-0.5 align-middle"
      />
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON
═══════════════════════════════════════════════════════════ */
const MagneticButton = ({ children, className = "", onClick, type = "button" }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 250, damping: 20 });
  const y = useSpring(0, { stiffness: 250, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.45);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.45);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref} type={type} style={{ x, y }}
      onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}
      whileTap={{ scale: 0.92 }} className={className}
    >
      {children}
    </motion.button>
  );
};

/* ═══════════════════════════════════════════════════════════
   3D TILT CARD
═══════════════════════════════════════════════════════════ */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const rX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const rY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    rX.set(-(yPct - 0.5) * 18);
    rY.set((xPct - 0.5) * 18);
    glowX.set(xPct * 100);
    glowY.set(yPct * 100);
  };
  const onLeave = () => { rX.set(0); rY.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════════ */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const done = useRef(false);
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const ctrl = animate(0, num, {
          duration: 2.2, ease: "easeOut",
          onUpdate: (v) => setDisplay(Number.isInteger(num) ? Math.floor(v).toString() : v.toFixed(1)),
        });
        return () => ctrl.stop();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [num]);

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
};

/* ═══════════════════════════════════════════════════════════
   SCROLL VELOCITY MARQUEE
═══════════════════════════════════════════════════════════ */
const VelocityMarquee = ({ items }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  useAnimationFrame((t, delta) => {
    const moveBy = -0.8 - Math.abs(velocityFactor.get()) * 0.1;
    baseX.set(baseX.get() + moveBy * (delta / 16));
    if (baseX.get() <= -50) baseX.set(0);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap py-5 border-y border-white/[0.06]">
      <motion.div style={{ x }} className="inline-flex">
        {[...Array(4)].map((_, o) =>
          items.map((item, i) => (
            <span key={`${o}-${i}`} className="inline-flex items-center gap-5 mr-10 text-[11px] tracking-[0.4em] font-mono text-white/20 hover:text-white/60 transition-colors cursor-default">
              <span className="w-1 h-1 rounded-full bg-violet-500 inline-block flex-shrink-0" />
              {item}
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   HERO — CINEMATIC SPLIT LAYOUT
   WE  [scrolling words]  CODE
   top-left  ←  center  →  bottom-right
═══════════════════════════════════════════════════════════ */

const tickerItems = [
  { text: "POSSIBILITIES", color: "#a78bfa" },
  { text: "THE FUTURE",    color: "#60a5fa" },
  { text: "LEGACIES",      color: "#f472b6" },
  { text: "INNOVATION",    color: "#34d399" },
  { text: "EXPERIENCES",   color: "#fb923c" },
  { text: "DREAMS",        color: "#e879f9" },
];

const TickerRow = ({ dir = 1, speed = 22 }) => {
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden w-full select-none">
      <motion.div
        animate={{ x: dir > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <motion.span
              whileHover={{ scale: 1.05, letterSpacing: "-0.01em" }}
              className="font-black cursor-default"
              style={{
                fontFamily: "'Arial Black', sans-serif",
                fontSize: "clamp(56px, 9vw, 120px)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: item.color,
                textShadow: `0 0 60px ${item.color}66, 0 0 120px ${item.color}33`,
              }}
            >
              {item.text}
            </motion.span>
            <span
              className="mx-6 sm:mx-10 font-black opacity-20"
              style={{ fontSize: "clamp(40px, 5vw, 60px)", color: item.color }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const subtitles = [
  "NEXT-GEN WEB EXPERIENCES",
  "APPS THAT FEEL ALIVE",
  "DESIGN THAT CONVERTS",
  "SYSTEMS BUILT TO SCALE",
  "PRODUCTS PEOPLE LOVE",
  "CODE THAT INSPIRES",
];

const Hero = ({ mouseX, mouseY }) => {
  const [loaded, setLoaded] = useState(false);
  const [subIdx, setSubIdx] = useState(0);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const iv = setInterval(() => setSubIdx(p => (p + 1) % subtitles.length), 2800);
    return () => clearInterval(iv);
  }, []);

  /* letter stagger */
  const letter = {
    hidden: { y: "110%", opacity: 0, skewY: 6 },
    show: (i) => ({
      y: "0%", opacity: 1, skewY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.07 }
    }),
  };

  const weL   = ["W","E"];
  const codeL = ["C","O","D","E"];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden cursor-none">

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={loaded ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute pointer-events-none z-[2]"
        style={{
          top: "50%", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), rgba(96,165,250,0.2), transparent)",
          transformOrigin: "left",
        }}
      />

      {/* ══════════════════════════════════════
          3-ZONE LAYOUT
      ══════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">

        {/* ─── ZONE 1: TOP BAR ─── */}
        <div className="flex items-start justify-between px-6 sm:px-12 pt-6 sm:pt-8">

          {/* "WE" — letter by letter, top-left */}
          <div className="overflow-hidden leading-none">
            <div className="flex">
              {weL.map((l, i) => (
                <motion.span key={i} custom={i}
                  variants={letter} initial="hidden" animate={loaded ? "show" : "hidden"}
                  className="inline-block font-black text-white"
                  style={{
                    fontFamily: "'Arial Black', sans-serif",
                    fontSize: "clamp(90px, 19vw, 240px)",
                    lineHeight: 0.82,
                    letterSpacing: "-0.06em",
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Top-right info pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hidden sm:flex flex-col items-end gap-4 pt-3"
          >
            {/* Rotating subtitle */}
            <div className="flex items-center gap-2 overflow-hidden h-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={subIdx}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
                  className="text-[10px] font-mono tracking-[0.45em] text-violet-400 whitespace-nowrap"
                >
                  {subtitles[subIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* mini stats */}
            <div className="flex flex-col gap-1 items-end">
              {["500+ Projects", "200+ Clients", "99.9% Uptime"].map((t, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={loaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.12 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[11px] font-mono text-gray-600 tracking-widest">{t}</span>
                  <span className="w-1 h-1 rounded-full bg-violet-500/60" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── ZONE 2: SCROLLING COLOR WORDS (the hero heart) ─── */}
        <div className="relative flex-1 flex flex-col justify-center gap-0 -my-2">

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #03040a, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #03040a, transparent)" }} />
          <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #03040a, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, #03040a, transparent)" }} />

          {/* Row 1 — normal speed, left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TickerRow dir={1} speed={20} />
          </motion.div>

          {/* Row 2 — slower, reverse, dimmer */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={loaded ? { opacity: 0.22, x: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="-mt-4 sm:-mt-8"
          >
            <TickerRow dir={-1} speed={32} />
          </motion.div>
        </div>

        {/* ─── ZONE 3: BOTTOM BAR ─── */}
        <div className="flex flex-col sm:flex-row items-end justify-between px-6 sm:px-12 pb-8 gap-6">

          {/* Bottom-left: description + CTAs */}
          <motion.div
            className="flex flex-col gap-4 max-w-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22,1,0.36,1] }}
          >
            <p className="text-gray-600 text-[11px] font-mono tracking-[0.2em] leading-loose">
              High-performance digital ecosystems<br />engineered for ambitious brands.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                data-cursor="GO"
                className="group relative px-7 py-3.5 rounded-full font-black text-[11px] tracking-[0.22em] overflow-hidden"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="relative z-10 flex items-center gap-2">
                  GET STARTED
                  <motion.span animate={{ x: [0,4,0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                    <FaArrowRight className="text-xs" />
                  </motion.span>
                </span>
              </MagneticButton>

              <MagneticButton
                data-cursor="VIEW"
                className="px-7 py-3.5 rounded-full font-black text-[11px] tracking-[0.22em] border border-white/10 hover:border-violet-400/40 hover:bg-violet-400/5 transition-all"
              >
                OUR WORK
              </MagneticButton>
            </div>
          </motion.div>

          {/* "CODE" — letter by letter, bottom-right */}
          <div className="overflow-hidden leading-none self-end">
            <div className="flex">
              {codeL.map((l, i) => (
                <motion.span key={i} custom={i + 3}
                  variants={letter} initial="hidden" animate={loaded ? "show" : "hidden"}
                  className="inline-block font-black"
                  style={{
                    fontFamily: "'Arial Black', sans-serif",
                    fontSize: "clamp(90px, 19vw, 240px)",
                    lineHeight: 0.82,
                    letterSpacing: "-0.06em",
                    backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 40%, #f472b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 80px rgba(139,92,246,0.55))",
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-20"
      >
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   SERVICES CARD — with reveal line animation
═══════════════════════════════════════════════════════════ */
const ServiceCard = ({ service, i }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard className="reveal">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        data-cursor="EXPLORE"
        className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden group h-full transition-colors duration-500 hover:border-white/20 cursor-none"
      >
        {/* Animated border reveal */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent, rgba(${service.rgb},0.08), transparent)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{ rotate: hovered ? 360 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
        >
          {service.icon}
        </motion.div>

        {/* Animated underline on title */}
        <h3 className="text-xl font-bold mb-1 relative inline-block">
          {service.title}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0 }}
            className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r ${service.color} origin-left`}
            transition={{ duration: 0.3 }}
          />
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-6">{service.desc}</p>

        <motion.div
          animate={{ x: hovered ? 6 : 0, opacity: hovered ? 1 : 0 }}
          className="flex items-center gap-2 text-xs font-mono tracking-widest"
          style={{ color: `rgb(${service.rgb})` }}
        >
          LEARN MORE <FaArrowRight className="text-xs" />
        </motion.div>

        {/* Glow orb */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{ background: `rgba(${service.rgb},0.2)` }}
        />
      </motion.div>
    </TiltCard>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════ */
const Home = () => {
  const rawX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const rawY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  // Spring-smoothed for buttery movement
  const mouseX = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 });
  const mouseY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Global mouse tracking
  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    rawX.set(clientX);
    rawY.set(clientY);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP scroll reveals
  useEffect(() => {
    const els = gsap.utils.toArray(".reveal");
    els.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" } }
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3500);
  };

  return (
    <div className="relative text-white overflow-x-hidden cursor-none" style={{background:"transparent"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
        body { font-family: 'Syne', sans-serif; background: #03040a; }
        ::selection { background: rgba(139,92,246,0.4); }
        * { cursor: none !important; }
      `}</style>

      {/* ══════════════════════════════════════════
          GLOBAL BACKGROUND — fixed behind ALL sections
      ══════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ParticleCanvas />
        <Aurora />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        {/* Primary violet spotlight */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.18), transparent 65%)`
            ),
          }}
        />
        {/* Secondary smaller hot-core glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(168,139,250,0.12), transparent 70%)`
            ),
          }}
        />
      </div>

      <CustomCursor />

      {/* ── HERO ── */}
      <Hero mouseX={mouseX} mouseY={mouseY} />

      {/* ── VELOCITY MARQUEE ── */}
      <VelocityMarquee items={["WEB ENGINEERING", "MOBILE SOLUTIONS", "UI/UX DESIGN", "CLOUD ARCHITECTURE", "AI INTEGRATION", "DEVOPS", "BRANDING"]} />

      {/* ── STATS ── */}
      <section className="reveal py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Projects Delivered", value: "500", suffix: "+", icon: <Zap className="w-5 h-5" />, rgb: "59,130,246" },
              { label: "Global Clients",      value: "200", suffix: "+", icon: <Target className="w-5 h-5" />, rgb: "139,92,246" },
              { label: "Design Awards",       value: "50",  suffix: "+", icon: <Award className="w-5 h-5" />,  rgb: "236,72,153" },
              { label: "Uptime",              value: "99.9",suffix: "%", icon: <TrendingUp className="w-5 h-5" />, rgb: "16,185,129" },
            ].map((stat, i) => (
              <TiltCard key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center group overflow-hidden hover:border-white/20 transition-colors"
                  data-hover
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="inline-flex p-2.5 rounded-xl mb-4"
                    style={{ background: `rgba(${stat.rgb},0.15)`, color: `rgb(${stat.rgb})` }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-mono">{stat.label}</div>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at center, rgba(${stat.rgb},0.06), transparent)` }}
                  />
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 flex justify-between items-end flex-wrap gap-4"
          >
            <div>
              <p className="text-violet-400 text-[10px] tracking-[0.5em] font-mono mb-3">OUR EXPERTISE</p>
              <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.03em]">SERVICES.</h2>
            </div>
            <Link to="/services" data-cursor="GO" className="text-xs font-mono tracking-widest text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-2 group">
              VIEW ALL <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => <ServiceCard key={i} service={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── MARQUEE again ── */}
      <VelocityMarquee items={["REACT", "NEXT.JS", "NODE.JS", "GO", "FLUTTER", "SWIFT", "FIGMA", "AWS", "SUPABASE", "TAILWIND"]} />

      {/* ── CONTACT ── */}
      <section className="reveal py-28 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-violet-400 text-[10px] tracking-[0.5em] font-mono mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.03em] leading-none mb-6">
                LET'S BUILD<br />
                <span style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  SOMETHING<br />GREAT.
                </span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
                Have a project in mind? We'd love to help you bring it to life.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: <FaEnvelope />, title: "Email Us", detail: "hello@hashirsoft.com", rgb: "59,130,246" },
                { icon: <FaPhoneAlt />, title: "Call Us", detail: "+1 (555) 000-0000", rgb: "139,92,246" },
                { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "Innovation Hub, Tech District", rgb: "236,72,153" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  data-hover
                  className="flex items-center gap-4 group cursor-none"
                >
                  <div
                    className="p-3 rounded-xl text-sm transition-transform group-hover:scale-110"
                    style={{ background: `rgba(${item.rgb},0.1)`, color: `rgb(${item.rgb})` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-600 font-mono tracking-widest">{item.title}</p>
                    <p className="text-sm font-medium">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              {[<FaGithub />, <FaLinkedin />, <FaTwitter />].map((icon, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  data-hover
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-500 hover:text-violet-400 hover:border-violet-400/40 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [0, 1.3, 1], rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="text-6xl mb-5"
                  >
                    🚀
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-black mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 text-sm font-mono"
                  >
                    We'll hit you back within 24 hours 🤝
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 relative z-10"
                >
                  {[
                    { label: "Name", type: "text", ph: "John Doe" },
                    { label: "Email", type: "email", ph: "john@example.com" },
                  ].map((f, i) => (
                    <div key={i} className="group">
                      <label className="block text-[10px] font-mono tracking-[0.35em] text-gray-600 mb-1.5">{f.label.toUpperCase()}</label>
                      <input
                        type={f.type}
                        placeholder={f.ph}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-400/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.35em] text-gray-600 mb-1.5">SUBJECT</label>
                    <select className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-violet-400/50 transition-all appearance-none">
                      <option className="bg-[#0a0b14]" value="">Select a topic...</option>
                      <option className="bg-[#0a0b14]">Web Development</option>
                      <option className="bg-[#0a0b14]">Mobile App</option>
                      <option className="bg-[#0a0b14]">UI/UX Design</option>
                      <option className="bg-[#0a0b14]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.35em] text-gray-600 mb-1.5">MESSAGE</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-400/50 transition-all resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full py-4 rounded-xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 group relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                    />
                    <Send className="w-4 h-4 group-hover:rotate-12 transition-transform relative z-10" />
                    <span className="relative z-10">SEND MESSAGE</span>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-8 px-4 text-center">
        <p className="text-gray-800 text-[10px] font-mono tracking-[0.5em]">
          © {new Date().getFullYear()} HASHIRSOFT. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   SERVICES DATA
═══════════════════════════════════════════════════════════ */
const services = [
  {
    title: "Web Engineering",
    icon: <FaLaptopCode className="w-5 h-5 text-white" />,
    color: "from-blue-500 to-indigo-600",
    rgb: "59,130,246",
    desc: "Robust, scalable architectures built with modern frameworks like Next.js and Go. Engineered for performance at scale.",
  },
  {
    title: "Mobile Solutions",
    icon: <FaMobileAlt className="w-5 h-5 text-white" />,
    color: "from-violet-500 to-purple-600",
    rgb: "139,92,246",
    desc: "Seamless cross-platform experiences that feel native and perform beautifully. Built with Flutter and React Native.",
  },
  {
    title: "Product Design",
    icon: <FaPalette className="w-5 h-5 text-white" />,
    color: "from-pink-500 to-rose-600",
    rgb: "236,72,153",
    desc: "Human-centric design systems that bridge the gap between beauty and usability. Every pixel is intentional.",
  },
];

export default Home;