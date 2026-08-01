import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: FaRocket,
      title: "Innovation First",
      description:
        "We embrace modern technologies and creative thinking to build future-ready digital solutions.",
    },
    {
      icon: FaLaptopCode,
      title: "Expert Development",
      description:
        "From WordPress to MERN Stack and Next.js, we create scalable applications tailored to your business.",
    },
    {
      icon: FaShieldAlt,
      title: "Reliable & Secure",
      description:
        "Every project is developed with performance, security, and scalability in mind.",
    },
    {
      icon: FaHeadset,
      title: "Long-Term Support",
      description:
        "Our relationship doesn't end after launch. We continue helping your business grow.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black">
            Built Around Your Success
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            We don't just develop software—we build digital experiences that
            help businesses grow, improve efficiency, and stand out online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
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
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative mt-5 leading-8 text-slate-400">
                  {feature.description}
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

export default WhyChooseUs;