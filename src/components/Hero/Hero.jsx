import { motion } from "framer-motion";
import { FaArrowRight, FaGooglePlay, FaWhatsapp } from "react-icons/fa";
import waverii from "../../assets/images/Projects/waverii.png";
import quranapp from "../../assets/images/Projects/quranapp.png";
import claylite from "../../assets/images/Projects/claylite.png";

const EASE = [0.16, 1, 0.3, 1];

/* ── stagger children ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* ─── Background ─────────────────────────────────── */}

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Soft Ambient Radial Lights — scales gracefully at ANY zoom, no harsh diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 65% 35%, rgba(124,58,237,0.13), transparent 70%), radial-gradient(ellipse 55% 50% at 20% 50%, rgba(34,211,238,0.08), transparent 65%)",
        }}
      />

      {/* Faint horizontal rule lines for depth */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(transparent calc(100% - 1px), rgba(255,255,255,0.5) 1px)",
          backgroundSize: "100% 80px",
        }}
      />

      {/* ─── Main Grid ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:grid-cols-12 lg:gap-10 items-center min-w-0">

        {/* ══ LEFT COLUMN ═══════════════════════════════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center min-w-0 lg:col-span-7"
        >
          {/* Status pill */}
          <motion.div variants={item} className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Open for work
            </div>
            <span className="text-[11px] text-slate-500">· Est. 2024 · Pakistan</span>
          </motion.div>

          {/* ── The Headline ── */}
          <motion.h1
            variants={item}
            className="font-black leading-none tracking-[-0.04em] break-words"
            style={{ fontSize: "clamp(42px, 6.5vw, 96px)" }}
          >
            {/* Line 1 — solid */}
            <span className="block text-white">Products</span>

            {/* Line 2 — brand gradient */}
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #22D3EE 0%, #a78bfa 55%, #22D3EE 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-shift 5s ease infinite",
              }}
            >
              that scale.
            </span>

            {/* Line 3 — muted, thinner weight */}
            <span
              className="block font-light text-slate-500 break-words"
              style={{ fontSize: "clamp(20px, 3.5vw, 48px)", marginTop: "0.15em" }}
            >
              Websites · Apps · AI SaaS
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={item}
            className="mt-6 sm:mt-8 max-w-[480px] text-sm sm:text-[15px] leading-relaxed sm:leading-[1.8] text-slate-400"
          >
            We're a small studio that ships fast and doesn't disappear
            after launch. From a{" "}
            <span className="font-medium text-slate-200">Quran app with 10K+ downloads</span>
            {" "}to{" "}
            <span className="font-medium text-slate-200">AI SaaS platforms</span>
            {" "}— everything we build is production-grade.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-[13px] font-black text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
            >
              <span>Start a project</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={12} />
            </a>
            <a
              href="https://wa.me/923098680902"
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-[13px] font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-400"
            >
              <FaWhatsapp size={15} />
              <span>WhatsApp us</span>
            </a>
          </motion.div>

          {/* ── Social proof strip ── */}
          <motion.div
            variants={item}
            className="mt-10 sm:mt-14 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-7 border-t border-white/[0.06] pt-6 sm:pt-8"
          >
            {[
              { n: "17+", l: "Projects" },
              { n: "10K+", l: "App Downloads" },
              { n: "4.8★", l: "Play Store" },
            ].map(({ n, l }, i) => (
              <div key={i} className={i > 0 ? "border-l border-white/10 pl-4 sm:pl-7" : ""}>
                <p className="text-xl sm:text-2xl font-black text-white">{n}</p>
                <p className="mt-0.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-500">{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ══ RIGHT COLUMN — Visual ═════════════════════ */}
        <div className="relative hidden items-center justify-center lg:flex lg:col-span-5">

          {/* ── Main browser mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: EASE }}
            className="relative w-full max-w-[500px]"
          >
            {/* Browser chrome */}
            <div className="overflow-hidden rounded-[20px] border border-white/12 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/8 bg-[#0f1117] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-500">
                  <span className="text-emerald-500 text-[8px]">●</span>
                  waverii.com
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden bg-[#0f1117]">
                <img
                  src={waverii}
                  alt="Waverii — surf travel platform"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>

            {/* ── Floating chip: 10K downloads — sits BELOW the browser, left-aligned ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
              className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white/12 bg-[#0d1117]/95 px-4 py-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <img src={quranapp} alt="Quran App" className="h-9 w-9 rounded-xl object-cover" />
              <div>
                <p className="text-[11px] font-semibold text-white">Al-Quran Kareem</p>
                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="text-lg font-black text-cyan-400">10K+</span>
                  <span className="text-[10px] text-slate-500">downloads</span>
                </div>
              </div>
              <FaGooglePlay className="ml-1 text-emerald-400 opacity-80" size={13} />
            </motion.div>

            {/* ── Floating chip: AI SaaS — right side, vertically centered ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-violet-400/20 bg-[#0d1117]/95 p-3.5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              style={{ width: 164 }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="text-[9px] font-black uppercase tracking-wider text-violet-400">AI SaaS · Live</span>
              </div>
              <p className="text-[12px] font-bold text-white">Clay Lite</p>
              <p className="text-[10px] text-slate-500 mt-0.5 mb-3">AI Lead Enrichment</p>
              <div className="flex gap-1.5">
                <div className="rounded-lg bg-violet-500/15 px-2 py-1 text-[9px] font-bold text-violet-300">5K+ leads</div>
                <div className="rounded-lg bg-white/5 px-2 py-1 text-[9px] font-semibold text-slate-400">95% accuracy</div>
              </div>
            </motion.div>

            {/* ── Featured badge on browser ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-4 right-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-sm"
            >
              ★ Featured Work
            </motion.div>
          </motion.div>

          {/* Background glow behind the mockup */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
          </div>
        </div>
      </div>

      {/* ─── Bottom fade ────────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}

export default Hero;
