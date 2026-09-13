import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaSearch,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Website Development",
    tagline: "Fast. Modern. Responsive.",
    description:
      "We create fast, modern and responsive websites tailored to your business needs using industry-leading technologies.",
    technologies: ["WordPress", "MERN Stack", "Next.js"],
    perfectFor: [
      "Business Websites",
      "Company Portfolios",
      "Landing Pages",
      "Custom Websites",
    ],
    color: "cyan",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Android & iOS Development",
    tagline: "Native. Performant. Beautiful.",
    description:
      "Build high-performance mobile applications with beautiful user interfaces and seamless user experiences.",
    technologies: ["Android", "iOS", "React Native"],
    perfectFor: [
      "Business Apps",
      "Booking Apps",
      "Food Delivery",
      "Custom Solutions",
    ],
    color: "violet",
  },
  {
    id: 3,
    icon: FaGlobe,
    title: "Web Applications",
    tagline: "Scalable. Smart. Automated.",
    description:
      "Powerful web applications designed to automate workflows and improve business productivity.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    perfectFor: [
      "Admin Panels",
      "Dashboards",
      "CRM Systems",
      "Management Portals",
    ],
    color: "cyan",
  },
  {
    id: 4,
    icon: FaShoppingCart,
    title: "E-Commerce Stores",
    tagline: "Sell. Grow. Scale.",
    description:
      "Launch scalable online stores with secure payments and exceptional shopping experiences.",
    technologies: ["Shopify", "WooCommerce", "WordPress"],
    perfectFor: [
      "Retail",
      "Fashion",
      "Electronics",
      "Online Stores",
    ],
    color: "violet",
  },
  {
    id: 5,
    icon: FaSearch,
    title: "SEO Optimization",
    tagline: "Rank. Convert. Dominate.",
    description:
      "Improve your visibility on search engines and generate more organic traffic for your business.",
    technologies: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
    ],
    perfectFor: [
      "Business Websites",
      "Blogs",
      "Online Stores",
    ],
    color: "cyan",
  },
  {
    id: 6,
    icon: FaBullhorn,
    title: "Digital Marketing",
    tagline: "Engage. Reach. Convert.",
    description:
      "Increase your brand awareness and customer engagement through effective digital marketing strategies.",
    technologies: [
      "Facebook",
      "Instagram",
      "LinkedIn",
      "TikTok",
    ],
    perfectFor: [
      "Brand Awareness",
      "Lead Generation",
      "Social Engagement",
    ],
    color: "violet",
  },
];

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const isCyan = service.color === "cyan";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onClick={() => setOpen(!open)}
      className={`
        group relative cursor-pointer overflow-hidden rounded-3xl border p-7
        backdrop-blur-xl transition-all duration-400
        ${open
          ? isCyan
            ? "border-cyan-400/50 bg-cyan-400/5 shadow-[0_0_60px_rgba(34,211,238,0.14)]"
            : "border-violet-400/50 bg-violet-400/5 shadow-[0_0_60px_rgba(124,58,237,0.14)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
        }
      `}
    >
      {/* Animated background glow on open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[120px] pointer-events-none ${
              isCyan ? "bg-cyan-400/12" : "bg-violet-500/12"
            }`}
          />
        )}
      </AnimatePresence>

      {/* Card number watermark */}
      <div
        className={`pointer-events-none absolute right-6 top-4 font-black text-[80px] leading-none opacity-[0.04] select-none ${
          isCyan ? "text-cyan-400" : "text-violet-400"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <motion.div
              animate={{
                rotate: open ? 6 : 0,
                scale: open ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-300
                ${open
                  ? isCyan
                    ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                    : "bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  : "bg-white/5 text-slate-300 group-hover:bg-white/10"
                }
              `}
            >
              <Icon size={24} />
            </motion.div>

            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isCyan ? "text-cyan-400/60" : "text-violet-400/60"}`}>
                {service.tagline}
              </p>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
          </div>

          {/* Arrow toggle */}
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-1 shrink-0 transition-colors ${open ? (isCyan ? "text-cyan-400" : "text-violet-400") : "text-slate-500"}`}
          >
            <FaArrowRight size={16} />
          </motion.div>
        </div>

        {/* Description - always visible */}
        <p className="mt-5 leading-7 text-slate-400 text-[15px]">
          {service.description}
        </p>

        {/* Expandable details */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden"
            >
              <div className="mt-7 space-y-6">
                {/* Technologies */}
                <div>
                  <p className={`mb-3 text-xs font-bold uppercase tracking-wider ${isCyan ? "text-cyan-400" : "text-violet-400"}`}>
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                          isCyan
                            ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
                            : "border-violet-400/25 bg-violet-400/10 text-violet-300"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Perfect For */}
                <div>
                  <p className={`mb-3 text-xs font-bold uppercase tracking-wider ${isCyan ? "text-cyan-400" : "text-violet-400"}`}>
                    Perfect For
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.perfectFor.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${isCyan ? "bg-cyan-400" : "bg-violet-400"}`} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className={`inline-flex items-center gap-2 text-sm font-bold ${
                    isCyan ? "text-cyan-400 hover:text-cyan-300" : "text-violet-400 hover:text-violet-300"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Get started with this service
                  <FaArrowRight size={12} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-32 overflow-hidden bg-[#030712] py-32 text-white"
    >
      {/* Subtle bg grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[200px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="badge-violet mb-5">
            ✦ What We Do
          </div>

          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Solutions Built{" "}
            <br />
            <span className="gradient-text-brand">For Every Scale</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From concept to launch — we deliver complete digital solutions that help businesses
            establish, grow, and win online.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-slate-400">
            Not sure what you need?{" "}
            <a href="#contact" className="link-underline font-semibold text-cyan-400 hover:text-cyan-300">
              Let's talk and we'll figure it out →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;