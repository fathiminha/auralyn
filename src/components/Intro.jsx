import { motion, useInView } from "framer-motion";
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
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { target: "10", suffix: "K+", label: "Lives Transformed", icon: "💫" },
  { target: "50", suffix: "+", label: "Wellness Programs", icon: "🌿" },
  { target: "98", suffix: "%", label: "Satisfaction Rate", icon: "✨" },
];

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-32 bg-cream px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Top Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, borderRadius: "50px" }}
          animate={isInView ? { opacity: 1, y: 0, borderRadius: "24px" } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full h-80 rounded-3xl overflow-hidden mb-20 shadow-2xl"
        >
          <motion.img
            src={aboutImg}
            alt="Wellness"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepplum/80 via-deepplum/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p
                variants={itemVariants}
                className="text-white/70 text-sm tracking-widest uppercase mb-3"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="font-serif text-3xl md:text-5xl text-white font-bold max-w-lg leading-tight"
              >
                Wellness is not a destination,{" "}
                <span className="italic text-lavender">it's a way of life</span>
              </motion.h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Description Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-rose font-medium tracking-widest uppercase text-sm mb-4"
            >
              Who We Are
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="font-serif text-4xl text-deepplum font-bold mb-6 leading-tight"
            >
              Your journey to{" "}
              <span className="text-plum italic">radiance</span> starts here
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-lg leading-relaxed mb-6"
            >
              Auralyn is a premium wellness platform that blends mindfulness,
              movement, and nourishment into one seamless experience. We believe
              every person carries an inner glow — we just help you find it.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-plum" />
              <p className="text-plum text-sm font-medium tracking-wider">
                Trusted by 10,000+ wellness seekers
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-72 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={about2Img}
              alt="Meditation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-plum/20" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3"
            >
              <p className="text-deepplum font-serif font-bold text-sm">
                Est. 2025
              </p>
              <p className="text-gray-500 text-xs">Premium Wellness</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(107,63,160,0.2)" }}
              className="bg-white rounded-3xl p-10 text-center shadow-sm border border-lavender/50 transition-all duration-300 group cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                className="text-4xl mb-4"
              >
                {stat.icon}
              </motion.div>
              <p className="font-serif text-5xl font-bold text-plum mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;