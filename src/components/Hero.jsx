import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import heroBg from "../assets/images/hero.jpg";

const words = ["Radiance ✦", "Balance ✦", "Wellness ✦", "Harmony ✦", "Serenity ✦"];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-end justify-start overflow-hidden pb-20 px-8 md:px-16"
    >
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080510] via-[#080510]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080510]/80 to-transparent" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B3FA0, transparent)" }}
      />

      {/* Right side - rotating text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 4 }}
        style={{ writingMode: "vertical-rl" }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <motion.p
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-white text-[10px] tracking-[0.5em] uppercase"
        >
          Scroll to Explore ↓
        </motion.p>
      </motion.div>

      {/* Main Content - bottom left like accordion.net.au */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 max-w-5xl">

        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-white/40" />
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase">
            Premium Wellness — Est. 2025
          </p>
        </motion.div>

        {/* Giant title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 3.9, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif font-black text-white leading-none"
            style={{ fontSize: "clamp(5rem, 18vw, 20rem)" }}
          >
            Aura
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 4.0, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif font-black leading-none flex items-end gap-6"
            style={{ fontSize: "clamp(5rem, 18vw, 20rem)" }}
          >
            <span className="text-white">lyn</span>
            {/* Rotating word next to title */}
            <div className="h-16 md:h-24 overflow-hidden flex items-end pb-2">
              <motion.span
                key={currentWord}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif italic text-2xl md:text-4xl text-lavender block"
              >
                {words[currentWord]}
              </motion.span>
            </div>
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.3, duration: 0.8 }}
            className="text-white/50 text-sm font-light max-w-xs leading-relaxed"
          >
            Where mindfulness meets movement. Discover your inner glow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
          >
            <Link to="services" smooth={true} duration={1000} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
                <span className="relative z-10 group-hover:text-deepplum transition-colors duration-300">
                  Begin Journey →
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats - bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-20 right-16 hidden lg:flex gap-12"
      >
        {[
          { number: "10K+", label: "Members" },
          { number: "50+", label: "Programs" },
          { number: "98%", label: "Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-serif text-2xl font-bold text-white">{stat.number}</p>
            <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 4.8, duration: 1 }}
        className="absolute bottom-0 left-16 w-px h-20 bg-gradient-to-b from-transparent to-white/30 origin-top"
      />
    </section>
  );
};

export default Hero;