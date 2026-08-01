import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const info = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "nibbleplus1@gmail.com",
      link:
        "https://mail.google.com/mail/?view=cm&fs=1&to=nibbleplus1@gmail.com&su=Project%20Inquiry",
      external: false,
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+92 309 8680902",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      value: "@nibbleplus1",
      link:
        "https://www.instagram.com/nibbleplus1?igsh=MXFwNW93ZjNtdDBoeA==",
      external: true,
    },
    {
      icon: FaFacebook,
      title: "Facebook",
      value: "Nibble+1",
      link: "https://www.facebook.com/share/1D8CyDWRPN/",
      external: true,
    },
  ];

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("+92 309 8680902");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {info.map((item) => {
        const Icon = item.icon;

        // Phone Card
        if (item.title === "Phone") {
          return (
            <motion.div
              key={item.title}
              onClick={copyPhoneNumber}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="
                group
                cursor-pointer
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400
                    group-hover:text-black
                  "
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        }

        // Other Cards
        return (
          <motion.a
            key={item.title}
            href={item.link}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : undefined}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="
              group
              block
              cursor-pointer
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
            "
          >
            <div className="flex items-center gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:bg-cyan-400
                  group-hover:text-black
                "
              >
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300">
                  {item.value}
                </p>
              </div>
            </div>
          </motion.a>
        );
      })}

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="
              rounded-2xl
              border
              border-cyan-400/30
              bg-cyan-400/10
              p-4
              text-center
              font-medium
              text-cyan-300
            "
          >
          Phone number copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ContactInfo;