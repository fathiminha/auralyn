import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import heroBg from "../assets/images/hero.jpg";

const words = ["Radiance", "Balance", "Serenity", "Harmony", "Glow"];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentWord((p) => (p + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-end justify-start overflow-hidden pb-24 px-8 md:px-20"
    >
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deepplum via-deepplum/75 to-deepplum/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-deepplum/90 via-deepplum/40 to-transparent" />
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 4.2, duration: 1.5 }}
        className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-lavender/30 to-transparent origin-top hidden lg:block"
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.04, 0.12, 0.04] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E6D9F2 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.09, 0.03] }}
        transition={{ repeat: Infinity, duration: 9 }}
        className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9808A 0%, transparent 70%)" }}
      />

      {/* Right vertical scroll text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        style={{ writingMode: "vertical-rl" }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ height: [20, 40, 20] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px bg-lavender/30"
        />
        <p className="font-mono text-[9px] text-lavender/40 tracking-[0.5em] uppercase">Scroll</p>
        <motion.div
          animate={{ height: [40, 20, 40] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px bg-lavender/30"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 max-w-6xl w-full">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.8, duration: 0.9 }}
          className="flex items-center gap-4 mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="w-12 h-px bg-rose/50 origin-left"
          />
          <p className="font-mono text-[10px] text-lavender/50 tracking-[0.5em] uppercase">
            Premium Wellness — Est. 2025
          </p>
        </motion.div>

        {/* Giant Title */}
        <div className="overflow-hidden mb-0">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 3.9, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-light text-cream leading-none"
            style={{ fontSize: "clamp(5rem, 17vw, 18rem)", letterSpacing: "-0.02em" }}
          >
            Aura
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <div className="flex items-end gap-8">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 4.05, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-light text-cream leading-none"
              style={{ fontSize: "clamp(5rem, 17vw, 18rem)", letterSpacing: "-0.02em" }}
            >
              lyn
            </motion.h1>

            {/* Rotating word */}
            <div className="pb-4 overflow-hidden h-16 md:h-24 flex items-end">
              <motion.span
                key={currentWord}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="font-display italic font-light text-rose block"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}
              >
                {words[currentWord]}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 0.9 }}
            className="font-body font-light text-lavender/50 text-sm max-w-xs leading-relaxed"
          >
            Where ancient botanical wisdom meets modern mindfulness. Your inner glow awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.6, duration: 0.9 }}
            className="flex items-center gap-6"
          >
            <Link to="services" smooth={true} duration={1000} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative border border-lavender/40 text-cream font-body text-[11px] tracking-[0.3em] uppercase px-8 py-4 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-plum"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                />
                <span className="relative z-10 group-hover:text-cream transition-colors duration-300">
                  Begin Journey
                </span>
              </motion.button>
            </Link>

            <Link to="about" smooth={true} duration={1000} offset={-80}>
              <motion.button
                whileHover={{ x: 8, color: "#C9808A" }}
                className="font-body text-[11px] tracking-[0.3em] uppercase text-lavender/30 transition-colors duration-300 flex items-center gap-3"
              >
                Discover
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8 }}
        className="absolute bottom-24 right-20 hidden lg:flex flex-col gap-6"
      >
        {[
          { number: "10K+", label: "Members" },
          { number: "50+", label: "Programs" },
          { number: "98%", label: "Satisfaction" },
        ].map((stat, i) => (
          <motion.div key={i} whileHover={{ x: -6 }} className="text-right cursor-default">
            <p className="font-display text-2xl font-light text-lavender">{stat.number}</p>
            <p className="font-mono text-[9px] text-cream/25 tracking-widest uppercase mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;