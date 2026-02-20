import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/images/about.jpg";
import about2Img from "../assets/images/about2.jpg";

const stats = [
  { number: "10K+", label: "Lives Transformed", icon: "💫" },
  { number: "50+", label: "Wellness Programs", icon: "🌿" },
  { number: "98%", label: "Satisfaction Rate", icon: "✨" },
];

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-cream px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Top Image Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full h-80 rounded-3xl overflow-hidden mb-20 shadow-2xl"
        >
          <img
            src={aboutImg}
            alt="Wellness"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepplum/80 via-deepplum/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/70 text-sm tracking-widest uppercase mb-3"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="font-serif text-3xl md:text-5xl text-white font-bold max-w-lg leading-tight"
              >
                Wellness is not a destination, it's a way of life
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-rose font-medium tracking-widest uppercase text-sm mb-4">
              Who We Are
            </p>
            <h3 className="font-serif text-4xl text-deepplum font-bold mb-6 leading-tight">
              Your journey to{" "}
              <span className="text-plum italic">radiance</span> starts here
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              Auralyn is a premium wellness platform that blends mindfulness,
              movement, and nourishment into one seamless experience. We believe
              every person carries an inner glow — we just help you find it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={about2Img}
              alt="Meditation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-plum/20" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(107,63,160,0.15)",
              }}
              className="bg-white rounded-3xl p-10 text-center shadow-sm border border-lavender/50 transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <p className="font-serif text-5xl font-bold text-plum mb-2">
                {stat.number}
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