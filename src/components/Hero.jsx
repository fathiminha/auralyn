import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import heroBg from "../assets/images/hero.jpg";

const words = ["Radiance", "Balance", "Wellness", "Harmony", "Serenity"];
const verticalLetters = ["A", "U", "R", "A", "L", "Y", "N"];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const [currentWord, setCurrentWord] = useState(0);

  // Custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Custom Cursor */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/60 z-[999] pointer-events-none mix-blend-difference"
      />

      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deepplum/70 via-plum/40 to-deepplum/95" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-deepplum/50 via-transparent to-deepplum/50" />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Vertical Letters - Left Side like urbanchic */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-1">
        {verticalLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.15, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            className="text-white font-serif font-bold text-lg"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Right Side Vertical Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        <p className="text-white text-xs tracking-[0.3em] uppercase">
          Discover • Glow • Transform
        </p>
      </motion.div>

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute z-10 w-[600px] h-[600px] rounded-full border border-white pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute z-10 w-[800px] h-[800px] rounded-full border border-white pointer-events-none"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 25, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-24 left-16 w-72 h-72 rounded-full z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E6D9F2 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -25, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-96 h-96 rounded-full z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9808A 0%, transparent 70%)" }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-6xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 text-xs px-5 py-2 rounded-full mb-10 border border-white/20"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            ✦
          </motion.span>
          Premium Wellness Experience — Est. 2025
          <motion.span
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            ✦
          </motion.span>
        </motion.div>

        {/* Main Title with letter stagger */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif font-bold text-white leading-none"
            style={{ fontSize: "clamp(8rem, 20vw, 20rem)" }}
          >
            Auralyn
          </motion.h1>
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-32 h-px bg-white/30 mx-auto mb-6"
        />

        {/* Rotating Words */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-px bg-white/40 w-16"
          />
          <div className="h-10 overflow-hidden flex items-center justify-center w-36">
            <motion.div
              key={currentWord}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-serif text-2xl italic text-lavender"
            >
              {words[currentWord]}
            </motion.div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-px bg-white/40 w-16"
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl font-light mb-14 max-w-lg mx-auto leading-relaxed"
        >
          Where mindfulness meets movement. Discover your inner glow and
          embrace a life of radiant wellness.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Link to="services" smooth={true} duration={800} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white text-deepplum px-10 py-4 rounded-full font-semibold text-lg cursor-pointer w-full sm:w-auto overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-lavender"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Begin Your Journey</span>
            </motion.button>
          </Link>

          <Link to="about" smooth={true} duration={800} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer w-full sm:w-auto backdrop-blur-sm"
            >
              Explore Auralyn
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-12 mb-16"
        >
          {[
            { number: "10K+", label: "Members" },
            { number: "50+", label: "Programs" },
            { number: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-center cursor-default"
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
                className="font-serif text-3xl font-bold text-white mb-1"
              >
                {stat.number}
              </motion.p>
              <p className="text-white/50 text-xs tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-0.5 h-2 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;