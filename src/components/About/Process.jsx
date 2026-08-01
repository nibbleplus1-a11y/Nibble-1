import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      title: "Discover",
      icon: FaSearch,
      description:
        "We understand your business goals, audience, and project requirements.",
    },
    {
      title: "Planning",
      icon: FaClipboardList,
      description:
        "A detailed roadmap is prepared with timelines, features, and milestones.",
    },
    {
      title: "Design",
      icon: FaPencilRuler,
      description:
        "Modern UI/UX designs are created with user experience at the center.",
    },
    {
      title: "Development",
      icon: FaCode,
      description:
        "Our developers build scalable, secure, and high-performance solutions.",
    },
    {
      title: "Testing",
      icon: FaBug,
      description:
        "Every feature is tested thoroughly to ensure reliability and quality.",
    },
    {
      title: "Launch",
      icon: FaRocket,
      description:
        "After deployment, we continue providing support and future improvements.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            Our Process
          </p>

          <h2 className="text-5xl font-black">
            How We Bring Ideas To Life
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            We follow a proven workflow that keeps every project organized,
            transparent, and focused on delivering exceptional results.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
                "
              >
                {/* Step Number */}
                <div className="absolute right-6 top-6 text-5xl font-black text-white/5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-slate-400">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;