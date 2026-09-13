import {
  FaReact, FaNode, FaWordpress, FaShopify, FaMobileAlt, FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiFramer,
} from "react-icons/si";

const techStack = [
  { label: "React", icon: FaReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: FaNode },
  { label: "WordPress", icon: FaWordpress },
  { label: "Shopify", icon: FaShopify },
  { label: "React Native", icon: FaMobileAlt },
  { label: "MongoDB", icon: SiMongodb },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Framer", icon: SiFramer },
  { label: "OpenAI API", icon: FaRobot },
];

/* Separator dot */
const Dot = () => (
  <span className="mx-8 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/40" />
);

/* Single ticker item */
const TickerItem = ({ label, Icon }) => (
  <span className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-slate-400">
    <Icon className="text-cyan-400/70" size={16} />
    {label}
  </span>
);

function MarqueeTicker() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5 backdrop-blur-sm">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#030712] to-transparent" />

      {/* Scrolling track */}
      <div className="ticker-container">
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={idx} className="flex items-center">
                <TickerItem label={item.label} Icon={Icon} />
                <Dot />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MarqueeTicker;
