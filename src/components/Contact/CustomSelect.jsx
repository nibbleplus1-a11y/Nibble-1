import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function CustomSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Label */}
      <label className="mb-2 block text-slate-300">
        {label}
      </label>

      {/* Selected Box */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-left
          text-white
          transition-all
          duration-300
          hover:border-cyan-400/50
          focus:border-cyan-400
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/20
        "
      >
        <span
          className={
            value ? "text-white" : "text-slate-500"
          }
        >
          {value || placeholder}
        </span>

        <FiChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              left-0
              right-0
              z-50
              mt-2
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#0B1018]
              shadow-2xl
            "
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="
                  block
                  w-full
                  px-4
                  py-3
                  text-left
                  text-white
                  transition-all
                  duration-200
                  hover:bg-cyan-400/10
                  hover:text-cyan-400
                "
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSelect;