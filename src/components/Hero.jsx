import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { useRef } from "react";
import heroBg from "../assets/images/hero.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deepplum/80 via-plum/60 to-deepplum/90" />
      </motion.div>

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 z-10"
        style={{ background: "radial-gradient(circle, #E6D9F2, transparent)" }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 z-10"
        style={{ background: "radial-gradient(circle, #C9808A, transparent)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-10 z-10"
        style={{ background: "radial-gradient(circle, #E6D9F2, transparent)" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm px-6 py-2 rounded-full mb-8 border border-white/20"
        >
          ✨ Premium Wellness Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-8xl md:text-[10rem] font-bold text-white mb-6 leading-none"
        >
          Auralyn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-white/80 text-xl md:text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Discover Your Glow. Live in Your Aura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="services" smooth={true} duration={800} offset={-80}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-plum px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              Begin Your Journey
            </motion.button>
          </Link>
          <Link to="about" smooth={true} duration={800} offset={-80}>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/60 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;