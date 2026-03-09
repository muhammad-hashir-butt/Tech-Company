import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/Logo.png";

/* ── Service Items ── */
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
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.span ref={ref} style={{ x, y, display: "inline-block" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.span>
  );
};

/* ── Services Dropdown (Desktop) ── */
const ServicesDropdown = ({ open }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        className="absolute top-full left-1/2 -translate-x-1/2 w-[450px] z-[110] pt-4"
      >
        <div className="rounded-2xl border border-white/10 bg-[#060712]/95 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="p-4 grid grid-cols-2 gap-2">
            {serviceLinks.map((s, i) => (
              <Link key={i} to={s.to} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                <span className="text-[13px] font-medium text-gray-400 group-hover:text-white transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="block p-4 bg-white/5 text-center text-[11px] font-mono tracking-widest text-violet-400 hover:bg-white/10 transition-colors">VIEW ALL SERVICES →</Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { 
    setMobileOpen(false); 
    setServicesOpen(false); 
    setMobileServicesOpen(false);
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [location, mobileOpen]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        .nav-link-line::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: linear-gradient(90deg, #a78bfa, #60a5fa);
          transition: width 0.3s ease;
        }
        .nav-link-line:hover::after, .nav-link-line.active::after { width: 100%; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-[100]">
        <motion.div
          animate={scrolled ? {
            margin: "12px 20px 0",
            borderRadius: "20px",
            backgroundColor: "rgba(3, 4, 10, 0.85)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
          } : {
            margin: "0px 0px 0",
            borderRadius: "0px",
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0)",
          }}
          transition={{ duration: 0.4 }}
          style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
          className="max-w-7xl mx-auto transition-all relative z-[110]"
        >
          <div className="px-6 flex items-center justify-between h-16 sm:h-24">
            {/* LOGO - Responsive sizes */}
            <Link to="/" className="shrink-0 relative -ml-4">
              <img src={logo} alt="Logo" className="h-20 sm:h-32 md:h-40 w-auto object-contain brightness-110" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, i) => (
                <Magnetic key={i} strength={0.2}>
                  <Link to={link.to} className={`nav-link-line relative px-4 py-2 text-[12px] font-mono tracking-[0.1em] transition-colors ${isActive(link.to) ? "text-white active" : "text-white/60 hover:text-white"}`}>
                    {link.label}
                  </Link>
                </Magnetic>
              ))}

              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={`nav-link-line flex items-center gap-1.5 px-4 py-2 text-[12px] font-mono tracking-[0.1em] transition-colors ${servicesOpen ? "text-white" : "text-white/60 hover:text-white"}`}>
                  Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <ServicesDropdown open={servicesOpen} />
              </div>
            </div>

            {/* CTA & HAMBURGER */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden sm:block">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] bg-white text-black hover:bg-violet-600 hover:text-white transition-all shadow-xl shadow-white/5">
                  GET STARTED
                </motion.div>
              </Link>

              <button 
                onClick={() => setMobileOpen(!mobileOpen)} 
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[105] bg-[#03040a] md:hidden overflow-y-auto no-scrollbar"
            >
              <div className="flex flex-col min-h-screen pt-28 pb-10 px-8">
                {/* Mobile Nav Links */}
                <div className="space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      key={i}
                    >
                      <Link 
                        to={link.to} 
                        className="text-3xl font-bold text-white/90 hover:text-white flex items-center justify-between group"
                      >
                        {link.label}
                        <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-violet-500" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Services Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4"
                  >
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-3xl font-bold text-white/90 w-full flex items-center justify-between"
                    >
                      Services
                      <ChevronDown className={`transition-transform duration-500 ${mobileServicesOpen ? "rotate-180" : ""}`} size={28} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden grid grid-cols-1 gap-4 pt-6"
                        >
                          {serviceLinks.map((s, i) => (
                            <Link key={i} to={s.to} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                              <span className="text-xl" style={{ color: s.color }}>{s.icon}</span>
                              <span className="text-sm font-medium text-gray-300">{s.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Mobile Bottom CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-auto pt-10"
                >
                  <Link to="/contact">
                    <div className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-center font-bold tracking-widest text-sm shadow-xl shadow-violet-600/20">
                      GET STARTED NOW
                    </div>
                  </Link>
                  <p className="text-center text-gray-500 text-xs mt-6 font-mono uppercase tracking-[0.2em]">HashirSoft © 2026</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;