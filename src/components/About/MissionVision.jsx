import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

/* A simple "what Nibble+1 is / is not" table — shows personality */
const comparisons = [
  { us: "Small team that moves fast", them: "Big agency with slow timelines" },
  { us: "Direct communication with the builder", them: "Account managers & middlemen" },
  { us: "You own all code & assets", them: "Vendor lock-in after handoff" },
  { us: "Transparent flat pricing", them: "Hourly billing surprises" },
  { us: "Production experience (10K+ downloads)", them: "Portfolio of mockups" },
  { us: "We say no when it's not right", them: "Say yes to everything, deliver less" },
];

function MissionVision() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-black md:text-4xl">
            Why founders choose us{" "}
            <span className="gradient-text-brand">over the alternatives.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            (This is the part where we say what every agency says. We won't.)
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-white/8">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-white/8 bg-white/[0.03] px-6 py-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-cyan-400">
              Nibble+1
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">
              The other guys
            </span>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`grid grid-cols-2 border-b border-white/[0.05] px-6 py-4 transition-colors hover:bg-white/[0.025] ${
                i === comparisons.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex items-start gap-2.5 pr-4">
                <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-xs" />
                <span className="text-sm text-slate-200">{row.us}</span>
              </div>
              <div className="flex items-start gap-2.5 pl-4 border-l border-white/[0.05]">
                <span className="mt-0.5 shrink-0 text-xs text-slate-700">✕</span>
                <span className="text-sm text-slate-700">{row.them}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MissionVision;