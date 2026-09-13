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
        mb-28
        overflow-hidden
        rounded-[40px]
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
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/12 blur-[130px] transition-all duration-700 group-hover:bg-cyan-400/20" />
      <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-violet-500/8 blur-[130px]" />

      {/* Featured badge - top left corner */}
      <div className="absolute left-6 top-6 z-20">
        <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
          <FaStar className="text-yellow-400" />
          Featured Project
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* LEFT SIDE – Screenshot */}
        <div className="relative flex items-center justify-center p-8 pt-20 lg:pt-8">
          {/* Browser Window */}
          <div
            className="
              relative w-full overflow-hidden rounded-2xl border border-white/10
              shadow-[0_0_60px_rgba(0,0,0,0.5)]
              transition-all duration-500
              group-hover:border-cyan-400/30
              group-hover:shadow-[0_0_80px_rgba(0,0,0,0.6)]
            "
            style={{ background: "#0D1117" }}
          >
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161B22] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <div className="ml-5 flex-1 rounded-full bg-white/5 px-4 py-1 text-xs text-slate-500 truncate">
                🔒 {project.live}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full transition-all duration-700 group-hover:scale-[1.03]"
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
        <div className="flex flex-col justify-center p-10 lg:p-14">
          {/* Category */}
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400 mb-2">
            {project.category}
          </p>

          {/* Title */}
          <h2 className="text-4xl font-black leading-tight md:text-5xl text-white">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-1.5
                  text-sm font-medium text-cyan-300
                  transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex items-center gap-3"
            >
              Visit Website
              <FaExternalLinkAlt className="text-xs" />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost flex items-center gap-3"
              >
                <FaGithub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProject;