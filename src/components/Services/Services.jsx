import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const services = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "Website Development",
      description:
        "We create fast, modern and responsive websites tailored to your business needs using industry-leading technologies.",
      technologies: ["WordPress", "MERN Stack", "Next.js"],
      perfectFor: [
        "Business Websites",
        "Company Portfolios",
        "Landing Pages",
        "Custom Websites",
      ],
    },

    {
      id: 2,
      icon: FaMobileAlt,
      title: "Android & iOS Development",
      description:
        "Build high-performance mobile applications with beautiful user interfaces and seamless user experiences.",
      technologies: ["Android", "iOS", "React Native"],
      perfectFor: [
        "Business Apps",
        "Booking Apps",
        "Food Delivery",
        "Custom Solutions",
      ],
    },

    {
      id: 3,
      icon: FaGlobe,
      title: "Web Applications",
      description:
        "Powerful web applications designed to automate workflows and improve business productivity.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      perfectFor: [
        "Admin Panels",
        "Dashboards",
        "CRM Systems",
        "Management Portals",
      ],
    },

    {
      id: 4,
      icon: FaShoppingCart,
      title: "E-Commerce Stores",
      description:
        "Launch scalable online stores with secure payments and exceptional shopping experiences.",
      technologies: ["Shopify", "WooCommerce", "WordPress"],
      perfectFor: [
        "Retail",
        "Fashion",
        "Electronics",
        "Online Stores",
      ],
    },

    {
      id: 5,
      icon: FaSearch,
      title: "SEO Optimization",
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
    },

    {
      id: 6,
      icon: FaBullhorn,
      title: "Digital Marketing",
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
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-32 bg-[#05070D] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-cyan-400">
            Our Services
          </p>

          <h2 className="text-5xl font-bold">
            Solutions Tailored For Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            We provide complete digital solutions that help businesses
            establish, grow and succeed online.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = activeCard === service.id;

            return (
              <motion.div
                layout
                key={service.id}
                onClick={() => toggleCard(service.id)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  border
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-cyan-400/70 bg-cyan-400/5 shadow-[0_0_45px_rgba(34,211,238,0.18)]"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
                  }
                `}
              >
                {/* Animated Glow */}

                {isOpen && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-cyan-300/20 to-cyan-400/10 blur-2xl"
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 25,
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Header */}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <motion.div
                        animate={{
                          rotate: isOpen ? 8 : 0,
                          scale: isOpen ? 1.08 : 1,
                        }}
                        className={`
                          rounded-2xl
                          p-4

                          ${
                            isOpen
                              ? "bg-cyan-400 text-black"
                              : "bg-white/5 text-cyan-400"
                          }
                        `}
                      >
                        <Icon size={26} />
                      </motion.div>

                      <div>
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Click to learn more
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                    >
                      <FiChevronDown
                        size={28}
                        className="text-cyan-400"
                      />
                    </motion.div>
                  </div>

                  {/* Description */}

                  <p className="mt-6 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* Expandable */}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8">
                          <h4 className="mb-4 font-semibold text-cyan-300">
                            Technologies
                          </h4>

                          <div className="mb-8 flex flex-wrap gap-3">
                            {service.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          <h4 className="mb-4 font-semibold text-cyan-300">
                            Perfect For
                          </h4>

                          <div className="space-y-3">
                            {service.perfectFor.map((item, index) => (
                              <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-center gap-3 text-slate-300"
                              >
                                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>

                                {item}
                              </motion.div>
                            ))}
                          </div>

                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-8 font-semibold text-cyan-400"
                          >
                            Learn More →
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;