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
        mb-24
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]
      "
    >
      {/* Cyan Glow */}
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-center p-8">

          {/* Browser Window */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0D1117]
              shadow-[0_0_50px_rgba(0,0,0,.35)]
            "
          >

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161B22] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>

              <div className="ml-6 flex-1 rounded-full bg-white/5 px-4 py-1 text-xs text-slate-500">
                {project.live}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  transition-all
                  duration-500
                  group-hover:bg-black/30
                "
              />

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center p-10 lg:p-14">

          {/* Badge */}
          <div
            className="
              mb-6
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-cyan-300
            "
          >
            <FaStar />

            Featured Project
          </div>

          {/* Category */}
          <p className="uppercase tracking-[0.35em] text-cyan-400">
            {project.category}
          </p>

          {/* Title */}
          <h2 className="mt-5 text-5xl font-black leading-tight">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:text-black
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">

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
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
              "
            >
              Visit Website

              <FaExternalLinkAlt />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:bg-cyan-400/10
                "
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