import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 800); }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-deepplum flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-6xl md:text-8xl font-bold text-white mb-12"
          >
            Auralyn
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              style={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Counter */}
          <motion.p
            className="text-white/40 text-xs tracking-widest mt-4 font-light"
          >
            {String(Math.min(count, 100)).padStart(3, "0")}
          </motion.p>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 text-white text-xs tracking-[0.4em] uppercase"
          >
            Discover Your Glow
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;