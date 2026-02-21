import { motion } from "framer-motion";

const items = ["Mindful Living", "✦", "Inner Glow", "✦", "Wellness", "✦", "Radiance", "✦", "Self Care", "✦", "Movement", "✦", "Nourishment", "✦", "Balance", "✦"];

const Marquee = ({ reverse = false, dark = false }) => {
  return (
    <div className={`py-5 overflow-hidden flex border-y ${dark ? "bg-white/5 border-white/10" : "bg-plum/80 border-plum"}`}>
      {[0, 1].map((n) => (
        <motion.div
          key={n}
          animate={{ x: reverse ? ["−100%", "0%"] : ["0%", "−100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap min-w-full pr-10"
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-white/70 text-xs font-light tracking-[0.4em] uppercase">
              {item}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Marquee;