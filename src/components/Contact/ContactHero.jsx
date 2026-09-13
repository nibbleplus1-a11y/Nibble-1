import { motion } from "framer-motion";

function ContactHero() {
  return (
    <div className="relative overflow-hidden px-6 pb-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-cyan mb-5">✦ Contact</div>
            <h2 className="text-5xl font-black leading-tight md:text-6xl text-white">
              Skip the forms. <br />
              <span className="gradient-text-brand">Just reach out.</span>
            </h2>
          </motion.div>

          {/* Right — honest note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-sm text-slate-500 text-sm leading-7 md:text-right"
          >
            We read every message. If your project is a fit,
            we'll respond within a few hours — usually faster.
          </motion.p>

        </div>
      </div>
    </div>
  );
}

export default ContactHero;