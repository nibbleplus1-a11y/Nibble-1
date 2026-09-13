import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaWordpress, FaShopify, FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiExpress,
} from "react-icons/si";

/* ── stack in two tiers: primary tools + supporting ── */
const primaryStack = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
  { name: "React Native", Icon: FaReact, color: "#61DAFB" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
];

const secondaryStack = [
  { name: "WordPress", Icon: FaWordpress },
  { name: "Shopify", Icon: FaShopify },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Express.js", Icon: SiExpress },
  { name: "Figma", Icon: FaFigma },
];

const principles = [
  {
    num: "01",
    title: "Ship fast, iterate faster",
    body: "We don't spend weeks in planning paralysis. We get a working version in front of you early and improve from there.",
  },
  {
    num: "02",
    title: "No hand-holding, but always reachable",
    body: "We assume you're a smart founder. We communicate clearly, flag issues early, and don't disappear after launch.",
  },
  {
    num: "03",
    title: "Own your code, always",
    body: "Every line we write belongs to you. No vendor lock-in, no hostage-taking. You can take it anywhere.",
  },
  {
    num: "04",
    title: "Build for scale from day one",
    body: "Whether it's 10 users or 100K, the architecture holds. We've seen what happens when it doesn't.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ambient */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/7 blur-[200px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── PART 1: How we work (principles) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="badge-violet mb-5">✦ How we work</div>
          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Principles, not <br />
            <span className="gradient-text-brand">buzzwords.</span>
          </h2>
        </motion.div>

        <div className="grid gap-0 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`
                group relative border-white/[0.07] p-8 transition-colors duration-300
                hover:bg-white/[0.025]
                ${i % 2 === 0 ? "border-r" : ""}
                ${i < 2 ? "border-b" : ""}
              `}
            >
              <span className="text-[11px] font-black tracking-[0.3em] text-slate-700 group-hover:text-cyan-400 transition-colors">
                {p.num}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500 group-hover:text-slate-400 transition-colors">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── PART 2: Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 mb-12"
        >
          <div className="badge-cyan mb-5">✦ Our Stack</div>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-black md:text-5xl">
              Tools we've shipped <br />real products with.
            </h2>
            <p className="max-w-xs text-sm leading-7 text-slate-500 md:text-right">
              Not just tutorial tech. Every item here has been used in a production product.
            </p>
          </div>
        </motion.div>

        {/* Primary tools — larger */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 mb-3">
          {primaryStack.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Icon
                size={32}
                style={{ color }}
                className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Secondary tools — smaller row */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {secondaryStack.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-3 text-center transition-all duration-300 hover:border-white/15"
            >
              <Icon size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
              <span className="text-[11px] font-medium text-slate-600 group-hover:text-slate-400 transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;