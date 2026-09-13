import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
} from "react-icons/fa";

function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        group
        relative
        mb-16
        sm:mb-28
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        sm:rounded-[32px]
        lg:rounded-[40px]
        border border-white/10
        backdrop-blur-xl
        transition-all duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_80px_rgba(34,211,238,0.18)]
      "
      style={{
        background: "linear-gradient(135deg, rgba(8,18,40,0.9) 0%, rgba(6,12,28,0.95) 100%)",
      }}
    >
      {/* Corner glow */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/12 blur-[130px] pointer-events-none transition-all duration-700 group-hover:bg-cyan-400/20" />
      <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-violet-500/8 blur-[130px] pointer-events-none" />

      {/* Featured badge - top left corner */}
      <div className="absolute left-4 top-4 sm:left-6 sm:top-6 z-20">
        <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
          <FaStar className="text-yellow-400 shrink-0" />
          <span>Featured Project</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 w-full min-w-0">
        {/* LEFT SIDE – Screenshot */}
        <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-8 w-full min-w-0">
          {/* Browser Window */}
          <div
            className="
              relative w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10
              shadow-[0_0_60px_rgba(0,0,0,0.5)]
              transition-all duration-500
              group-hover:border-cyan-400/30
              group-hover:shadow-[0_0_80px_rgba(0,0,0,0.6)]
            "
            style={{ background: "#0D1117" }}
          >
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161B22] px-3.5 sm:px-5 py-2.5 sm:py-3.5 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="ml-2 sm:ml-5 flex-1 min-w-0 truncate rounded-full bg-white/5 px-3 sm:px-4 py-1 text-[11px] sm:text-xs text-slate-500">
                🔒 {project.live}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

              {/* Hover visit button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black hover:bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.5)] translate-y-4 transition-all duration-500 group-hover:translate-y-0"
                >
                  <FaExternalLinkAlt />
                  Visit Live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Content */}
        <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14 w-full min-w-0">
          {/* Category */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-cyan-400 mb-2 break-words">
            {project.category}
          </p>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white break-words">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-400 break-words">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 sm:px-4 py-1 sm:py-1.5
                  text-xs sm:text-sm font-medium text-cyan-300
                  transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Visit Website</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProject;