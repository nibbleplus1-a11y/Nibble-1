import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGooglePlay,
  FaCheckCircle,
  FaStar,
  FaBolt,
} from "react-icons/fa";

function FlagshipProjectCard({ project, index }) {
  const isReversed = index % 2 === 1;
  const isPlayStore = project.live?.includes("play.google.com");

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        group
        relative
        mb-24
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_70px_rgba(34,211,238,0.2)]
      "
    >
      {/* Background Glow */}
      <div
        className={`absolute -top-32 h-80 w-80 rounded-full blur-[140px] transition-all duration-700 ${
          isReversed
            ? "-left-32 bg-cyan-500/10 group-hover:bg-cyan-500/20"
            : "-right-32 bg-cyan-400/10 group-hover:bg-cyan-400/20"
        }`}
      />

      <div
        className={`grid lg:grid-cols-12 gap-8 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* MEDIA / SCREENSHOT CONTAINER */}
        <div
          className={`lg:col-span-6 p-6 md:p-8 flex items-center justify-center ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0D1117]
              shadow-[0_0_50px_rgba(0,0,0,0.5)]
              transition-all
              duration-500
              group-hover:border-cyan-400/30
            "
          >
            {/* Header bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161B22] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <div className="ml-4 truncate rounded-full bg-white/5 px-4 py-1 text-xs text-slate-400">
                {project.live}
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center p-8 lg:p-12 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Top Badges */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              <FaStar className="text-cyan-400" />
              Flagship Innovation
            </span>

            {project.badge && (
              <span className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <FaBolt />
                {project.badge}
              </span>
            )}
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            {project.category}
          </p>

          <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl text-white">
            {project.title}
          </h3>

          <p className="mt-5 text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Key Stats Row */}
          {project.stats && project.stats.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.stats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <p className="text-lg md:text-xl font-extrabold text-cyan-300">
                    {st.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Core Feature Bullet Points */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Features & Capabilities
              </p>
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-cyan-400 text-xs" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-cyan-400
                px-7
                py-3.5
                font-bold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
              "
            >
              {isPlayStore ? (
                <>
                  <FaGooglePlay className="text-lg" />
                  View on Google Play
                </>
              ) : (
                <>
                  <FaExternalLinkAlt />
                  Launch Live Platform
                </>
              )}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FlagshipProjectCard;
