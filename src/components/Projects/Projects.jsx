import { motion } from "framer-motion";
import FeaturedProject from "./FeaturedProject";
import FlagshipProjectCard from "./FlagshipProjectCard";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

function Projects() {
  // Get Featured Project
  const featuredProject = projects.find(
    (project) => project.featured
  );

  // Get Flagship Projects
  const flagshipProjects = projects.filter(
    (project) => project.flagship
  );

  // Get Remaining Client Projects
  const otherProjects = projects.filter(
    (project) => !project.featured && !project.flagship
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-32 text-white"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[250px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[200px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="badge-cyan mb-5">
                ✦ Portfolio
              </div>

              <h2 className="text-5xl font-black leading-tight md:text-6xl">
                Products &
                <br />
                <span className="gradient-text-brand">Client Work</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                From 10K+ download mobile apps to autonomous AI SaaS platforms — every build pushes what's possible.
              </p>
            </div>

            {/* Stats mini-grid */}
            <div className="flex gap-8 md:gap-12 shrink-0">
              <div className="text-center">
                <p className="stat-number text-4xl">17+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="stat-number text-4xl">10K+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">App Downloads</p>
              </div>
              <div className="text-center">
                <p className="stat-number text-4xl">6+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">Countries</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Flagship Products Section */}
        {flagshipProjects.length > 0 && (
          <div className="mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-14"
            >
              <div className="badge-violet mb-4">
                ✦ Flagship Innovations
              </div>

              <h3 className="text-4xl font-black md:text-5xl text-white">
                Engineered for Scale
                <span className="gradient-text-brand"> & Impact</span>
              </h3>

              <p className="mt-4 max-w-2xl text-slate-400">
                Our high-scale mobile applications and autonomous AI SaaS platforms — built with cutting-edge engineering and proven in production.
              </p>
            </motion.div>

            <div className="space-y-16">
              {flagshipProjects.map((project, index) => (
                <FlagshipProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Client Work Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Client & Web Solutions
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-violet-400/30 to-transparent" />
          </div>

          <h3 className="mt-8 text-4xl font-bold">
            Delivered for Global Clients
          </h3>

          <p className="mt-3 text-slate-400">
            A curated selection of websites, e-commerce platforms, and digital solutions built for clients worldwide.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
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