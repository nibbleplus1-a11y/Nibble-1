import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Big blurred accent behind */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(124,58,237,0.08) 0%, rgba(34,211,238,0.04) 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 p-6 sm:p-10 md:p-16 min-w-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,18,40,0.95) 0%, rgba(12,8,35,0.95) 100%)",
          }}
        >
          {/* Corner decorations */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/8 blur-[100px]" />

          {/* Content */}
          <div className="relative flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between min-w-0">
            <div className="max-w-xl min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-400 mb-3 sm:mb-4">
                Let's talk
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white break-words">
                Got a project in mind?
                <br />
                <span className="gradient-text-brand">We want to hear it.</span>
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-400 leading-relaxed sm:leading-7 break-words">
                No forms, no sales process. Just reach out directly —{" "}
                <span className="text-white font-medium">WhatsApp or email</span>.
                We reply fast.
              </p>
            </div>

            {/* Direct contact buttons */}
            <div className="flex shrink-0 flex-col gap-3">
              <a
                href="https://wa.me/923098680902"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-black transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
              >
                <FaWhatsapp size={20} />
                WhatsApp us now
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nibbleplus1@gmail.com&su=Project%20Inquiry"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/8 hover:-translate-y-0.5"
              >
                <FaEnvelope size={16} className="text-cyan-400" />
                nibbleplus1@gmail.com
              </a>

              {/* Response time note */}
              <p className="text-center text-[11px] text-slate-700">
                ⚡ Average response time: under 2 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
