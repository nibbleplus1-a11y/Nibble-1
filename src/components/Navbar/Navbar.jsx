import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaBolt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/Logo2.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-3 pb-2">
      {/* Gradient border wrapper */}
      <div
        className="mx-auto max-w-7xl rounded-[22px] p-[1px] transition-all duration-500"
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(34,211,238,0.35), rgba(124,58,237,0.18), rgba(34,211,238,0.35))"
            : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04), rgba(255,255,255,0.08))",
        }}
      >
        {/* Glass bar — much more opaque so hero content doesn't bleed through */}
        <div
          className={`
            relative flex items-center justify-between rounded-[21px]
            px-5 py-3 transition-all duration-500
            ${scrolled
              ? "bg-[#030712]/98 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "bg-[#030712]/85 backdrop-blur-xl"
            }
          `}
        >
          {/* ── Brand ── */}
          <Link to="/" onClick={closeMobile} className="group flex items-center gap-1">
            <img
              src={logo}
              alt="Nibble+1"
              className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.35)] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Only show the text part that the logo doesn't already include */}
            <span className="text-xl font-black tracking-tight text-white">
              ibble<span className="gradient-text-brand">+1</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* "Available Now" — clear, no jargon */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3.5 py-1.5 text-[11px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available Now
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]"
              style={{ background: "linear-gradient(135deg, #22D3EE, #06B6D4)" }}
            >
              <FaBolt className="text-xs" />
              Start a Project
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all hover:border-cyan-400/50 hover:text-cyan-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/99 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="mt-3 flex flex-col gap-3 border-t border-white/8 pt-4">
                <div className="flex items-center gap-2 px-1 text-xs font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available for new projects
                </div>
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="w-full rounded-xl py-3 text-center font-bold text-black transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #22D3EE, #06B6D4)" }}
                >
                  Start a Project →
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
