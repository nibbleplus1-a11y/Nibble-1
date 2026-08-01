import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05070D] text-white"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-44 h-[500px] w-[500px] -translate-x-[70%] rounded-full bg-cyan-400/10 blur-[190px]" />
      <div className="absolute left-1/2 top-72 h-[420px] w-[420px] translate-x-[45%] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_55%)]" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-5xl flex-col items-center justify-center px-6 pt-36 pb-32 text-center">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-md">
            ✦ Welcome to Nibble+1
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Building
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
            Digital Experiences
          </span>
          <br />
          <span className="text-white transition duration-300 hover:text-cyan-100">
            That Matter.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
        >
          We craft modern websites, scalable web applications, mobile
          applications and intelligent digital solutions that help startups and
          businesses build a stronger online presence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#contact"
            className="
    rounded-xl
    bg-cyan-400
    px-6
    py-2.5
    font-semibold
    text-black
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-cyan-300
    hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
  "
          >
            Get Started
          </a>

          <a
            href="#projects"
            className="
    rounded-xl
    border
    border-cyan-400/20
    bg-white/[0.03]
    px-8
    py-3
    font-semibold
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:bg-cyan-400/10
  "
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative pb-8">
        <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
