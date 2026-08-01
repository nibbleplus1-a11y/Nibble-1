import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            px-10
            py-20
            text-center
            backdrop-blur-xl
            shadow-[0_0_50px_rgba(34,211,238,0.08)]
          "
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            Let's Work Together
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Ready to Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you're launching a startup, growing your business, or
            transforming your online presence, we're ready to turn your ideas
            into exceptional digital experiences.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="
    rounded-xl
    border
    border-cyan-400/20
    bg-white/[0.03]
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-400
    hover:bg-cyan-400/10
  "
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
