import { Link } from "react-router-dom";
import { HiOutlineMoon } from "react-icons/hi2";
import logo from "../../assets/images/Logo2.png";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-[#05070D] pt-2 pb-2">
      {/* Glow Border */}
      <div className="mx-auto max-w-7xl rounded-[24px] bg-gradient-to-r from-cyan-400/30 via-white/5 to-cyan-400/30 p-[1px] shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        {/* Glass Navbar */}
        <div
          className="
            relative
            flex
            items-center
            justify-between
            overflow-hidden
            rounded-[23px]
            border
            border-white/10
            bg-[#05070D]/95
            px-8
            py-4
            backdrop-blur-2xl
          "
        >
          {/* Dark Glass Layer */}
          <div className="absolute inset-0 -z-10 bg-[#05070D]/95"></div>

          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <img
              src={logo}
              alt="Nibble+1 Logo"
              className="
                h-14
                w-19
                object-contain
                -mr-4
                drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.6)]
              "
            />

            <h2 className="text-2xl font-bold tracking-tight text-white">
              ibble<span className="text-cyan-400">+1</span>
            </h2>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            <a
              href="#home"
              className="group relative text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Home
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className="group relative text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Services
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#projects"
              className="group relative text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#about"
              className="group relative text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              About
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className="group relative text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                p-2.5
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-400/10
                hover:text-cyan-400
              "
            >
              <HiOutlineMoon size={20} />
            </button>

            <a
              href="#contact"
              className="
    rounded-xl
    bg-cyan-400
    px-6
    py-2.5
    font-semibold
    text-black
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-cyan-300
    hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
  "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
