import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/images/about.jpg";
import about2Img from "../assets/images/about2.jpg";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    const step = (end / 1800) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="about" className="py-40 px-8 md:px-16 overflow-hidden bg-[#080510]">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-white/20" />
          <p className="text-white/30 text-xs tracking-[0.5em] uppercase">About Auralyn</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

          {/* Left - Text */}
          <div>
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-white/30 text-xs tracking-[0.5em] uppercase mb-6"
              >
                Who We Are
              </motion.p>
            </div>

            {"Wellness is not a destination,".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
                  className="font-serif text-4xl md:text-6xl text-white font-bold inline-block leading-tight"
                >
                  {word}
                </motion.span>
              </div>
            ))}
            <div className="overflow-hidden inline-block mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-4xl md:text-6xl text-plum italic font-bold inline-block leading-tight"
              >
                it's a journey.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white/40 text-base leading-relaxed mt-10 max-w-md font-light"
            >
              Auralyn blends mindfulness, movement, and nourishment into one seamless experience.
              We believe every person carries an inner glow — we just help you find it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10"
            >
              <Link to="services" smooth duration={1000} offset={-80}>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="text-white/60 text-xs tracking-widest uppercase flex items-center gap-3 hover:text-white transition-colors duration-300"
                >
                  <span>Explore Our Programs</span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right - Images stacked */}
          <div className="relative h-[500px]">
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-0 right-0 w-3/4 h-72 overflow-hidden"
            >
              <img src={aboutImg} alt="About" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-plum/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-2/3 h-56 overflow-hidden border-4 border-[#080510]"
            >
              <img src={about2Img} alt="About 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-rose/10" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#080510] border border-white/10 px-6 py-4 z-10"
            >
              <p className="font-serif text-2xl font-bold text-white">Est.</p>
              <p className="font-serif text-4xl font-bold text-plum">2025</p>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
          {[
            { target: "10", suffix: "K+", label: "Lives Transformed" },
            { target: "50", suffix: "+", label: "Wellness Programs" },
            { target: "98", suffix: "%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              className="py-12 px-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0"
            >
              <p className="font-serif text-6xl font-bold text-white mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-white/30 text-xs tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Need to import Link
import { Link } from "react-scroll";

export default Intro;