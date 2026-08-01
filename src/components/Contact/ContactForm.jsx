import { motion } from "framer-motion";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

function ContactForm() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="mb-2 text-3xl font-bold">
        Let's Talk
      </h2>

      <p className="mb-8 text-slate-400">
        Tell us about your project and we'll get back to you as soon as
        possible.
      </p>

      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
            "
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-slate-300">
            Company / Startup
          </label>

          <input
            type="text"
            placeholder="ABC Technologies"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
            "
          />
        </div>

        {/* Service */}
        <CustomSelect
          label="Service Required"
          placeholder="Select a Service"
          value={service}
          onChange={setService}
          options={[
            "Website Development",
            "Android Development",
            "iOS Development",
            "React Native App Development",
            "Web Application Development",
            "E-Commerce Store Development",
            "SEO Optimization",
            "Digital Marketing",
          ]}
        />

        {/* Budget */}
        <CustomSelect
          label="Estimated Budget"
          placeholder="Select Budget"
          value={budget}
          onChange={setBudget}
          options={[
            "Less than $500",
            "$500 - $1,000",
            "$1,000 - $5,000",
            "$5,000 - $10,000",
            "$10,000+",
            "Let's Discuss",
          ]}
        />

        {/* Timeline */}
        <CustomSelect
          label="Project Timeline"
          placeholder="Select Timeline"
          value={timeline}
          onChange={setTimeline}
          options={[
            "ASAP",
            "Within 1 Month",
            "1 - 3 Months",
            "3+ Months",
            "Not Sure Yet",
          ]}
        />

        {/* Message */}
        <div>
          <label className="mb-2 block text-slate-300">
            Project Details
          </label>

          <textarea
            rows="6"
            placeholder="Describe your project, goals, preferred technologies, or any specific requirements..."
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-cyan-400
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-300
            hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
          "
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;