import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import aboutImg from "../assets/images/about.jpg";
import about2Img from "../assets/images/about2.jpg";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let s = 0;
    const e = parseInt(target);
    const step = (e / 1800) * 16;
    const t = setInterval(() => {
      s += step;
      if (s >= e) { setCount(e); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="py-40 px-8 md:px-20 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-24"
        >
          <div className="w-12 h-px bg-plum/30" />
          <p className="font-sans text-[10px] text-plum/40 tracking-[0.5em] uppercase">About Auralyn</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-36">

          {/* Left text */}
          <div>
            {"Wellness is not a".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-4 mb-2">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  className="font-serif text-5xl md:text-7xl font-bold text-deepplum inline-block leading-tight"
                >
                  {word}
                </motion.span>
              </div>
            ))}
            <div className="overflow-hidden inline-block mr-4">
              <motion.span
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-5xl md:text-7xl font-bold italic text-plum inline-block leading-tight"
              >
                destination,
              </motion.span>
            </div>
            <div className="overflow-hidden inline-block">
              <motion.span
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.42, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-5xl md:text-7xl font-bold text-deepplum inline-block leading-tight"
              >
                it's a ritual.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="font-sans font-light text-deepplum/40 text-base leading-relaxed mt-12 max-w-sm"
            >
              Auralyn blends mindfulness, movement, and nourishment into one
              seamless experience. We believe every person carries an inner
              glow — we just help you find it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-12"
            >
              <Link to="services" smooth spy duration={1000} offset={-80}>
                <motion.button
                  whileHover={{ x: 8 }}
                  className="font-sans text-[10px] tracking-[0.4em] uppercase text-plum/40 flex items-center gap-3 hover:text-plum transition-colors duration-300"
                >
                  Explore Our Programs
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

          {/* Right images */}
          <div className="relative h-[520px]">
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.3 }}
              className="absolute top-0 right-0 w-4/5 h-80 overflow-hidden"
            >
              <img
                src={aboutImg}
                alt="About"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-plum/10" />
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-plum/30" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-plum/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, y: 60 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-3/5 h-60 overflow-hidden border-4 border-cream"
            >
              <img
                src={about2Img}
                alt="About 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-rose/10" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream border border-lavender/50 px-6 py-5 z-10 shadow-lg"
            >
              <p className="font-sans text-[9px] text-plum/40 tracking-widest uppercase mb-1">Est.</p>
              <p className="font-serif text-5xl font-bold text-plum">2025</p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-plum/10">
          {[
            { target: "10", suffix: "K+", label: "Lives Transformed" },
            { target: "50", suffix: "+", label: "Wellness Programs" },
            { target: "98", suffix: "%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }}
              whileHover={{ backgroundColor: "rgba(107,63,160,0.03)" }}
              className="py-14 px-10 border-b md:border-b-0 md:border-r border-plum/10 last:border-0 transition-colors duration-300"
            >
              <p className="font-serif text-7xl font-bold text-plum mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="font-sans text-[10px] text-deepplum/25 tracking-[0.4em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;