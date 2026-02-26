import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import logo from "../assets/Logo.png";

/* ── service items ── */
const serviceLinks = [
  { to: "/services/web-development",    label: "Web Development",    icon: "⬡", color: "#60a5fa" },
  { to: "/services/mobile-apps",        label: "Mobile Apps",        icon: "◈", color: "#a78bfa" },
  { to: "/services/ui-ux-design",       label: "UI / UX Design",     icon: "◉", color: "#f472b6" },
  { to: "/services/cloud-solutions",    label: "Cloud Solutions",    icon: "◎", color: "#34d399" },
  { to: "/services/cyber-security",     label: "Cyber Security",     icon: "⬢", color: "#fb923c" },
  { to: "/services/database-management",label: "Database Management",icon: "◆", color: "#e879f9" },
];

const navLinks = [
  { to: "/",        label: "Home"     },
  { to: "/about",   label: "About"    },
  { to: "/projects",label: "Projects" },
  { to: "/careers", label: "Careers"  },
];

/* ── Magnetic wrapper ── */
const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width  / 2) * strength);
    y.set((e.clientY - r.top  - r.height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.span ref={ref} style={{ x, y, display: "inline-block" }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.span>
  );
};

/* ── Services mega-dropdown ── */
const ServicesDropdown = ({ open }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1    }}
        exit   ={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] z-50 pt-3"
        style={{ filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.6))" }}
      >
        {/* Glass card */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
          style={{ background: "rgba(6,7,18,0.92)", backdropFilter: "blur(24px)" }}
        >
          {/* Top violet glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.8),transparent)" }} />

          {/* Header */}
          <div className="px-5 pt-4 pb-3 border-b border-white/[0.05]">
            <p className="text-[9px] font-mono tracking-[0.5em] text-violet-400 uppercase">Our Services</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-px p-1 bg-white/[0.03]">
            {serviceLinks.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={s.to}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-transparent hover:bg-white/[0.05] transition-all duration-200"
                >
                  <span
                    className="text-lg leading-none w-7 h-7 flex items-center justify-center rounded-lg shrink-0 transition-transform group-hover:scale-110 duration-200"
                    style={{ color: s.color, background: `${s.color}18` }}
                  >
                    {s.icon}
                  </span>
                  <span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                  <motion.span
                    className="ml-auto text-gray-700 group-hover:text-violet-400 transition-colors text-xs"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >→</motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-5 py-3 border-t border-white/[0.05]">
            <Link
              to="/services"
              className="flex items-center justify-between text-[11px] font-mono tracking-widest text-gray-600 hover:text-violet-400 transition-colors group"
            >
              <span>VIEW ALL SERVICES</span>
              <motion.span animate={{ x: [0,4,0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ══════════════════════════════════════════════════════
   MAIN NAVBAR
══════════════════════════════════════════════════════ */
const Navbar = () => {
  const location   = useLocation();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mounted, setMounted]         = useState(false);
  const serviceRef = useRef(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* mount animation */
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #a78bfa, #60a5fa);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link-line:hover::after,
        .nav-link-line.active::after { width: 100%; }
        .navbar-logo {
          mix-blend-mode: screen;
          filter: drop-shadow(0 0 10px rgba(139,92,246,0.4)) brightness(1.2);
          transition: filter 0.3s ease;
        }
        .navbar-logo:hover {
          filter: drop-shadow(0 0 18px rgba(139,92,246,0.65)) brightness(1.35);
        }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        {/* ── Background pill / bar ── */}
        <motion.div
          animate={scrolled ? {
            margin: "12px 24px 0",
            borderRadius: "16px",
          } : {
            margin: "0px 0px 0",
            borderRadius: "0px",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border-b border-white/[0.06]"
          style={{
            background: scrolled
              ? "rgba(4,5,15,0.88)"
              : "rgba(3,4,10,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: scrolled ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.05)",
            boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08)" : "none",
          }}
        >
          {/* Top shimmer line */}
          <motion.div
            animate={scrolled ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(96,165,250,0.4), transparent)" }}
          />

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">

              {/* ── LOGO ── */}
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt="TechAz Solutions"
                    className="navbar-logo h-12 w-auto object-contain"
                    style={{ maxWidth: "160px" }}
                  />
                </motion.div>
              </Link>

              {/* ── DESKTOP LINKS ── */}
              <div className="hidden md:flex items-center gap-1">

                {navLinks.map((link, i) => (
                  <Magnetic key={i} strength={0.25}>
                    <Link
                      to={link.to}
                      className={`nav-link-line relative px-4 py-2 text-[13px] font-mono tracking-[0.08em] transition-colors duration-200 ${
                        isActive(link.to)
                          ? "text-white active"
                          : "text-gray-500 hover:text-gray-200"
                      }`}
                    >
                      {link.label}
                      {isActive(link.to) && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400"
                        />
                      )}
                    </Link>
                  </Magnetic>
                ))}

                {/* ── SERVICES DROPDOWN ── */}
                <div
                  ref={serviceRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`nav-link-line relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-mono tracking-[0.08em] transition-colors duration-200 ${
                      servicesOpen ? "text-white" : "text-gray-500 hover:text-gray-200"
                    }`}
                  >
                    Services
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={13} />
                    </motion.span>
                  </button>

                  <ServicesDropdown open={servicesOpen} />
                </div>
              </div>

              {/* ── RIGHT: CTA + MOBILE TOGGLE ── */}
              <div className="flex items-center gap-3">

                {/* GET STARTED — desktop */}
                <Magnetic strength={0.2}>
                  <Link to="/contact" className="hidden md:flex items-center gap-2 group">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative px-5 py-2.5 rounded-full text-[12px] font-black tracking-[0.18em] overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                    >
                      {/* shimmer */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <Zap size={11} />
                        GET STARTED
                      </span>
                    </motion.div>
                  </Link>
                </Magnetic>

                {/* Mobile hamburger */}
                <motion.button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:border-violet-400/30 transition-colors"
                >
                  <AnimatePresence mode="wait">
                    {mobileOpen ? (
                      <motion.span key="x"
                        initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X size={16} />
                      </motion.span>
                    ) : (
                      <motion.span key="menu"
                        initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════
            MOBILE MENU
        ══════════════════════════════════════ */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-3 mt-1 rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{
                background: "rgba(4,5,15,0.96)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.1)",
              }}
            >
              {/* Top accent */}
              <div className="h-px w-full"
                style={{ background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.7),rgba(96,165,250,0.5),transparent)" }} />

              <div className="p-3 space-y-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-mono tracking-wider transition-all ${
                        isActive(link.to)
                          ? "bg-violet-500/10 text-white border border-violet-500/20"
                          : "text-gray-500 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {isActive(link.to) && <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Services accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                >
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-[13px] font-mono tracking-wider text-gray-500 hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    <span>Services</span>
                    <motion.span
                      animate={{ rotate: mobileServices ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-600"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 pl-3 border-l border-white/[0.06] py-1 space-y-0.5">
                          {serviceLinks.map((s, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <Link
                                to={s.to}
                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] text-gray-600 hover:text-white hover:bg-white/[0.04] transition-all group"
                              >
                                <span
                                  className="text-sm w-6 h-6 flex items-center justify-center rounded-md shrink-0"
                                  style={{ color: s.color, background: `${s.color}18` }}
                                >
                                  {s.icon}
                                </span>
                                <span className="font-mono tracking-wide">{s.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  className="pt-2 mt-1 border-t border-white/[0.05]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-black text-[12px] tracking-[0.2em] relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                  >
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                    />
                    <Zap size={13} className="relative z-10" />
                    <span className="relative z-10">GET STARTED</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer so content doesn't hide under navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;