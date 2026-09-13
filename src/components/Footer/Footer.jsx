import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";
import logo from "../../assets/images/Logo2.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02050E] text-white overflow-hidden pt-20 pb-12">
      {/* Ambient Aurora Glow */}
      <div className="absolute left-1/2 -top-24 h-72 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          {/* Brand & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="group inline-flex items-center gap-1">
              <img
                src={logo}
                alt="Nibble+1 Logo"
                className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-transform duration-300 group-hover:scale-105"
              />
              <h2 className="text-2xl font-black tracking-tight text-white">
                ibble<span className="text-cyan-400">+1</span>
              </h2>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Nibble+1 is a specialized digital product studio. We architect high-performance websites, scalable native apps with 10k+ users, and autonomous AI SaaS platforms for ambitious founders and global brands.
            </p>

            {/* Live Studio Status */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Client Projects (2026)
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#home" className="transition-colors hover:text-cyan-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cyan-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-cyan-300">
                  Projects & Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-cyan-300">
                  About Nibble+1
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-cyan-300">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Capabilities
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Web Applications</li>
              <li>Mobile App Dev (React Native)</li>
              <li>AI SaaS & Automation</li>
              <li>E-Commerce & Headless</li>
              <li>Technical SEO & Audits</li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Get in Touch
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nibbleplus1@gmail.com&su=Project%20Inquiry"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 group-hover:text-cyan-400">
                  <FaEnvelope />
                </div>
                <span className="truncate">nibbleplus1@gmail.com</span>
              </a>

              <a
                href="https://wa.me/923098680902"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 group-hover:text-cyan-400">
                  <FaPhoneAlt />
                </div>
                <span>+92 309 8680902</span>
              </a>

              <div className="pt-2 flex gap-3">
                <a
                  href="https://www.instagram.com/nibbleplus1?igsh=MXFwNW93ZjNtdDBoeA=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/1D8CyDWRPN/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Nibble+1. Beyond the byte. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10"
          >
            <span>Back to top</span>
            <FaArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
