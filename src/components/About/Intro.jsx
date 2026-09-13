import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

const highlights = [
  { value: "2+", label: "Years of Experience" },
  { value: "17+", label: "Live Projects" },
  { value: "10K+", label: "App Downloads" },
  { value: "95%+", label: "Client Satisfaction" },
];

function Intro() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* LEFT – Main statement */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge-cyan mb-6">
              ✦ About Nibble+1
            </div>

            <h2 className="text-5xl font-black leading-[1.08] md:text-6xl">
              We Don't Just
              <br />
              Build Websites.
              <br />
              <span className="gradient-text-brand">We Build Futures.</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              Nibble+1 is a specialized digital product studio passionate about building
              modern solutions for startups, entrepreneurs, and global brands. We combine
              creativity, engineering, and AI to create digital products that actually grow your business.
            </p>

            <p className="mt-4 text-lg leading-9 text-slate-400">
              From a Quran app with 10,000+ downloads to autonomous AI SaaS platforms —
              we build things that <span className="font-semibold text-white">scale, convert, and last.</span>
            </p>

            <a
              href="#contact"
              className="btn-primary mt-10 inline-flex items-center gap-2"
            >
              <FaBolt className="text-sm" />
              Work With Us
            </a>
          </motion.div>

          {/* RIGHT – Stats & identity */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Highlight stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
                >
                  <p className="stat-number text-4xl">{h.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{h.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Personality statement card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.06] p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-violet-300 mb-3">
                Our Philosophy
              </p>
              <p className="text-base leading-7 text-slate-300">
                "We believe every business deserves technology that works as hard as they do.
                No cookie-cutter solutions — just tailored digital products that solve real problems."
              </p>
              <p className="mt-3 text-xs text-slate-500">— The Nibble+1 Team</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Intro;