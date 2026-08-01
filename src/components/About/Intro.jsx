import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Cyan Glow */}
      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="absolute right-0 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-md">
            ✦ About Nibble+1
          </span>

          {/* Heading */}

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Turning Ideas Into

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              Powerful Digital Experiences
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">
            Nibble+1 is a technology startup passionate about building modern
            digital solutions for businesses, startups, and entrepreneurs. We
            combine creativity, innovation, and cutting-edge technologies to
            develop websites, web applications, mobile apps, and e-commerce
            platforms that help brands establish a strong digital presence and
            grow with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;