import { motion } from "framer-motion";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

function Projects() {
  // Get Featured Project
  const featuredProject = projects.find(
    (project) => project.featured
  );

  // Get Remaining Projects
  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070D] py-32 text-white"
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

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Our Latest
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Every project reflects our passion for creating modern,
            responsive, and high-performing digital experiences that help
            businesses grow online.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Other Projects Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-bold">
            More Projects
          </h3>

          <p className="mt-3 text-slate-400">
            A selection of websites and applications we've recently built.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;