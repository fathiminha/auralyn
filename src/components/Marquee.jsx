import { motion } from "framer-motion";

const items = [
  "Mindful Living", "✦", "Inner Glow", "✦", "Wellness",
  "✦", "Radiance", "✦", "Self Care", "✦", "Movement",
  "✦", "Nourishment", "✦", "Balance", "✦",
];

const Marquee = ({ reverse = false, dark = false }) => {
  return (
    <div className={`py-4 overflow-hidden flex border-y ${
      dark ? "bg-lavender/10 border-lavender/20" : "bg-plum border-plum/80"
    }`}>
      {[0, 1].map((n) => (
        <motion.div
          key={n}
          animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap min-w-full pr-12"
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`font-sans text-[10px] tracking-[0.5em] uppercase ${
                dark ? "text-plum/40" : "text-lavender/60"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Marquee;