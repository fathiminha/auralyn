import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const letters = "AURALYN".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 900); }, 400);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 6) + 2, 100);
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-deepplum flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.06 }}
            transition={{ duration: 1.5 }}
            className="absolute w-[600px] h-[600px] rounded-full border border-lavender"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.04 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute w-[850px] h-[850px] rounded-full border border-lavender"
          />

          <div className="flex gap-2 mb-12">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-7xl md:text-9xl font-bold text-cream tracking-widest"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="w-64 h-px bg-lavender/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-lavender"
              style={{ width: `${count}%` }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-lavender mt-4 tracking-[0.5em] font-sans"
          >
            {String(count).padStart(3, "0")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 text-xs text-cream tracking-[0.6em] uppercase font-sans"
          >
            Discover Your Glow — Est. 2025
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;