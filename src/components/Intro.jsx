import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mindfulImg from "../assets/images/mindful.jpg";
import movementImg from "../assets/images/movement.jpg";
import nourishImg from "../assets/images/nourish.jpg";
import glowImg from "../assets/images/glow.jpg";

const services = [
  { number: "01", title: "Mindful Living", description: "Ancient breathwork and meditation practices distilled into daily rituals that quiet the mind and reveal your true essence.", image: mindfulImg, accent: "#6B3FA0", tag: "Mindfulness" },
  { number: "02", title: "Move With Purpose", description: "Intentional movement rooted in wellness tradition. Build a body that flows as beautifully as you feel.", image: movementImg, accent: "#C9808A", tag: "Movement" },
  { number: "03", title: "Nourish Your Soul", description: "Plant-based wisdom for modern living. Every meal a ceremony, every ingredient chosen with care.", image: nourishImg, accent: "#9B6BB5", tag: "Nutrition" },
  { number: "04", title: "Glow Rituals", description: "Luxurious self-care ceremonies that honour your body as sacred. The art of the evening ritual, perfected.", image: glowImg, accent: "#C9808A", tag: "Self Care" },
];

const BentoCard = ({ service, delay, className }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
    >
      {/* Image */}
      <motion.div
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlay */}
      <motion.div
        animate={{ opacity: hovered ? 0.93 : 0.65 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-t from-deepplum via-deepplum/60 to-transparent"
      />

      {/* Accent top line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ backgroundColor: service.accent }}
      />

      {/* Top meta */}
      <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
        <span className="font-mono text-[9px] text-lavender/30 tracking-widest">{service.number}</span>
        <motion.span
          animate={{ opacity: hovered ? 1 : 0.5 }}
          className="font-mono text-[9px] tracking-widest uppercase px-3 py-1 border backdrop-blur-sm"
          style={{ color: service.accent, borderColor: `${service.accent}40` }}
        >
          {service.tag}
        </motion.span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.h3
          animate={{ y: hovered ? -6 : 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl md:text-3xl font-light text-cream leading-tight mb-2"
        >
          {service.title}
        </motion.h3>

        <motion.p
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
          transition={{ duration: 0.4 }}
          className="font-body text-sm text-lavender/70 leading-relaxed mb-4 overflow-hidden"
        >
          {service.description}
        </motion.p>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase"
          style={{ color: service.accent }}
        >
          Explore Ritual
          <motion.span
            animate={{ x: hovered ? [0, 6, 0] : 0 }}
            transition={{ repeat: hovered ? Infinity : 0, duration: 1.2 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Corner */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute bottom-5 right-5 z-10"
      >
        <div
          className="w-7 h-7 border flex items-center justify-center"
          style={{ borderColor: `${service.accent}60` }}
        >
          <span className="text-xs" style={{ color: service.accent }}>↗</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-40 px-8 md:px-20 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-plum/30" />
              <p className="font-mono text-[10px] text-plum/40 tracking-[0.5em] uppercase">The Rituals</p>
            </motion.div>

            {"Your Path to".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-5">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className="font-display text-5xl md:text-7xl font-light inline-block text-deepplum"
                >
                  {word}
                </motion.span>
              </div>
            ))}
            <br />
            <div className="overflow-hidden inline-block">
              <motion.span
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-5xl md:text-7xl font-light italic text-plum inline-block"
              >
                Radiance
              </motion.span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-body text-sm text-deepplum/30 max-w-xs leading-relaxed font-light"
          >
            Four sacred pillars of wellness, elevated for modern living.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <BentoCard service={services[0]} delay={0.1} className="md:col-span-7 h-[520px]" />
          <div className="md:col-span-5 grid grid-rows-2 gap-3 h-[520px]">
            <BentoCard service={services[1]} delay={0.2} className="h-full" />
            <BentoCard service={services[2]} delay={0.3} className="h-full" />
          </div>
          <BentoCard service={services[3]} delay={0.4} className="md:col-span-12 h-72" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#6B3FA0", color: "#FDF6F0" }}
            whileTap={{ scale: 0.96 }}
            className="border border-plum/25 text-deepplum/50 font-mono text-[10px] tracking-[0.4em] uppercase px-12 py-4 hover:border-plum transition-all duration-400"
          >
            View All Rituals →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;