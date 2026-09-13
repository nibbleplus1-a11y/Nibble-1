import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Discovery call",
    time: "Day 1",
    detail: "30-min call. You explain the vision, we ask the right questions. No fluff.",
  },
  {
    num: "02",
    label: "Scope & quote",
    time: "Day 2–3",
    detail: "We send a clear proposal — features, timeline, price. No surprises later.",
  },
  {
    num: "03",
    label: "Design & build",
    time: "Week 1–N",
    detail: "We start building. You get regular updates, not radio silence.",
  },
  {
    num: "04",
    label: "Review & refine",
    time: "Final week",
    detail: "You test it, we fix it. Two rounds of revisions included. No nickle-and-diming.",
  },
  {
    num: "05",
    label: "Launch & handoff",
    time: "Launch day",
    detail: "Your product goes live. We hand over everything — code, credentials, docs.",
  },
  {
    num: "06",
    label: "Support & grow",
    time: "Ongoing",
    detail: "We don't disappear. Updates, new features, or just advice — we're still here.",
  },
];

function Process() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/6 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="badge-cyan mb-5">✦ The Process</div>
          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            From idea to live <br />
            <span className="gradient-text-brand">in weeks, not months.</span>
          </h2>
        </motion.div>

        {/* Timeline — horizontal scrollable on mobile, grid on desktop */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="grid gap-px md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="group relative p-6 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Step dot on line */}
                <div className="absolute -top-[5px] left-6 hidden h-[10px] w-[10px] rounded-full border-2 border-slate-700 bg-[#030712] transition-all duration-300 group-hover:border-cyan-400 md:block" />

                <div className="mb-4 mt-4 md:mt-6">
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="mt-0.5 text-[10px] text-slate-700">{step.time}</div>
                </div>

                <h3 className="text-base font-bold text-white">{step.label}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600 group-hover:text-slate-400 transition-colors">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xs text-slate-700"
        >
          * Timelines vary by project complexity. Simple sites: 1–2 weeks. Full apps: 4–8 weeks.
        </motion.p>
      </div>
    </section>
  );
}

export default Process;