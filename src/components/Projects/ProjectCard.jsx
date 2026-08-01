import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,0.2)]
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-64
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Center Button */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              translate-y-6
              rounded-xl
              bg-cyan-400
              px-7
              py-3
              font-semibold
              text-black
              transition-all
              duration-500
              group-hover:translate-y-0
              hover:bg-cyan-300
              hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
            "
          >
            View Project ↗
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-cyan-400
              px-4
              py-1
              text-xs
              font-semibold
              text-black
            "
          >
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
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
        <div className="mt-8 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-400
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-300
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            <FaExternalLinkAlt />

            View Live
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-400/10
                hover:text-cyan-400
              "
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;