import { motion } from "framer-motion";

const items = [
  "Mindful Living",
  "✦",
  "Inner Glow",
  "✦",
  "Wellness",
  "✦",
  "Radiance",
  "✦",
  "Self Care",
  "✦",
  "Movement",
  "✦",
  "Nourishment",
  "✦",
  "Balance",
  "✦",
];

const Marquee = ({ reverse = false }) => {
  return (
    <div className="py-5 bg-plum overflow-hidden flex">
      <motion.div
        animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap min-w-full"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white/80 text-sm font-medium tracking-widest uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div
        animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap min-w-full"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white/80 text-sm font-medium tracking-widest uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;