import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import logo from "../assets/Logo.png";

/* ── Service Items (Paths standardized to lowercase) ── */
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

/* ── Services Dropdown ── */
const ServicesDropdown = ({ open }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-1/2 -translate-x-1/2 w-[450px] z-[110] pt-4"
      >
        <div className="rounded-2xl border border-white/10 bg-[#060712]/95 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="p-4 grid grid-cols-2 gap-2">
            {serviceLinks.map((s, i) => (
              <Link
                key={i}
                to={s.to}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg text-lg" style={{ background: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>
                <span className="text-[13px] font-medium text-gray-400 group-hover:text-white transition-colors">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="block p-4 bg-white/5 text-center text-[11px] font-mono tracking-widest text-violet-400 hover:bg-white/10 transition-colors">
            VIEW ALL SERVICES →
          </Link>
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
  const serviceRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);

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
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
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
            backgroundColor: "transparent", // NO GREY COLOR
            border: "1px solid rgba(255, 255, 255, 0)",
            boxShadow: "none"
          }}
          transition={{ duration: 0.4 }}
          style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
          className="max-w-7xl mx-auto transition-all"
        >
          <div className="px-6 flex items-center justify-between h-16 sm:h-20">
            {/* LOGO */}
            <Link to="/" className="shrink-0">
              <img src={logo} alt="Logo" className="h-100 sm:h-50 pb-2 w-auto object-contain brightness-110" />
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

              <div 
                ref={serviceRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`nav-link-line flex items-center gap-1.5 px-4 py-2 text-[12px] font-mono tracking-[0.1em] transition-colors ${servicesOpen ? "text-white" : "text-white/60 hover:text-white"}`}>
                  Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <ServicesDropdown open={servicesOpen} />
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden sm:block">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] bg-white text-black hover:bg-violet-600 hover:text-white transition-all">
                  GET STARTED
                </motion.div>
              </Link>

              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* REMOVED THE SPACER: Content now starts from top 0 */}
    </>
  );
};

export default Navbar;