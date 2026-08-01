import { motion } from "framer-motion";
import { FaRocket, FaGlobe } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="
              group
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black">
              <FaRocket size={28} />
            </div>

            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Our mission is to empower businesses, startups, and entrepreneurs
              by creating innovative digital products that are visually
              impressive, scalable, secure, and built to deliver long-term
              value. Every solution we create is focused on helping our clients
              succeed in today's digital world.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="
              group
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black">
              <FaGlobe size={28} />
            </div>

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              We envision Nibble+1 becoming a trusted technology startup known
              for delivering modern websites, web applications, mobile apps, and
              digital experiences that inspire innovation and help businesses
              grow globally through technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;